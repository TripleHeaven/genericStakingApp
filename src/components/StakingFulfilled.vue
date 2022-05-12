<template>
  <div
    class="w-full bg-[#fff] rounded-[24px] flex flex-col py-[64px] max-w-[1200px] px-[56px] my-[32px]"
  >
    <div class="flex justify-between">
      <p class="label">Staking App</p>
      <WalletApprovedSign v-show="connect.account" class="my-auto" />
    </div>

    <div
      class="container flex flex-col pt-[56px] px-[64px] pb-[32px] mt-[90px]"
    >
      <span class="rewardValue text-[44px]">value VAL </span>
      <span class="rewardLabel">TKN earned</span>

      <div class="flex justify-between gap-x-[32px] mt-[24px]">
        <div
          class="bg-[#EFF3F8] px-[28px] py-[24px] flex flex-col rounded-[12px] z-20"
        >
          <span class="text-[#828A97] text-[16px]">From</span>
          <span class="montserrat font-[800] text-[24px]">22 Jun, 14:14</span>
        </div>

        <div
          class="bg-[#EFF3F8] px-[28px] py-[24px] flex flex-col rounded-[12px] z-20"
        >
          <span class="text-[#828A97] text-[16px]">From</span>
          <span class="montserrat font-[800] text-[24px]">22 Jun, 14:14</span>
        </div>

        <div
          class="bg-[#EFF3F8] px-[28px] py-[24px] flex flex-col rounded-[12px] z-20"
        >
          <span class="text-[#828A97] text-[16px]">From</span>
          <span class="montserrat font-[800] text-[24px]">22 Jun, 14:14</span>
        </div>

        <div
          class="bg-[#EFF3F8] px-[28px] py-[24px] flex flex-col rounded-[12px] z-20"
        >
          <span class="text-[#828A97] text-[16px]">From</span>
          <span class="montserrat font-[800] text-[24px]">22 Jun, 14:14</span>
        </div>
      </div>
    </div>

    <NotSignedStakingBlock v-if="!connect.account" />
    <SignedStakingBlock v-else />

    <img class="hand" src="@/assets/hand.png" alt="hand" />
  </div>
</template>

<script setup>
import { useConnectStore } from "../store/useConnectStore";
import { useContractStore } from "../store/useContractStore";
import NotSignedStakingBlock from "./NotSignedStakingBlock.vue";
import SignedStakingBlock from "./SignedStakingBlock.vue";
import InputField from "./InputField.vue";
import StakingOption from "./StakingOption.vue";
import WalletApprovedSign from "./WalletApprovedSign.vue";

const connect = useConnectStore();
const contract = useContractStore();
</script>

<style scoped>
.container {
  border: 1px solid #dfebf5;
  border-radius: 24px;
}

.label {
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  font-size: 44px;
}

.rewardLabel {
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 20px;
  color: #b3b7bf;
  margin-top: 4px;
}

.montserrat {
  font-family: "Montserrat", sans-serif;
}

.rewardValue {
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  font-size: 44px;
  line-height: 32px;

  color: #da554a;
}

.hand {
  position: absolute;
  right: 280px;
  z-index: 10;
  width: 276px;
  height: 384px;
}
</style>
