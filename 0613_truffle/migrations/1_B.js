const A = artifacts.require("A");
const B = artifacts.require("B");

module.exports = function (deployer) {
  deployer.deploy(A, 123);
  deployer.deploy(B);
};
