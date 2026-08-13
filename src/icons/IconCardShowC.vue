<script setup lang="ts">
withDefaults(
  defineProps<{
    size?: number | string
    stroke?: number | string
  }>(),
  { size: 24, stroke: 2 },
)
</script>

<template>
  <!-- Source: Lucide panel-bottom-open (ISC) -->
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    :stroke-width="stroke"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="tabler-icon tabler-icon-card-show-c"
  >
    <rect width="18" height="18" x="3" y="3" rx="2" />
    <path d="M3 15h18" />
    <path d="m9 10 3-3 3 3" />
  </svg>
</template>
