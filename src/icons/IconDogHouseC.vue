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
  <!-- Source: Hugeicons BirdhouseIcon (MIT) -->
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
    class="tabler-icon tabler-icon-dog-house-c"
  >
    <path d="M5 7L7 18M19 7L17 18" />
    <circle cx="12" cy="9" r="2" />
    <path d="M5 18h14" />
    <path d="M12 18v4" />
    <path d="M3 8L10.2 2.6a2 2 0 0 1 2.6 0L21 8" />
  </svg>
</template>
