<script setup lang="ts">
defineProps<{ name: string }>()
</script>

<template>
  <span class="text-muted">#{{ name }}</span>
</template>
