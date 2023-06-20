import React from "react";
import { useEffect, useState } from "react";
import Web3 from "web3";
import { ethers } from "ethers";

function App() {
  const [blockNumber, setBlockNumber] = useState();
  const [balance, setBalance] = useState();
  const [account, setAccount] = useState();
  const [chainId, setChanId] = useState();

  const web3 = new Web3("websocket key");

  async function connect() {
    if (window.ethereum) {
      try {
        const res = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        console.log("result : ", res);
        setAccount(res[0]);

        const _balance = await window.ethereum.request({
          method: "eth_getBalance",
          params: [res[0].toString(), "latest"],
        });

        // setBalance(Number(_balance));
        setBalance(ethers.formatEther(_balance));
        getChainId();
      } catch (err) {
        console.error(err);
      }
    } else {
      console.log("Install metamask");
    }
  }

  async function getChainId() {
    if (window.ethereum) {
      const ID = await window.ethereum.request({
        method: "eth_chainId",
      });
      setChanId(ID);
    }
  }

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("chainChanged", chainChanged);
    }
  });

  const chainChanged = async () => {
    if (window.ethereum) {
      setAccount(null);
      setBalance(null);
      connect();
    }
  };

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", connect);
    }
  });

  useEffect(() => {
    async function getBlock() {
      const blockNumber = await web3.eth.getBlockNumber();
      setBlockNumber(Number(blockNumber));
    }

    getBlock();
  });

  useEffect(() => {
    async function getBalance() {
      if (account) {
        const _balance = await web3.eth.getBalance(account);
        setBalance(ethers.formatEther(_balance));
      } else {
        console.log("wallet is not connected!");
      }
    }

    getBalance();

    async function subscribeBlock() {
      const subscription = await web3.eth.subscribe("newHeads");
      subscription.on("data", async (blockHead) => {
        console.log("New block header : ", blockHead);
        setBlockNumber(Number(blockHead.number));
      });
    }

    subscribeBlock();
  });

  return (
    <div>
      <div
        className="App"
        onClick={() => {
          connect();
        }}
      >
        CONNECT WALLET
      </div>
      <li>current Block Number : {blockNumber} </li>
      <li>current address : {account} </li>
      <li>current balance : {balance} eth </li>
      <li>current chainId : {chainId} </li>
    </div>
  );
}

export default App;
