<template>
  <!-- option -->
  <div
    @click="contract.select(props.id)"
    class="flex cursor-pointer flex-col rounded-[24px] hover:bg-[#EFF3F8] p-[24px] optionContainer gap-y-[8px]"
    :style="[
      props.selected ? 'background-color: #EFF3F8;' : 'background-color:white;',
    ]"
  >
    <p class="optionTitle">{{ props.days }} days</p>

    <div class="tax">
      APY: {{ props.apy }}%
      <img
        class="cursor-pointer ml-[8px]"
        src="@/assets/question.svg"
        alt="questionMark"
      />
    </div>

    <div class="amount">Amount: value - value TKN</div>
  </div>
</template>

<script lang="ts" setup>
import { useConnectStore } from "../store/useConnectStore";
import { useContractStore } from "../store/useContractStore";

const contract = useContractStore();

export interface StakingOption {
  id: number;
  days: number;
  apy: number;
  selected: boolean;
}

const props = defineProps<StakingOption>();
</script>

<style scoped>
.unsigned {
  font-weight: 700;
  font-size: 16px;
  color: #828a97;
}

.label {
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  font-size: 44px;
}

.tax {
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 20px;
  color: #da554a;
  display: flex;
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

.optionContainer {
  border: 1px solid #dfebf5;
}

.optionTitle {
  font-weight: 600;
  font-size: 36px;
}

.amount {
  font-size: 20px;
  color: #828a97;
}
</style>
