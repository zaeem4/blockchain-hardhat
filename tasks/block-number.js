const { task } = require("hardhat/config");

task("blocknumber", "Prints the current block number").setAction(
  async (taskArgs, hre) => {
    const blockNumber = await hre.ethers.provider.getBlockNumber();
    console.log(`current block number is ${blockNumber}`);
  }
);

module.exports = {};
