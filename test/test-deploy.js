const { ethers } = require("hardhat");
const { expect, assert } = require("chai");

describe("SimpleStorage", () => {
  let simpleStorageFactory, simpleStorage;

  beforeEach(async () => {
    simpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
    simpleStorage = await simpleStorageFactory.deploy();
  });

  it("Should start with a favorate number of 0", async () => {
    const currentValue = await simpleStorage.retrieve();
    const expectedValue = 0;

    assert.equal(currentValue, expectedValue);
  });

  it("Should update when we call store", async () => {
    const expectedValue = 7;
    const transectionResponse = await simpleStorage.store(expectedValue);
    await transectionResponse.wait(1);

    const currentValue = await simpleStorage.retrieve();

    assert.equal(currentValue, expectedValue);
  });
});
