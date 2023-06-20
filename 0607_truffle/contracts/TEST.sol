// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract TEST {
    uint public AA = 10;
    
    function setA(uint _n) public {
        AA = _n;
    }

    function getA() public view returns(uint){
        return AA;
    }
}
s
