<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()
const route = useRoute()

const isNotFound = computed(() => props.error.statusCode === 404)
const command = computed(() => `cd ${route.path}`)
const done = computed(() => typedDuration(command.value))

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
    <section>
      <TerminalPrompt tag="p" :command="command" />
      <div class="boot" :style="{ '--boot-delay': `${done}ms` }">
        <h1 class="mt-3 text-lg">
          <template v-if="isNotFound">no such file or directory: {{ route.path }}</template>
          <template v-else>{{ error.statusMessage || 'something went wrong' }} ({{ error.statusCode }})</template>
        </h1>
        <p class="mt-6">
          <button type="button" class="link" @click="goHome">cd ~</button>
        </p>
      </div>
    </section>
  </NuxtLayout>
</template>
