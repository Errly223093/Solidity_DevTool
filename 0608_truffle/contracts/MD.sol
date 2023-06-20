// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract MUL {
  uint public bb = 15;
  function mul(uint a, uint b) public pure returns(uint) {
    return a*b;
  }
  function setB(uint _b) public {
    bb = _b;
  }
}


contract DIV {
  function div(uint a, uint b) public pure returns(uint) {
    return a/b;
  }
}