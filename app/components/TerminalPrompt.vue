<script setup lang="ts">
/**
 * A heading rendered as a shell prompt: `~ $ command`.
 * Pass `label` to give assistive tech a plain-language heading while the
 * command stays visual-only.
 */
withDefaults(
  defineProps<{
    command: string
    label?: string
    tag?: 'h1' | 'h2' | 'h3' | 'p'
    path?: string
    cursor?: boolean
  }>(),
  { tag: 'h2', path: '~', cursor: false, label: undefined },
)
</script>

<template>
  <component
    :is="tag"
    class="font-medium leading-snug"
    :class="tag === 'h1' ? 'text-2xl md:text-3xl' : 'text-lg md:text-xl'"
  >
    <span v-if="label" class="sr-only">{{ label }}</span>
    <span :aria-hidden="label ? 'true' : undefined">
      <span class="text-accent select-none">{{ path }} $ </span>{{ command }}
    </span>
    <BlinkCursor v-if="cursor" />
  </component>
</template>
