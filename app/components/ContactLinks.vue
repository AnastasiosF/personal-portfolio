<script setup lang="ts">
const site = useSiteConfig()

withDefaults(defineProps<{ cv?: boolean }>(), { cv: false })
</script>

<template>
  <ul class="flex flex-wrap gap-x-6 gap-y-2">
    <li>
      <a :href="`mailto:${site.email}`" class="link inline-flex items-center gap-1.5">
        <Icon name="lucide:mail" class="size-4" aria-hidden="true" />
        email
      </a>
    </li>
    <li>
      <a :href="site.github" class="link inline-flex items-center gap-1.5" rel="me noopener" target="_blank">
        <Icon name="simple-icons:github" class="size-4" aria-hidden="true" />
        github
      </a>
    </li>
    <li>
      <a :href="site.linkedin" class="link inline-flex items-center gap-1.5" rel="me noopener" target="_blank">
        <Icon name="simple-icons:linkedin" class="size-4" aria-hidden="true" />
        linkedin
      </a>
    </li>
    <li v-if="cv">
      <a :href="site.cvPath" class="link inline-flex items-center gap-1.5" download>
        <Icon name="lucide:download" class="size-4" aria-hidden="true" />
        cv.pdf
      </a>
    </li>
  </ul>
</template>
