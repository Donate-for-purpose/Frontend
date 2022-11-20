/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export declare namespace DFP {
  export type FundsStruct = {
    provider: PromiseOrValue<string>;
    funds: PromiseOrValue<BigNumberish>;
  };

  export type FundsStructOutput = [string, BigNumber] & {
    provider: string;
    funds: BigNumber;
  };
}

export interface DFPInterface extends utils.Interface {
  functions: {
    "contribute(address,address)": FunctionFragment;
    "funds(address,uint256)": FunctionFragment;
    "getFunds(address)": FunctionFragment;
    "providers(address)": FunctionFragment;
    "registerUpdateProvider(string)": FunctionFragment;
    "send(address,uint256)": FunctionFragment;
    "totalFunds()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "contribute"
      | "funds"
      | "getFunds"
      | "providers"
      | "registerUpdateProvider"
      | "send"
      | "totalFunds"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "contribute",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "funds",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getFunds",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "providers",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "registerUpdateProvider",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "send",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "totalFunds",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "contribute", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "funds", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getFunds", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "providers", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "registerUpdateProvider",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "send", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "totalFunds", data: BytesLike): Result;

  events: {
    "Contributed(address,address)": EventFragment;
    "PaidToProvider(address,address,uint256)": EventFragment;
    "ProviderUpdated(address,string)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Contributed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PaidToProvider"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProviderUpdated"): EventFragment;
}

export interface ContributedEventObject {
  receipent: string;
  purpose: string;
}
export type ContributedEvent = TypedEvent<
  [string, string],
  ContributedEventObject
>;

export type ContributedEventFilter = TypedEventFilter<ContributedEvent>;

export interface PaidToProviderEventObject {
  provider: string;
  paidBy: string;
  amount: BigNumber;
}
export type PaidToProviderEvent = TypedEvent<
  [string, string, BigNumber],
  PaidToProviderEventObject
>;

export type PaidToProviderEventFilter = TypedEventFilter<PaidToProviderEvent>;

export interface ProviderUpdatedEventObject {
  provider: string;
  name: string;
}
export type ProviderUpdatedEvent = TypedEvent<
  [string, string],
  ProviderUpdatedEventObject
>;

export type ProviderUpdatedEventFilter = TypedEventFilter<ProviderUpdatedEvent>;

export interface DFP extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: DFPInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    contribute(
      receipent: PromiseOrValue<string>,
      purpose: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    funds(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber] & { provider: string; funds: BigNumber }>;

    getFunds(
      ofAddr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[DFP.FundsStructOutput[]]>;

    providers(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    registerUpdateProvider(
      name: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    send(
      purpose: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    totalFunds(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  contribute(
    receipent: PromiseOrValue<string>,
    purpose: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  funds(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<[string, BigNumber] & { provider: string; funds: BigNumber }>;

  getFunds(
    ofAddr: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<DFP.FundsStructOutput[]>;

  providers(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  registerUpdateProvider(
    name: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  send(
    purpose: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  totalFunds(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    contribute(
      receipent: PromiseOrValue<string>,
      purpose: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    funds(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber] & { provider: string; funds: BigNumber }>;

    getFunds(
      ofAddr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<DFP.FundsStructOutput[]>;

    providers(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    registerUpdateProvider(
      name: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    send(
      purpose: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    totalFunds(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "Contributed(address,address)"(
      receipent?: null,
      purpose?: null
    ): ContributedEventFilter;
    Contributed(receipent?: null, purpose?: null): ContributedEventFilter;

    "PaidToProvider(address,address,uint256)"(
      provider?: null,
      paidBy?: null,
      amount?: null
    ): PaidToProviderEventFilter;
    PaidToProvider(
      provider?: null,
      paidBy?: null,
      amount?: null
    ): PaidToProviderEventFilter;

    "ProviderUpdated(address,string)"(
      provider?: null,
      name?: null
    ): ProviderUpdatedEventFilter;
    ProviderUpdated(provider?: null, name?: null): ProviderUpdatedEventFilter;
  };

  estimateGas: {
    contribute(
      receipent: PromiseOrValue<string>,
      purpose: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    funds(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getFunds(
      ofAddr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    providers(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    registerUpdateProvider(
      name: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    send(
      purpose: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    totalFunds(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    contribute(
      receipent: PromiseOrValue<string>,
      purpose: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    funds(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getFunds(
      ofAddr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    providers(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    registerUpdateProvider(
      name: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    send(
      purpose: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    totalFunds(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
