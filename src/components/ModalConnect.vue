<template>
  <div
    @click="modal.showConnectModal(false)"
    class="absolute w-full h-full"
  ></div>

  <div
    class="fixed top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] bg-white pt-[60px] pb-[40px] px-[40px] rounded-[12px] w-[670px]"
  >
    <img
      @click="modal.showConnectModal(false)"
      class="absolute top-[20px] right-[20px] cursor-pointer"
      src="@/assets/closeIcon.svg"
      alt="close"
    />
    <div class="text-left max-w-[500px]">
      <h2 class="font-[800] text-[24px] montserrat">
        Select the payment card that you want to use for payment
      </h2>
      <div class="text-[16px] mt-[32px]">
        The selected wallet will be connected to your staking
      </div>
      <div class="w-full flex mt-[24px]">
        <div>
          <button
            @click="connect.connectMetamask"
            class="flex justify-center items-center w-[271px] rounded-[12px] py-[32px] border-[#DFEBF5] border-[1px]"
          >
            <img src="@/assets/metamask.svg" alt="metamask" />
            <span class="ml-[8px]">MetaMask</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { useConnectStore } from "@/store/useConnectStore";

// const connect = useConnectStore();

import { useModalStore } from "../store/useModalStore";
import { useConnectStore } from "../store/useConnectStore";

const modal = useModalStore();
const connect = useConnectStore();
</script>

<style scoped>
.montserrat {
  font-family: "Montserrat", sans-serif;
}

.modalContent {
  /* opacity: 1; */
}
</style>
