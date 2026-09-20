<script setup lang="ts">
import type { ProjectsCollectionItem } from '@nuxt/content'

defineProps<{ project: ProjectsCollectionItem }>()
</script>

<template>
  <li class="grid gap-x-6 gap-y-1 border-t border-border py-5 md:grid-cols-[7rem_1fr]">
    <div class="text-sm text-muted">
      <time :datetime="project.date">{{ formatYearMonth(project.date) }}</time>
      <span v-if="project.status !== 'active'" class="block">[{{ project.status }}]</span>
    </div>
    <div>
      <NuxtLink :to="project.path" class="link font-medium">{{ project.title }}<span class="text-muted">/</span></NuxtLink>
      <p class="mt-1 max-w-[70ch] text-muted">{{ project.description }}</p>
      <p class="mt-2 flex flex-wrap gap-x-3 text-sm">
        <TechTag v-for="tag in project.tech" :key="tag" :name="tag" />
        <a v-if="project.repo" :href="project.repo" class="link" rel="noopener" target="_blank">source</a>
        <a v-if="project.url" :href="project.url" class="link" rel="noopener" target="_blank">live</a>
      </p>
    </div>
  </li>
</template>
