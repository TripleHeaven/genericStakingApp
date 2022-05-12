<script setup lang="ts">
import LinkComponent from "./LinkComponent.vue";
import { useConnectStore } from "../store/useConnectStore";
import { computed } from "vue";
import ConnectButton from "./ConnectButton.vue";
import WalletInfo from "./WalletInfo.vue";

const connect = useConnectStore();
const walletConnected = computed(() => !connect.walletAddress);
</script>

<template>
  <header
    class="w-screen px-[150px] pt-[10px] flex justify-between items-center tabsWrapper"
  >
    <nav class="tabslist mb-auto" role="tablist" aria-label="navigation">
      <LinkComponent content="Staking" :pageId="1" />
      <LinkComponent content="Bridge" class="ml-2" :pageId="2" />
      <LinkComponent class="ml-10" content="SHO" :pageId="3" />
    </nav>

    <ConnectButton v-if="walletConnected" class="mb-[5px]" />
    <WalletInfo v-else />
  </header>
</template>

<style scoped>
a {
  text-decoration: none;
}

header {
  border-bottom: 1px solid #fff;
}

.tabslist {
  margin-left: auto;
  height: 49px;
  margin-bottom: -6px;
}
</style>
