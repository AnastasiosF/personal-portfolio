<script setup lang="ts">
const route = useRoute()
const site = useSiteConfig()

const { data: project } = await useAsyncData(`project:${route.path}`, () =>
  queryCollection('projects').path(route.path).first(),
)

if (!project.value) {
  throw createError({ statusCode: 404, statusMessage: 'Project not found', fatal: true })
}

const { data: surround } = await useAsyncData(`project-surround:${route.path}`, () =>
  queryCollectionItemSurroundings('projects', route.path, { fields: ['title'] }).order('stem', 'ASC'),
)

const slug = computed(() => route.path.split('/').pop() ?? '')
const prev = computed(() => surround.value?.[0] ?? null)
const next = computed(() => surround.value?.[1] ?? null)

useSeoMeta({
  title: project.value.title,
  description: project.value.description,
  ogTitle: project.value.title,
  ogDescription: project.value.description,
  ogType: 'article',
  ogImage: project.value.image ? `${site.siteUrl}${project.value.image}` : `${site.siteUrl}/og.png`,
})
</script>

<template>
  <article v-if="project">
    <TerminalPrompt tag="h1" path="~/projects" :command="`cat ${slug}.md`" :label="project.title" />

    <header class="mt-6">
      <p class="text-2xl font-medium md:text-3xl">{{ project.title }}</p>
      <p class="mt-2 max-w-[65ch] text-muted">{{ project.description }}</p>
      <dl class="mt-5 grid gap-x-6 gap-y-1 text-sm md:grid-cols-[7rem_1fr]">
        <dt class="text-muted">date</dt>
        <dd><time :datetime="project.date">{{ formatYearMonth(project.date) }}</time></dd>
        <dt class="text-muted">status</dt>
        <dd>{{ project.status }}</dd>
        <template v-if="project.tech.length">
          <dt class="text-muted">stack</dt>
          <dd class="flex flex-wrap gap-x-3"><TechTag v-for="tag in project.tech" :key="tag" :name="tag" /></dd>
        </template>
        <template v-if="project.repo || project.url">
          <dt class="text-muted">links</dt>
          <dd class="flex flex-wrap gap-x-4">
            <a v-if="project.repo" :href="project.repo" class="link" rel="noopener" target="_blank">source</a>
            <a v-if="project.url" :href="project.url" class="link" rel="noopener" target="_blank">live</a>
          </dd>
        </template>
      </dl>
    </header>

    <ContentRenderer :value="project" class="prose-terminal mt-10" />

    <nav class="mt-16 flex flex-wrap justify-between gap-4 border-t border-border pt-6 text-sm" aria-label="Other projects">
      <NuxtLink v-if="prev" :to="prev.path" class="link">&lt; {{ prev.title }}</NuxtLink>
      <span v-else />
      <NuxtLink v-if="next" :to="next.path" class="link">{{ next.title }} &gt;</NuxtLink>
    </nav>
  </article>
</template>
