import { defineStore } from "pinia";

interface State {
  pageId: number;
}

export const useRoutingStore = defineStore("routing", {
  state: (): State => ({
    pageId: 1,
  }),

  getters: {
    getCurrentPageId(): number {
      return this.pageId;
    },
    getIsActive: (state) => (id) => {
      return state.pageId === id;
    },
  },

  actions: {
    setPageId(value: number) {
      this.pageId = value;
    },
  },
});
