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
  <!-- Source: custom composition — Tabler trophy + sparkle (MIT) -->
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
    class="tabler-icon tabler-icon-logo-c"
  >
    <path d="M12 3l0.8 1.6l1.8 0.3l-1.3 1.2l0.3 1.8l-1.6 -0.8l-1.6 0.8l0.3 -1.8l-1.3 -1.2l1.8 -0.3z" />
    <path d="M8 21l8 0" />
    <path d="M12 17l0 4" />
    <path d="M7 4l10 0" />
    <path d="M17 4v8a5 5 0 0 1 -10 0v-8" />
    <path d="M3 9a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M17 9a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  </svg>
</template>
