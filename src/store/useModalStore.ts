import { defineStore } from "pinia";

interface State {
  isOpen: boolean;
  variant: string;
  connectModal: boolean;
}

export const useModalStore = defineStore("modal", {
  state: (): State => ({
    isOpen: false,
    variant: "connect",
    connectModal: false,
  }),

  getters: {
    getConnectModal(): boolean {
      return this.connectModal;
    },
  },

  actions: {
    showConnectModal(value: boolean) {
      this.connectModal = value;
    },
  },
});
