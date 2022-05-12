<template>
  <div v-if="!connect.account">
    <div
      class="rounded-[16px] bg-[#EFF3F8] pl-[20px] py-[20px] unsigned flex mt-[55px]"
    >
      <img
        class="cursor-pointer ml-[8px]"
        src="@/assets/info.svg"
        alt="questionMark"
      />
      <p class="my-auto ml-[20px]">
        To perform actions on the page, approve your wallet
      </p>
    </div>

    <!--  text block -->
    <div class="flex justify between mt-[52px]">
      <button
        @click="connect.connectMetamask"
        class="rounded-[12px] flex justify-center text-white bg-[#FFD42C] h-[56px] px-auto w-[230px]"
      >
        <span v-if="connect.metamaskLoader" class="loader"> </span>

        <div class="font-bold text-[16px] my-auto ml-2">Approve wallet</div>
      </button>
      <button
        @click="openWindow"
        class="ml-auto rounded-[12px] rounted-[12px] text-[16px] border-[1px] border-[#DFEBF5] px-auto w-[230px]"
      >
        View contract
      </button>
    </div>
  </div>
</template>

<script setup>
import { useConnectStore } from "../store/useConnectStore";
import { useContractStore } from "../store/useContractStore";

const connect = useConnectStore();
const contract = useContractStore();

const url =
  "https://testnet.bscscan.com/address/0x3514E8A6Ca64B6861B7054bbFb5A5ea75392eb9C";

const openWindow = () => window.open(url, "_blank").focus();
</script>

<style scoped>
.unsigned {
  font-weight: 700;
  font-size: 16px;
  color: #828a97;
}
</style>
