const allLanguages = {
  en: "English",
  de: "Deutsch",
  pt: "Português",
  es: "Español",
  fr: "Français",
  it: "Italiano",
  ja: "日本語",
  nl: "Nederlands",
  sv: "Svenska",
} as const

// Build for two languages only to speed up Astro's smoke tests
const twoLanguages = {
  en: "English",
  es: "Español",
} as const

/**
 * Map of language codes to a written out language name.
 * Used to populate the language switcher in the navbar.
 */
export default import.meta.env?.PUBLIC_TWO_LANG ? twoLanguages : allLanguages
