<script setup lang="ts">
/**
 * A heading rendered as a shell prompt: `~ $ command`.
 * The command is typed out with a CSS-only typewriter (no JS, no hydration
 * mismatch, honours prefers-reduced-motion). Pass `label` to give assistive
 * tech a plain-language heading while the command stays visual-only.
 */
const props = withDefaults(
  defineProps<{
    command: string
    label?: string
    tag?: 'h1' | 'h2' | 'h3' | 'p'
    path?: string
    cursor?: boolean
    typed?: boolean
    delay?: number
  }>(),
  { tag: 'h2', path: '~', cursor: false, label: undefined, typed: true, delay: TYPE_DELAY_MS },
)

const typingStyle = computed(() =>
  props.typed
    ? {
        '--chars': props.command.length,
        '--type-ms': `${props.command.length * TYPE_CHAR_MS}ms`,
        '--type-delay': `${props.delay}ms`,
      }
    : undefined,
)
</script>

<template>
  <component
    :is="tag"
    class="prompt font-medium leading-snug"
    :class="tag === 'h1' ? 'text-2xl md:text-3xl' : 'text-lg md:text-xl'"
    :style="typingStyle"
  >
    <span v-if="label" class="sr-only">{{ label }}</span>
    <span :aria-hidden="label ? 'true' : undefined">
      <span class="text-accent select-none">{{ path }} $ </span><span class="prompt-cmd" :class="{ 'is-typed': typed }">{{ command }}</span><BlinkCursor v-if="cursor" />
    </span>
  </component>
</template>
