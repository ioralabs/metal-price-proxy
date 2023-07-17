const hre = require("hardhat");

async function main() {
  // Compile the contract
  await hre.run("compile");

  // Get the contract factory
  const GoldenPrice = await hre.ethers.getContractFactory("GoldPriceContract");

  // Deploy the contract
  const goldenPriceContract = await GoldenPrice.deploy();

  // Wait for the contract to be deployed
  await goldenPriceContract.deployed();

  // Get the deployed contract address
  console.log("GoldPriceContract deployed to:", goldenPriceContract.address);
}

// Run the deployment script
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
