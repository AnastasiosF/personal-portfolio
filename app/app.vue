<script setup lang="ts">
const site = useSiteConfig()

useHead({
  titleTemplate: title => (title ? `${title} | ${site.name}` : site.name),
})

useSeoMeta({
  ogType: 'website',
  ogSiteName: site.name,
  ogImage: `${site.siteUrl}/og.png`,
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
