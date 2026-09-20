<script setup lang="ts">
const site = useSiteConfig()

const { data: experience } = await useAsyncData('experience', () =>
  queryCollection('experience').order('start', 'DESC').all(),
)
const { data: education } = await useAsyncData('education', () =>
  queryCollection('education').order('start', 'DESC').all(),
)
const { data: skills } = await useAsyncData('skills', () =>
  queryCollection('skills').first(),
)

useSeoMeta({
  title: 'resume',
  description: `Work history, education, and skills of ${site.name}.`,
  ogTitle: 'Resume',
  ogDescription: `Work history, education, and skills of ${site.name}.`,
})
</script>

<template>
  <div>
    <TerminalPrompt tag="h1" command="cat ~/resume.md" label="Resume" />
    <p class="mt-3">
      <a :href="site.cvPath" class="link inline-flex items-center gap-1.5" download>
        <Icon name="lucide:download" class="size-4" aria-hidden="true" />
        download as pdf
      </a>
    </p>

    <section class="mt-12" aria-labelledby="experience">
      <h2 id="experience" class="heading-md">experience</h2>
      <ul class="mt-4 border-b border-border">
        <ExperienceItem v-for="item in experience" :key="item.id" :item="item" />
      </ul>
    </section>

    <section class="mt-12" aria-labelledby="education">
      <h2 id="education" class="heading-md">education</h2>
      <ul class="mt-4 border-b border-border">
        <EducationItem v-for="item in education" :key="item.id" :item="item" />
      </ul>
    </section>

    <section v-if="skills" class="mt-12" aria-labelledby="skills">
      <h2 id="skills" class="heading-md">skills</h2>
      <SkillsGrid class="mt-4 border-b border-border" :groups="skills.groups" />
    </section>
  </div>
</template>
