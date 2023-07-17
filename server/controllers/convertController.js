// server/controllers/convertController.js
const axios = require('axios');
const ethers = require('ethers');
const dotenv = require('dotenv');
dotenv.config(); 

const { abi } = require('../../artifacts/contracts/GoldenPrice.sol/GoldPriceContract.json');
const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';

const provider = new ethers.providers.JsonRpcProvider(process.env.JSON_RPC_PROVIDER_URL);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
const contract = new ethers.Contract(contractAddress, abi, wallet);

module.exports = async (req, res) => {
  try {
    const response = await axios.get(`https://api.metalpriceapi.com/v1/convert`, {
      params: {
        api_key: process.env.METAL_PRICE_API_KEY,
        from: "BRL",
        to: "XAU",
        amount: "1"
      }
    });

    const goldPrice = ethers.utils.parseEther(response.data.result.toString());
    const tx = await contract.setGoldPrice(goldPrice);
    await tx.wait();

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching conversion rate' });
  }
};
