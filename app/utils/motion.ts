/** Shared timing for the CSS typewriter so pages can sequence output after a prompt. */
export const TYPE_DELAY_MS = 250
export const TYPE_CHAR_MS = 55

/** Total time (ms) from mount until a typed prompt has finished printing its command. */
export function typedDuration(command: string, delay = TYPE_DELAY_MS): number {
  return delay + command.length * TYPE_CHAR_MS + 120
}
