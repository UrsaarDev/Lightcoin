import { Contract } from "@ethersproject/contracts";
import { JsonRpcProvider } from "@ethersproject/providers";
import { ethers } from "ethers";
import { USDTToken } from '../config/contractConfig'
import networkConfig from '../config/networkConfig'

const provider = new JsonRpcProvider("https://bsc-dataseed1.defibit.io/");

export const CluContract = new Contract(
  "0x1162e2efce13f99ed259ffc24d99108aaa0ce935",
  require("./cluabi.json"),
  provider
);

export const getWalletBalance = (address: string) => {
  console.log(CluContract.functions);
  return CluContract.functions["balanceOf"](address);
};


export const getUsdtBalance = async (_singer: any, address: string) => {
  const cluContract = new ethers.Contract(USDTToken.address[networkConfig.defaultNetwork], USDTToken.abi, _singer)
  return await cluContract.balanceOf(address);
}