import { ethers } from "hardhat";

async function main() {
  const protocolFeesCollector = "0xCd16000Da4D7A670AD2e03988E5cFfD11C34b6eE";
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
