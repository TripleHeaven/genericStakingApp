<template>
  <div
    v-show="modal.connectModal"
    class="absolute w-full h-full z-[2] modalContainer"
  >
    <ModalConnect />
  </div>
</template>

<script setup lang="ts">
import { useModalStore } from "../store/useModalStore";
import ModalConnect from "./ModalConnect.vue";

const modal = useModalStore();
</script>

<style scoped>
.modalContainer:before {
  content: " ";
  position: absolute;
  width: 100vw;
  height: 100vh;
  opacity: 0.4;
  background: linear-gradient(71.52deg, #395b77 16.69%, #1a242c 81.22%);
}
</style>
