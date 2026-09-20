<script setup lang="ts">
const { data: projects } = await useAsyncData('all-projects', () =>
  queryCollection('projects').order('stem', 'ASC').all(),
)

useSeoMeta({
  title: 'projects',
  description: 'Selected projects: backends, Android apps, and developer tooling.',
  ogTitle: 'Projects',
  ogDescription: 'Selected projects: backends, Android apps, and developer tooling.',
})
</script>

<template>
  <section aria-labelledby="projects">
    <TerminalPrompt id="projects" tag="h1" command="ls -l ~/projects" label="Projects" />
    <p class="mt-3 text-muted">total {{ projects?.length ?? 0 }}</p>
    <ul class="mt-4 border-b border-border">
      <ProjectRow v-for="project in projects" :key="project.path" :project="project" />
    </ul>
  </section>
</template>
