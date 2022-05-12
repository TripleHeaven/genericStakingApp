<template>
  <div class="flex flex-col h-[60px]">
    <div
      class="border-[1px] rounded-[12px] flex font-sans px-[16px] py-[14px]"
      :class="err ? 'border-[#DA554A]' : 'border-[gray]'"
    >
      <input
        :value="value"
        @input="inputHandler"
        placeholder="Enter the amount"
        class="outline-none border-none w-full"
        type="text"
      />
      <div class="flex">
        <span
          @click="maxHandler"
          class="text-[#FFD42C] cursor-pointer text-[20px]"
          >Max</span
        >
      </div>
    </div>
    <small class="text-red-700 pl-[14px] pt-1" v-if="err"
      >Error proper amount</small
    >
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps<{
  value: any;
  inputHandler: () => void;
  err: boolean;
  maxHandler: () => void;
}>();
</script>
