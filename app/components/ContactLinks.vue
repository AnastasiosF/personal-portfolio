<script setup lang="ts">
const site = useSiteConfig()
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
  </ul>
</template>
