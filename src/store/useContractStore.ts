import { Contract, providers, BigNumber } from "ethers";
import { ContractType } from "../typechain/ContractType";

import {
  abi as contractAbi,
  address as contractAddr,
} from "../abis/Staking.json";
import { useConnectStore } from "./useConnectStore";
import { defineStore, storeToRefs } from "pinia";
import { createToaster } from "@meforma/vue-toaster";
import {
  contrAbiT,
  contractAbir,
  contractAddress,
  contrArressT,
  FixedStakingContract,
  MainContract,
  tokenContrAbiT,
  TokenContract,
  tokenContrAddressT,
} from "./contract";
import { TokenType } from "../typechain/TokenType";

export interface PeriodStaking {
  id: number;
  days: number;
  apy: number;
  selected: boolean;
}

export interface StakedInfo {
  id: number;
  index: number;
  period: number;
  from: string;
  staked: BigNumber;
  earned: BigNumber;
  timer: string;
}

interface Store {
  periods: Array<PeriodStaking>;
  period: number;
  inputValue: string | null;
  errorInput: boolean;
  showLoader: boolean;
}

export const useContractStore = defineStore("fixed", {
  state: (): Store => ({
    periods: [
      { id: 0, days: 30, apy: 103.23, selected: true },
      { id: 2, days: 90, apy: 116.86, selected: false },
      { id: 3, days: 180, apy: 129.97, selected: false },
    ],
    period: 0,
    inputValue: "",
    errorInput: false,
    showLoader: false,
  }),

  getters: {
    getInputValue(state: Store): string {
      return state.inputValue;
    },
  },

  actions: {
    select(id: number): void {
      this.period = id;
      this.periods.filter((el: PeriodStaking) => {
        if (el.id === id) {
          el.selected = true;
          return el;
        }
      });
      this.periods.filter((el: PeriodStaking) => {
        if (el.id !== id) {
          el.selected = false;
          return el;
        }
      });
    },

    getSelectedPeriod(): PeriodStaking {
      return this.periods.find((el) => el.id === this.period);
    },

    maxAmount() {
      const connect = useConnectStore();
      //  how to format BN properly need to truncate number DEC HEX ?
      this.inputValue = 1000;
    },

    inputHandler(e: any) {
      const connect = useConnectStore();
      const regex = /^[0-9]*[.]?[0-9]*$/;

      if (!regex.test(e.target.value)) {
        e.target.value = this.inputValue;
      } else {
        this.inputValue = e.target.value;
        if (
          // format bigN ? What prop does contract accept ?
          Number(this.inputValue) > Number(connect.balance)
        ) {
          this.errorInput = true;
        } else if (this.inputValue.length > 0 && this.inputValue === 0) {
          this.errorInput = true;
        } else {
          this.errorInput = false;
        }
      }
    },

    async getMyStakes() {
      const connect = useConnectStore();

      let res = await FixedStakingContract.myActiveStakesCount(
        connect.walletAddress
      );

      console.log(res);
    },

    async stake(amount: string) {
      const toaster = createToaster({
        position: "bottom",
        dismissible: true,
      });

      if (amount.length < 1) {
        toaster.error(`Enter correct amount!`);
        return;
      }

      const connect = useConnectStore();

      this.showLoader = true;

      const accountSigner = new Contract(
        tokenContrAddressT,
        tokenContrAbiT,
        connect.account()
      ) as unknown as TokenType;

      // need to process BigN
      const res = accountSigner.approve(contrArressT, amount);

      //  need to add process error
      if (res[1]) {
        this.showLoader = false;
        return res[1];
      }

      await res[0];

      const stakingSigner = new Contract(
        contrArressT,
        contrAbiT,
        connect.account()
      ) as unknown as ContractType;

      // id doesnt accept my tokens need to know how to test
      const summary = await stakingSigner.stake(this.period, amount);

      connect.balance = await TokenContract.balanceOf(connect.walletAddress);

      return summary;
    },
  },
});
