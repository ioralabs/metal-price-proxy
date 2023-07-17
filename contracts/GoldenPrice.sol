pragma solidity ^0.6.0;

contract GoldPriceContract {
    uint256 public goldPrice;

    function getGoldPrice() public view returns (uint256) {
        return goldPrice;
    }

    function setGoldPrice(uint256 _goldPrice) public {
        goldPrice = _goldPrice;
    }
}
