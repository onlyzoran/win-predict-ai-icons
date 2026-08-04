<script setup lang="ts">
withDefaults(
  defineProps<{
    size?: number | string
  }>(),
  { size: 24 },
)
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="currentColor"
    class="tabler-icon tabler-icon-circle-filled"
  >
    <path d="M7 3.34a10 10 0 1 1 -4.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 4.995 -8.336z" />
  </svg>
</template>
