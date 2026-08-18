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
  <!-- Source: Lucide table (ISC) -->
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
    class="tabler-icon tabler-icon-table-b"
  >
    <path d="M12 3v18" />
    <path d="M3 9h18" />
    <path d="M3 15h18" />

    <rect width="18" height="18" x="3" y="3" rx="2" />
  </svg>
</template>
