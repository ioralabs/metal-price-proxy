// test/GoldenPrice.js
const { expect } = require("chai");
const axios = require("axios");

describe("GoldPriceContract", function() {
  let contract;

  before(async function() {
    const GoldPriceContract = await ethers.getContractFactory("GoldPriceContract");
    contract = await GoldPriceContract.deploy();
    await contract.deployed();
  });

  describe("Contract Deployment", function() {
    it("Should deploy the contract and set the initial values correctly", async function() {
      // Verify contract deployment
      expect(contract.address).to.not.be.undefined;

      // Verify initial gold price
      const initialGoldPrice = await contract.goldPrice();
      expect(initialGoldPrice).to.equal(0);
    });
  });

  describe("Setting Gold Price", function() {
    it("Should set and get the gold price correctly", async function() {
      const newGoldPrice = ethers.utils.parseEther("1000");
      await contract.setGoldPrice(newGoldPrice);
  
      // Verify the updated gold price
      const updatedGoldPrice = await contract.goldPrice();
      expect(updatedGoldPrice).to.equal(newGoldPrice);
  
      // Call the getGoldPrice function
      const retrievedGoldPrice = await contract.getGoldPrice();
      expect(retrievedGoldPrice).to.equal(newGoldPrice);
    });
  });
  
});

