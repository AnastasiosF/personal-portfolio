<script setup lang="ts">
/**
 * A <ul> whose rows "print" one after another, like command output, the
 * first time it scrolls into view. Without JS (or with reduced motion) the
 * rows are simply visible.
 *
 * `delay` is measured from mount, so a list that is sequenced after a typed
 * prompt waits for it on first paint, but a list scrolled into view later
 * prints immediately.
 */
const props = withDefaults(defineProps<{ delay?: number }>(), { delay: 0 })

const el = ref<HTMLElement | null>(null)
const printed = ref(false)
const remainingDelay = ref(props.delay)

onMounted(() => {
  const node = el.value
  const mountedAt = performance.now()

  if (!node || !('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    printed.value = true
    return
  }

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries.some(entry => entry.isIntersecting)) {
        remainingDelay.value = Math.max(0, props.delay - (performance.now() - mountedAt))
        printed.value = true
        observer.disconnect()
      }
    },
    { rootMargin: '0px 0px -10% 0px' },
  )
  observer.observe(node)
  onBeforeUnmount(() => observer.disconnect())
})
</script>

<template>
  <ul
    ref="el"
    class="print"
    :class="{ 'is-printed': printed }"
    :style="{ '--print-delay': `${remainingDelay}ms` }"
  >
    <slot />
  </ul>
</template>
