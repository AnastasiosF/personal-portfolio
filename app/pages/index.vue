<script setup lang="ts">
const site = useSiteConfig()

const { data: featured } = await useAsyncData('featured-projects', () =>
  queryCollection('projects').where('featured', '=', true).order('stem', 'ASC').limit(3).all(),
)

const { data: recent } = await useAsyncData('recent-experience', () =>
  queryCollection('experience').order('start', 'DESC').limit(3).all(),
)

// Sequence: the hero prompt types, then its output boots in, then the lists print.
const heroCommand = 'whoami'
const heroDone = typedDuration(heroCommand)
const projectsCommand = 'ls ~/projects --featured'
const experienceCommand = 'tail -n 3 ~/experience.log'

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
    <section aria-labelledby="whoami">
      <TerminalPrompt id="whoami" tag="h1" :command="heroCommand" :label="site.name" cursor />
      <div class="boot" :style="{ '--boot-delay': `${heroDone}ms` }">
        <p class="mt-5 text-2xl font-medium md:text-3xl">{{ site.name }}</p>
        <p class="mt-2 max-w-[60ch] text-muted">{{ site.tagline }}</p>
        <p class="mt-6 max-w-[65ch]">
          I lead the InfoGate mobile and onboard products at DANAOS: ship-to-shore messaging used
          by 150+ shipping companies, running as an Electron app at sea and React Native apps on
          the phone. I own them from architecture to production support.
        </p>
        <p class="mt-3 max-w-[65ch]">
          On the side I build <NuxtLink to="/projects/myfitzone" class="link">myFitZone</NuxtLink>,
          a booking and business platform for independent trainers. Based in Greece, working
          remotely.
        </p>
        <ContactLinks class="mt-8" />
      </div>
    </section>

    <section class="mt-16" aria-labelledby="featured">
      <TerminalPrompt id="featured" :command="projectsCommand" label="Featured projects" :delay="heroDone + 500" />
      <PrintList class="mt-4 border-b border-border" :delay="typedDuration(projectsCommand, heroDone + 500)">
        <ProjectRow v-for="project in featured" :key="project.path" :project="project" />
      </PrintList>
      <p class="mt-4">
        <NuxtLink to="/projects" class="link">all projects</NuxtLink>
      </p>
    </section>

    <section class="mt-16" aria-labelledby="recent">
      <TerminalPrompt id="recent" :command="experienceCommand" label="Recent experience" :delay="heroDone + 900" />
      <PrintList class="mt-4 border-b border-border" :delay="typedDuration(experienceCommand, heroDone + 900)">
        <ExperienceItem v-for="item in recent" :key="item.id" :item="item" />
      </PrintList>
      <p class="mt-4">
        <NuxtLink to="/resume" class="link">full resume</NuxtLink>
      </p>
    </section>
  </div>
</template>
