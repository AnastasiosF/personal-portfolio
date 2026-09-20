<script setup lang="ts">
const site = useSiteConfig()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-border">
    <div class="mx-auto w-full max-w-3xl space-y-4 px-5 py-8 text-sm">
      <ContactLinks cv />
      <p class="text-muted">
        &copy; {{ year }} {{ site.name }}. Built with Nuxt, hosted on Vercel.
      </p>
      <p class="text-muted" aria-hidden="true">$ exit</p>
    </div>
  </footer>
</template>
