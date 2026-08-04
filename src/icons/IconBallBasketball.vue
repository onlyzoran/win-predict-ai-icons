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
    class="tabler-icon tabler-icon-ball-basketball"
  >
    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    <path d="M5.65 5.65l12.7 12.7" />
    <path d="M5.65 18.35l12.7 -12.7" />
    <path d="M12 3a9 9 0 0 0 9 9" />
    <path d="M3 12a9 9 0 0 1 9 9" />
  </svg>
</template>
