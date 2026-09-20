<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()
const route = useRoute()

const isNotFound = computed(() => props.error.statusCode === 404)

useSeoMeta({
  title: isNotFound.value ? 'not found' : `error ${props.error.statusCode}`,
  robots: 'noindex',
})

function goHome() {
  clearError({ redirect: '/' })
}
</script>

<template>
  <NuxtLayout>
    <section class="boot">
      <TerminalPrompt tag="p" :command="`cd ${route.path}`" />
      <h1 class="mt-3 text-lg">
        <template v-if="isNotFound">no such file or directory: {{ route.path }}</template>
        <template v-else>{{ error.statusMessage || 'something went wrong' }} ({{ error.statusCode }})</template>
      </h1>
      <p class="mt-6">
        <button type="button" class="link" @click="goHome">cd ~</button>
      </p>
    </section>
  </NuxtLayout>
</template>
