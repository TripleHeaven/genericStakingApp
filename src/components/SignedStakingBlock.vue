<template>
  <div class="mt-[47px] flex flex-col">
    <InputField
      :value="contract.getInputValue"
      :maxHandler="contract.maxAmount"
      :inputHandler="contract.inputHandler"
      :err="contract.errorInput"
    />
    <div class="mt-[24px] h-[32px]">
      <span class="rewardLabel align-text-bottom"
        >Reward for {{ contract.getSelectedPeriod().days }} days:</span
      >
      <span class="rewardValue align-text-bottom">
        <!-- fake logic -->
        {{
          Math.floor(contract.getSelectedPeriod().apy - 100) *
          Number(contract.inputValue)
        }}
        VAL
      </span>
    </div>
    <div class="flex justify between mt-[52px]">
      <button
        @click="contract.stake(contract.inputValue)"
        class="rounded-[12px] text-white bg-[#FFD42C] py-[18px] px-auto w-[230px] font-bold text-[16px]"
      >
        Stake
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
import InputField from "./InputField.vue";

const url =
  "https://testnet.bscscan.com/address/0x3514E8A6Ca64B6861B7054bbFb5A5ea75392eb9C";

const openWindow = () => window.open(url, "_blank").focus();

const connect = useConnectStore();
const contract = useContractStore();
</script>

<style scoped>
.label {
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  font-size: 44px;
}

.rewardLabel {
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 20px;
}

.rewardValue {
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  font-size: 24px;
  margin-left: 16px;
  line-height: 32px;

  color: #da554a;
}

.amount {
  font-size: 20px;
  color: #828a97;
}
</style>
