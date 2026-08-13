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
  <!-- Source: Tabler layout-sidebar-right-expand (MIT) -->
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
    class="tabler-icon tabler-icon-card-show-b"
  >
    <path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -12" />
    <path d="M15 4v16" />
    <path d="M10 10l-2 2l2 2" />
  </svg>
</template>
