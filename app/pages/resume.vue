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

const command = 'cat ~/resume.md'
const done = typedDuration(command)

useSeoMeta({
  title: 'resume',
  description: `Work history, education, and skills of ${site.name}.`,
  ogTitle: 'Resume',
  ogDescription: `Work history, education, and skills of ${site.name}.`,
})
</script>

<template>
  <div>
    <TerminalPrompt tag="h1" :command="command" label="Resume" />
    <div class="boot" :style="{ '--boot-delay': `${done}ms` }">
      <section class="mt-8" aria-labelledby="experience">
        <h2 id="experience" class="heading-md">experience</h2>
        <PrintList class="mt-4 border-b border-border">
          <ExperienceItem v-for="item in experience" :key="item.id" :item="item" />
        </PrintList>
      </section>

      <section class="mt-12" aria-labelledby="education">
        <h2 id="education" class="heading-md">education</h2>
        <PrintList class="mt-4 border-b border-border">
          <EducationItem v-for="item in education" :key="item.id" :item="item" />
        </PrintList>
      </section>

      <section v-if="skills" class="mt-12" aria-labelledby="skills">
        <h2 id="skills" class="heading-md">skills</h2>
        <SkillsGrid class="mt-4 border-b border-border" :groups="skills.groups" />
      </section>
    </div>
  </div>
</template>
