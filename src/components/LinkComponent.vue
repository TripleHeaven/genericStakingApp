<template>
  <a
    class="px-2 pt-3 text-[16px]"
    role="tab"
    @click="setPageId"
    :aria-selected="Boolean(isSelected)"
    :aria-controls="`page-${props.pageId}`"
    :id="`tab-${props.pageId}`"
  >
    {{ content }}
  </a>
</template>

<style scoped>
a:hover {
  cursor: pointer;
}
a {
  display: inline-block;
  height: 100%;
}
a[aria-selected="true"] {
  border-bottom: 4px solid #ed1c24;
  color: #da554a;
  font-weight: 700;
}
</style>

<script lang="ts" setup>
import { defineProps, computed } from "vue";
import { useRoutingStore } from "../store/useRoutingStore";

interface LinkComponent {
  to?: string;
  content: string;
  isSelected: boolean;
  pageId: number;
}

const props = defineProps<LinkComponent>();
const routing = useRoutingStore();

const isSelected = computed(() => routing.getIsActive(props.pageId));
const setPageId = () => routing.setPageId(props.pageId);
</script>
