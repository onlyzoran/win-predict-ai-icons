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
  <!-- Source: Tabler karate (MIT) -->
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
    class="tabler-icon tabler-icon-mma-a"
  >
    <path d="M3 9l4.5 1l3 2.5" />
    <path d="M13 21v-8l3 -5.5" />
    <path d="M8 4.5l4 2l4 1l4 3.5l-2 3.5" />
    <path d="M15.007 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  </svg>
</template>
