<script setup lang="ts">
const site = useSiteConfig()
const route = useRoute()

const links = [
  { to: '/', label: '~' },
  { to: '/projects', label: '~/projects' },
  { to: '/resume', label: '~/resume' },
]

// The prompt mirrors wherever you are on the site: ~/projects/foo
const cwd = computed(() => {
  const path = route.path.replace(/\/+$/, '')
  return path ? `~${path}` : '~'
})

function isActive(to: string) {
  return to === '/' ? route.path === '/' : route.path.startsWith(to)
}
</script>

<template>
  <header class="border-b border-border">
    <div class="mx-auto flex w-full max-w-3xl flex-wrap items-baseline justify-between gap-x-8 gap-y-2 px-5 py-4 text-sm">
      <p class="truncate" aria-label="Current location">
        <NuxtLink to="/" class="hover:text-accent">{{ site.handle }}@{{ site.host }}</NuxtLink><span class="text-muted">:</span><span class="text-accent">{{ cwd }}</span><span class="text-muted"> $</span>
      </p>
      <nav aria-label="Primary">
        <ul class="flex gap-x-5">
          <li v-for="link in links" :key="link.to">
            <NuxtLink
              :to="link.to"
              class="hover:text-accent"
              :class="isActive(link.to) ? 'text-accent' : 'text-muted'"
              :aria-current="isActive(link.to) ? 'page' : undefined"
            >
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
