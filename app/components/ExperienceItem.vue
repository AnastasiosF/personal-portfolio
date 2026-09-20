<script setup lang="ts">
import type { ExperienceCollectionItem } from '@nuxt/content'

defineProps<{ item: ExperienceCollectionItem }>()
</script>

<template>
  <li class="grid gap-x-6 gap-y-1 border-t border-border py-5 md:grid-cols-[10rem_1fr]">
    <div class="text-sm text-muted">
      <p>{{ formatRange(item.start, item.end) }}</p>
      <p v-if="item.location">{{ item.location }}</p>
    </div>
    <div>
      <h3 class="font-medium">
        {{ item.role }}
        <span class="text-muted">@</span>
        <a v-if="item.url" :href="item.url" class="link" rel="noopener" target="_blank">{{ item.company }}</a>
        <template v-else>{{ item.company }}</template>
      </h3>
      <ul class="mt-2 space-y-1 pl-[2ch] text-fg marker:text-muted" style="list-style: '- '">
        <li v-for="line in item.highlights" :key="line" class="max-w-[70ch]">{{ line }}</li>
      </ul>
      <p v-if="item.tech.length" class="mt-2 flex flex-wrap gap-x-3 text-sm">
        <TechTag v-for="tag in item.tech" :key="tag" :name="tag" />
      </p>
    </div>
  </li>
</template>
