<script setup lang="ts">
const { data: projects } = await useAsyncData('all-projects', () =>
  queryCollection('projects').order('stem', 'ASC').all(),
)

const command = 'ls -l ~/projects'
const done = typedDuration(command)

useSeoMeta({
  title: 'projects',
  description: 'Selected projects: backends, Android apps, and developer tooling.',
  ogTitle: 'Projects',
  ogDescription: 'Selected projects: backends, Android apps, and developer tooling.',
})
</script>

<template>
  <section aria-labelledby="projects">
    <TerminalPrompt id="projects" tag="h1" :command="command" label="Projects" />
    <div class="boot" :style="{ '--boot-delay': `${done}ms` }">
      <p class="mt-3 text-muted">total {{ projects?.length ?? 0 }}</p>
    </div>
    <PrintList class="mt-4 border-b border-border" :delay="done + 120">
      <ProjectRow v-for="project in projects" :key="project.path" :project="project" />
    </PrintList>
  </section>
</template>
