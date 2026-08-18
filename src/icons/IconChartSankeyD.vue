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
  <!-- Source: Tabler chart-arrows (MIT) -->
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
    class="tabler-icon tabler-icon-chart-sankey-d"
  >
    <path d="M3 18l14 0" />
    <path d="M9 9l3 3l-3 3" />
    <path d="M14 15l3 3l-3 3" />
    <path d="M3 3l0 18" />
    <path d="M3 12l9 0" />
    <path d="M18 3l3 3l-3 3" />
    <path d="M3 6l18 0" />


  </svg>
</template>
