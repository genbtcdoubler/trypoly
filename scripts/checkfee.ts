import { ethers } from "hardhat";

async function main() {
  const protocolFeesCollector = "0xBA69c96515514Ab6A58B51cD5125a0fE55274CC3";
  const ProtocolFeesCollector = await ethers.getContractAt(
    "IProtocolFeesCollector",
    protocolFeesCollector
  );
  const fee = await ProtocolFeesCollector.getFlashLoanFeePercentage();
  console.log("balancer flashloan fee percentage:", fee.toString());
} 

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
