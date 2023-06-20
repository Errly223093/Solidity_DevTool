require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
const pvkey =
  "0xfa896ae487cbf86e1cb8caa5871697e996a0117c651fd4d8bf0c1ccf36944c54";
module.exports = {
  solidity: "0.8.18",
  etherscan: {
    apiKey: "6ZYZX8JCFSDE2SCQ8GQWECTVX4YKTZNER7",
  },
  networks: {
    goerli: {
      url: `https://goerli.infura.io/v3/4bc46d21f741449c981aa74ba6d10b1d`,
      accounts: [pvkey],
    },
  },
};
