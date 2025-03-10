import { defineStore } from "pinia";
import { store } from "@setaria/setaria-ts";

export const useDemo1Store = defineStore({
  id: "app-demo1",
  state: () => ({
    test1: 1,
    test2: 2,
  }),

  getters: {
    getDemo1Test1Info: (state) => {
      return state.test1;
    },
    getDemo1Test2Info: (state) => {
      return state.test2;
    },
  },
  actions: {
    setTest1(info) {
      this.test1 = info;
    },
    setTest2(info) {
      this.test2 = info;
    },
  },
});

// Need to be used outside the setup
export function useDemo1StoreWithOut() {
  return useDemo1Store(store);
}
