<template>
  <div class="flex px-[400px] my-auto">
    <div class="flex flex-col mx-auto" v-if="currentPage === 1">
      <Staking />
    </div>

    <div v-if="currentPage === 2">
      <Bridge />
    </div>

    <div v-if="currentPage === 3">
      <SHO />
    </div>
  </div>
</template>

<script setup>
import Staking from "./Staking.vue";
import Bridge from "./Bridge.vue";
import SHO from "./SHO.vue";

import { computed } from "vue-demi";
import { useRoutingStore } from "../store/useRoutingStore";

const routing = useRoutingStore();

const currentPage = computed(() => routing.getCurrentPageId);
</script>

<style></style>
