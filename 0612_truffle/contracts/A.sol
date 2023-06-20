// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract A {
    function getCA() public view returns(address){
        return address(this);
    }

    uint public a;

    function setA(uint _n) public {
        a = _n;
    }

    function triple(uint _a,uint _b,uint _c) public pure returns(uint) {
        return _a*_b*_c;
    }
}
