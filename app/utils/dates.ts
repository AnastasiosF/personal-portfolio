const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

/** "2024-03" → "Mar 2024", "2024" → "2024". */
export function formatYearMonth(value: string): string {
  const [year, month] = value.split('-')
  if (!year) return value
  const index = month ? Number(month) - 1 : -1
  const name = MONTHS[index]
  return name ? `${name} ${year}` : year
}

/** "2022-01", undefined → "Jan 2022 – present". */
export function formatRange(start: string, end?: string): string {
  return `${formatYearMonth(start)} – ${end ? formatYearMonth(end) : 'present'}`
}
