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
  <!-- Source: custom composition — Tabler target + chart-line (MIT) -->
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
    class="tabler-icon tabler-icon-logo-a"
  >
    <path d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <path d="M7 12a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    <path d="M6 16l3 -4l3 2l5 -7" />
    <path d="M17 7v3h3" />
  </svg>
</template>
