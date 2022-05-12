import { defineStore } from "pinia";
import { providers } from "ethers";
import { useModalStore } from "./useModalStore";
import { TokenContract } from "./contract";
import { createToaster } from "@meforma/vue-toaster";

declare var window: any;

export const useConnectStore = defineStore("connect", {
  state: () => ({
    metamaskConnect: false,
    metamaskLoader: false,
    account: null,
    walletAddress: null,
    balance: null,
    provider: null,
  }),

  getters: {},

  actions: {
    async connectMetamask() {
      if (window.ethereum) {
        this.metamaskLoader = true;

        const provider = new providers.Web3Provider(window.ethereum, "any");
        await provider.send("eth_requestAccounts", []);
        const account = provider.getSigner();

        this.walletAddress = await account.getAddress();
        const balance = await TokenContract.balanceOf(this.walletAddress);

        this.provider = () => provider;
        this.account = () => account;
        this.balance = balance;

        const modal = useModalStore();
        modal.showConnectModal(false);
        this.metamaskLoader = false;

        const toaster = createToaster({
          position: "bottom",
          dismissible: true,
        });

        toaster.success(`Wallet connected!`);

        console.log("walletaddr", this.walletAddress);
      } else {
        throw new Error("Check if you logged into MetaMask");
      }
    },
  },
});
