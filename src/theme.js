export const THEME_LIGHT = 'light'
export const THEME_DARK = 'dark'
export const THEME_STORAGE_KEY = 'portfolio-theme'

export function getStoredTheme() {
  if (typeof window === 'undefined') return THEME_LIGHT
  const stored = localStorage.getItem(THEME_STORAGE_KEY)
  if (stored === THEME_LIGHT || stored === THEME_DARK) return stored
  return THEME_LIGHT
}

export function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme)
  localStorage.setItem(THEME_STORAGE_KEY, theme)
}

export function initTheme() {
  applyTheme(getStoredTheme())
}
