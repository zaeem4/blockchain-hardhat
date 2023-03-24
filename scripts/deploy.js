const { ethers, run, network } = require("hardhat");

main = async () => {
  const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");

  console.log("Deploying contract...");
  const simpleStorage = await SimpleStorageFactory.deploy();
  await simpleStorage.deployed();

  console.log(`Deployed at ${simpleStorage.address}`);
  // console.log(network.config);
  if (network.config.chainId === 4) {
    simpleStorage.deployTransaction.wait(3);
    await verify(simpleStorage.address, []);
  }

  const currentValue = await simpleStorage.retrieve();
  console.log(`Current value is ${currentValue}`);

  const transection = await simpleStorage.store(7);
  await transection.wait(1);

  const updatedValue = await simpleStorage.retrieve();
  console.log(`Updated value is ${updatedValue}`);
};

verify = async (contractAddress, args) => {
  console.log("Verifying contract...");
  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
    });
  } catch (error) {
    if (error.message.toLowerCase().includes("already verify")) {
      console.log("Already Verify");
    } else {
      console.log(error);
    }
  }
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
