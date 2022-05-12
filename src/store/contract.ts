import { Contract, providers } from "ethers";
import { ContractType } from "../typechain/ContractType";

import {
  abi as contractAbi,
  address as contractAddr,
} from "../abis/Staking.json";

import {
  abi as tokenAbi,
  address as tokenContrAddress,
} from "../abis/Token.json";
import { TokenType } from "../typechain/TokenType";

export const bscRPC = "https://data-seed-prebsc-1-s1.binance.org:8545";
export const bscProvider = new providers.JsonRpcProvider(bscRPC);

export const FixedStakingContract = new Contract(
  contractAddr,
  contractAbi,
  bscProvider
) as unknown as ContractType;

export const TokenContract = new Contract(
  tokenContrAddress,
  tokenAbi,
  bscProvider
) as unknown as TokenType;

export const tokenContrAddressT = tokenContrAddress;
export const tokenContrAbiT = tokenAbi;

export const contrArressT = contractAddr;
export const contrAbiT = contractAbi;
