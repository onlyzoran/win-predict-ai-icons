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
  <!-- Source: Iconoir eye-closed (MIT) -->
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
    class="tabler-icon tabler-icon-eye-off-c"
  >
    <path d="M19.5 16L17.0248 12.6038" />
    <path d="M12 17.5V14" />
    <path d="M4.5 16L6.96895 12.6124" />
    <path d="M3 8C6.6 16 17.4 16 21 8" />
  </svg>
</template>
