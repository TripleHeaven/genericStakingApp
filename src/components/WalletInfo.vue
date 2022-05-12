<script setup lang="ts">
import { useConnectStore } from "../store/useConnectStore";
import { computed } from "vue";
import { truncate } from "../utils";
import { useContractStore } from "../store/useContractStore";

const connect = useConnectStore();

//  need to ask how to format bigN properly
const balance = computed(() => connect.balance);
const copy = () => navigator.clipboard.writeText(connect.walletAddress);

const contract = useContractStore();
</script>

<template>
  <button
    @click="contract.getMyStakes"
    class="ml-[57px] p-[8px] bg-white text-[16px] duration-5 rounded-[12px] font-noto transition-all active:bg-[gray] cursor-default active:text-bold"
  >
    <div class="flex gap-[20px]">
      <div class="balance px-[9px] py-[8px] flex text-[14px]">
        {{ truncate(connect.walletAddress) }}
        <img
          @click="copy"
          class="cursor-pointer ml-[8px]"
          src="@/assets/copy.svg"
          alt="copy"
        />
      </div>
      <div class="text-[14px] font-[500] align-middle my-auto">
        {{ balance }} VAL
      </div>
    </div>
  </button>
</template>

<style scoped>
.balance {
  background: rgba(255, 212, 44, 0.2);
  border-radius: 8px;
  color: #e2ad06;
}
</style>
