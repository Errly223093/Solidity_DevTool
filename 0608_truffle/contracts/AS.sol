// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract ADD {
  uint aa=10;
  function add(uint a, uint b) public pure returns(uint) {
    return a+b;
  }
  function setA(uint _a) public{
    aa = _a;
  }
}

contract SUB {
  function sub(uint a, uint b) public pure returns(uint) {
    return a-b;
  }
}