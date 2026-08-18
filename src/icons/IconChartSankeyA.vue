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
  <!-- Source: Tabler chart-sankey (MIT) -->
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
    class="tabler-icon tabler-icon-chart-sankey-a"
  >
    <path d="M4 6c6.944 0 9.056 8 16 8" />
    <path d="M4 12c6.37 0 9.63 6 16 6" />
    <path d="M20 6c-7.526 0 -7.905 12 -16 12" />


  </svg>
</template>
