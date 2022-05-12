import BN from "bn.js";
import BigNumber from "bignumber.js";
import {
  PromiEvent,
  TransactionReceipt,
  EventResponse,
  EventData,
  Web3ContractContext,
} from "ethereum-abi-types-generator";

export interface CallOptions {
  from?: string;
  gasPrice?: string;
  gas?: number;
}

export interface SendOptions {
  from: string;
  value?: number | string | BN | BigNumber;
  gasPrice?: string;
  gas?: number;
}

export interface EstimateGasOptions {
  from?: string;
  value?: number | string | BN | BigNumber;
  gas?: number;
}

export interface MethodPayableReturnContext {
  send(options: SendOptions): PromiEvent<TransactionReceipt>;
  send(
    options: SendOptions,
    callback: (error: Error, result: any) => void
  ): PromiEvent<TransactionReceipt>;
  estimateGas(options: EstimateGasOptions): Promise<number>;
  estimateGas(
    options: EstimateGasOptions,
    callback: (error: Error, result: any) => void
  ): Promise<number>;
  encodeABI(): string;
}

export interface MethodConstantReturnContext<TCallReturn> {
  call(): Promise<TCallReturn>;
  call(options: CallOptions): Promise<TCallReturn>;
  call(
    options: CallOptions,
    callback: (error: Error, result: TCallReturn) => void
  ): Promise<TCallReturn>;
  encodeABI(): string;
}

export interface MethodReturnContext extends MethodPayableReturnContext {}

export type ContractContext = Web3ContractContext<
  ContractType,
  ContractTypeMethodNames,
  ContractTypeEventsContext,
  ContractTypeEvents
>;
export type ContractTypeEvents =
  | "IncreaseRewardsPool"
  | "OwnershipTransferred"
  | "Staked"
  | "TransferOwnership"
  | "Unstaked";
export interface ContractTypeEventsContext {
  IncreaseRewardsPool(
    parameters: {
      filter?: { adder?: string | string[] };
      fromBlock?: number;
      toBlock?: "latest" | number;
      topics?: string[];
    },
    callback?: (error: Error, event: EventData) => void
  ): EventResponse;
  OwnershipTransferred(
    parameters: {
      filter?: {
        previousOwner?: string | string[];
        newOwner?: string | string[];
      };
      fromBlock?: number;
      toBlock?: "latest" | number;
      topics?: string[];
    },
    callback?: (error: Error, event: EventData) => void
  ): EventResponse;
  Staked(
    parameters: {
      filter?: {
        sender?: string | string[];
        class?: string | number | string | number[];
      };
      fromBlock?: number;
      toBlock?: "latest" | number;
      topics?: string[];
    },
    callback?: (error: Error, event: EventData) => void
  ): EventResponse;
  TransferOwnership(
    parameters: {
      filter?: {
        previousOwner?: string | string[];
        newOwner?: string | string[];
      };
      fromBlock?: number;
      toBlock?: "latest" | number;
      topics?: string[];
    },
    callback?: (error: Error, event: EventData) => void
  ): EventResponse;
  Unstaked(
    parameters: {
      filter?: {
        sender?: string | string[];
        class?: string | number | string | number[];
      };
      fromBlock?: number;
      toBlock?: "latest" | number;
      topics?: string[];
    },
    callback?: (error: Error, event: EventData) => void
  ): EventResponse;
}
export type ContractTypeMethodNames =
  | "new"
  | "MAX_STAKES"
  | "TKN"
  | "getClassesAmount"
  | "increaseRewardsPool"
  | "myActiveStakesCount"
  | "myStakes"
  | "owner"
  | "ownerOf"
  | "periods"
  | "rates"
  | "renounceOwnership"
  | "returnAccidentallySent"
  | "rewardsPool"
  | "setRates"
  | "stake"
  | "stakes"
  | "stakesInfo"
  | "stakesInfoAll"
  | "stakesLength"
  | "stakesOf"
  | "totalValueLocked"
  | "transferOwnership"
  | "unstake"
  | "updateMax";
export interface IncreaseRewardsPoolEventEmittedResponse {
  adder: string;
  added: string;
  newSize: string;
}
export interface OwnershipTransferredEventEmittedResponse {
  previousOwner: string;
  newOwner: string;
}
export interface StakedEventEmittedResponse {
  sender: string;
  class: string | number;
  amount: string;
  finalAmount: string;
}
export interface TransferOwnershipEventEmittedResponse {
  previousOwner: string;
  newOwner: string;
}
export interface UnstakedEventEmittedResponse {
  sender: string;
  class: string | number;
  amount: string;
}
export interface SResponse {
  class: string;
  initialAmount: string;
  finalAmount: string;
  timestamp: string;
  unstaked: boolean;
}
export interface MyStakesResponse {
  s: SResponse[];
  indexes: string[];
}
export interface StakesResponse {
  class: string;
  initialAmount: string;
  finalAmount: string;
  timestamp: string;
  unstaked: boolean;
}
export interface ContractType {
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: constructor
   * @param _TKN Type: address, Indexed: false
   */
  "new"(_TKN: string): MethodReturnContext;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  MAX_STAKES(): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  TKN(): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  getClassesAmount(): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param _amount Type: uint256, Indexed: false
   */
  increaseRewardsPool(_amount: string): MethodReturnContext;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param _me Type: address, Indexed: false
   */
  myActiveStakesCount(_me: string): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param _me Type: address, Indexed: false
   */
  myStakes(_me: string): MethodConstantReturnContext<MyStakesResponse>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  owner(): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param parameter0 Type: uint256, Indexed: false
   */
  ownerOf(parameter0: string): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param parameter0 Type: uint256, Indexed: false
   */
  periods(parameter0: string): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param parameter0 Type: uint256, Indexed: false
   */
  rates(parameter0: string): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   */
  renounceOwnership(): MethodReturnContext;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param _TKN Type: address, Indexed: false
   */
  returnAccidentallySent(_TKN: string): MethodReturnContext;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  rewardsPool(): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param newRates Type: uint32[5], Indexed: false
   */
  setRates(
    newRates: [
      string | number,
      string | number,
      string | number,
      string | number,
      string | number,
      string | number
    ]
  ): MethodReturnContext;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param _class Type: uint8, Indexed: false
   * @param _amount Type: uint256, Indexed: false
   */
  stake(_class: string | number, _amount: string): MethodReturnContext;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param parameter0 Type: uint256, Indexed: false
   */
  stakes(parameter0: string): MethodConstantReturnContext<StakesResponse>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param _from Type: uint256, Indexed: false
   * @param _to Type: uint256, Indexed: false
   */
  stakesInfo(
    _from: string,
    _to: string
  ): MethodConstantReturnContext<SResponse[]>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  stakesInfoAll(): MethodConstantReturnContext<SResponse[]>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  stakesLength(): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param parameter0 Type: address, Indexed: false
   * @param parameter1 Type: uint256, Indexed: false
   */
  stakesOf(
    parameter0: string,
    parameter1: string
  ): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param parameter0 Type: uint256, Indexed: false
   */
  totalValueLocked(parameter0: string): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param newOwner Type: address, Indexed: false
   */
  transferOwnership(newOwner: string): MethodReturnContext;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param _index Type: uint256, Indexed: false
   */
  unstake(_index: string): MethodReturnContext;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param _max Type: uint256, Indexed: false
   */
  updateMax(_max: string): MethodReturnContext;
}
