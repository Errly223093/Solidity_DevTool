// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.18;

contract A {
    constructor(uint _a) {
        a = _a;
    }
    uint public a;
}

contract B {
    uint public a;

    function setA(uint _b) public {
        a = _b;
    }
}

