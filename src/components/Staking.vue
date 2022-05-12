<template>
  <div
    class="w-full bg-[#fff] rounded-[24px] flex flex-col max-w-[1200px] py-[64px] px-[56px] mt-[100px]"
  >
    <div class="flex justify-between">
      <p class="label">Staking App</p>
      <WalletApprovedSign v-show="connect.account" class="my-auto" />
    </div>
    <div class="flex justify-between gap-x-[32px] mt-[52px]">
      <!-- option -->
      <StakingOption
        v-for="item in contract.periods"
        :key="item.id"
        :id="item.id"
        :days="item.days"
        :apy="item.apy"
        :selected="item.selected"
      />
    </div>

    <NotSignedStakingBlock v-if="!connect.account" />
    <SignedStakingBlock v-else />
  </div>
  <StakingFulfilled />
</template>

<script setup>
import { useConnectStore } from "../store/useConnectStore";
import { useContractStore } from "../store/useContractStore";
import NotSignedStakingBlock from "./NotSignedStakingBlock.vue";
import SignedStakingBlock from "./SignedStakingBlock.vue";
import InputField from "./InputField.vue";
import StakingOption from "./StakingOption.vue";
import WalletApprovedSign from "./WalletApprovedSign.vue";
import StakingFulfilled from "./StakingFulfilled.vue";
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
</style>
