<script setup lang="ts">
import { useModalStore } from "../store/useModalStore";
import { useConnectStore } from "../store/useConnectStore";

const modal = useModalStore();
const connect = useConnectStore();
</script>

<template>
  <button
    v-if="!connect.account"
    @click="modal.showConnectModal(true)"
    class="ml-[57px] px-[25px] py-[14px] bg-white text-[16px] duration-5 rounded-[12px] font-noto transition-all active:bg-[gray] hover:bg-[gray] hover:text-[#fff] active:text-bold"
  >
    Connect wallet
  </button>
</template>
