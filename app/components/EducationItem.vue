<script setup lang="ts">
import type { EducationCollectionItem } from '@nuxt/content'

defineProps<{ item: EducationCollectionItem }>()
</script>

<template>
  <li class="grid gap-x-6 gap-y-1 border-t border-border py-5 md:grid-cols-[10rem_1fr]">
    <p class="text-sm text-muted">{{ formatRange(item.start, item.end) }}</p>
    <div>
      <h3 class="font-medium">
        {{ item.degree }}<template v-if="item.field">, {{ item.field }}</template>
      </h3>
      <p class="text-muted">{{ item.institution }}</p>
      <ul v-if="item.notes.length" class="mt-2 space-y-1 pl-[2ch] marker:text-muted" style="list-style: '- '">
        <li v-for="line in item.notes" :key="line" class="max-w-[70ch]">{{ line }}</li>
      </ul>
    </div>
  </li>
</template>
