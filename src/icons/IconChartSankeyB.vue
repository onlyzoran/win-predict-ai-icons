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
  <!-- Source: Lucide chart-network (ISC) -->
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
    class="tabler-icon tabler-icon-chart-sankey-b"
  >
    <path d="m13.11 7.664 1.78 2.672" />
    <path d="m14.162 12.788-3.324 1.424" />
    <path d="m20 4-6.06 1.515" />
    <path d="M3 3v16a2 2 0 0 0 2 2h16" />
    <circle cx="12" cy="6" r="2" fill="currentColor" />
    <circle cx="16" cy="12" r="2" fill="currentColor" />
    <circle cx="9" cy="15" r="2" fill="currentColor" />

  </svg>
</template>
