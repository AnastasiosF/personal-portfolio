<script setup lang="ts">
import type { SkillsCollectionItem } from '@nuxt/content'

defineProps<{ groups: SkillsCollectionItem['groups'] }>()
</script>

<template>
  <dl class="grid gap-x-6 gap-y-3 border-t border-border py-5 md:grid-cols-[10rem_1fr]">
    <template v-for="group in groups" :key="group.name">
      <dt class="text-muted">{{ group.name }}<span class="md:hidden">:</span></dt>
      <dd class="mb-2 md:mb-0">{{ group.items.join(', ') }}</dd>
    </template>
  </dl>
</template>
