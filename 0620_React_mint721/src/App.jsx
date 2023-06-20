import React from "react";
import { useEffect, useState } from "react";
import Web3 from "web3";
import abi from "./abi.json";
import abi2 from "./abi2.json";

function App() {
  const [balance, setBalance] = useState();
  const [account, setAccount] = useState();

  const web3 = new Web3(
    "sepolia api" // 세폴리아
  );

  var c_addr = `0xF4be4F99ffAfC131fe14E40530d0489904E6393B`; // 721 주소
  var c_addr2 = `0x6fcdfda91998c1bc8dfc1bcd2434108d321b9288`; // 20 주소
  var insurPool = "0x88cDBb31196Af16412F9a3D4196D645a830E5a4b"; // 보험 기금

  const contract = web3.eth.Contract(abi, c_addr);
  const contract2 = web3.eth.Contract(abi, c_addr2);

  async function connect() {
    if (window.ethereum) {
      try {
        const res = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(res[0]);
      } catch (err) {
        console.error(err);
      }
    } else {
      console.log("Install metamask");
    }
  }
  connect();

  async function minting(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    var a = web3.utils.numberToHex(Number(data.get("amount")));

    // 그럼, erc20 컨트랙트에 erc721 임포트 하고, 아래 transfer 함수 실행과 erc721 _mint 같이
    // 넣어버리면?

    await window.ethereum.request({
      method: "eth_sendTransaction",
      params: [
        {
          from: account,
          to: c_addr2,
          data: contract.methods.transfer(insurPool, a).encodeABI(),
        }, // 만약 여기서 돈을 안내서 require 로 막히면? 아래의 민팅까지 가능?
        // 그냥 우회해서 터미널에서 mint 찍어버리면?
        {
          from: account,
          to: c_addr,
          data: contract.methods.MintToken(a).encodeABI(),
        },
      ],
    });
  }

  return (
    <div>
      <form onSubmit={minting}>
        <input type="text" name="address" placeholder="write address"></input>
        <input type="text" name="amount" placeholder="write amount"></input>
        <button type="submit">Send TX</button>
      </form>
    </div>
  );
}

export default App;
