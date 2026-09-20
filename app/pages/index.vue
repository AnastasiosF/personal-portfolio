<script setup lang="ts">
const site = useSiteConfig()

const { data: featured } = await useAsyncData('featured-projects', () =>
  queryCollection('projects').where('featured', '=', true).order('stem', 'ASC').limit(3).all(),
)

const { data: recent } = await useAsyncData('recent-experience', () =>
  queryCollection('experience').order('start', 'DESC').limit(2).all(),
)

useHead({ titleTemplate: null })
useSeoMeta({
  title: `${site.name}, software engineer`,
  description: site.tagline,
  ogTitle: site.name,
  ogDescription: site.tagline,
})
</script>

<template>
  <div>
    <section class="boot" aria-labelledby="whoami">
      <TerminalPrompt id="whoami" tag="h1" command="whoami" :label="site.name" cursor />
      <p class="mt-5 text-2xl font-medium md:text-3xl">{{ site.name }}</p>
      <p class="mt-2 max-w-[60ch] text-muted">{{ site.tagline }}</p>
      <div class="mt-6 max-w-[65ch] space-y-3">
        <p>
          [PLACEHOLDER] Two or three sentences about you. What you build, what you care about
          when you build it, and the kind of problems you like being handed.
        </p>
        <p>
          [PLACEHOLDER] Where you are based, what you are doing now, and whether you are open to
          new work.
        </p>
      </div>
      <ContactLinks class="mt-8" />
    </section>

    <section class="mt-16" aria-labelledby="featured">
      <TerminalPrompt id="featured" command="ls ~/projects --featured" label="Featured projects" />
      <ul class="mt-4 border-b border-border">
        <ProjectRow v-for="project in featured" :key="project.path" :project="project" />
      </ul>
      <p class="mt-4">
        <NuxtLink to="/projects" class="link">all projects</NuxtLink>
      </p>
    </section>

    <section class="mt-16" aria-labelledby="recent">
      <TerminalPrompt id="recent" command="tail -n 2 ~/experience.log" label="Recent experience" />
      <ul class="mt-4 border-b border-border">
        <ExperienceItem v-for="item in recent" :key="item.id" :item="item" />
      </ul>
      <p class="mt-4">
        <NuxtLink to="/resume" class="link">full resume</NuxtLink>
      </p>
    </section>
  </div>
</template>
