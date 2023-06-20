const hre = require("hardhat");

async function main() {
  const LOCK = await hre.ethers.getContractFactory("ABCToken");
  const lock = await LOCK.deploy(123456789);
  console.log("LOCK deployed to : ", lock);
  console.log("LOCK deployed to : ", lock.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
