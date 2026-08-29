import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import type { ThemeMode } from '../types'
import { shadowsByMode, spineByMode, tokensByMode } from '../theme'

const STORAGE_KEY = 'cv-theme-mode'

function readStoredMode(): ThemeMode {
  if (typeof window === 'undefined') return 'dark'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  return stored === 'light' || stored === 'dark' ? stored : 'dark'
}

interface ThemeModeContextValue {
  mode: ThemeMode
  setMode: (mode: ThemeMode) => void
}

const ThemeModeContext = createContext<ThemeModeContextValue | null>(null)

export function ThemeModeProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<ThemeMode>(readStoredMode)

  const setMode = (next: ThemeMode) => {
    setModeState(next)
    window.localStorage.setItem(STORAGE_KEY, next)
  }

  useEffect(() => {
    document.documentElement.style.colorScheme = mode
  }, [mode])

  const value = useMemo(() => ({ mode, setMode }), [mode])

  return <ThemeModeContext.Provider value={value}>{children}</ThemeModeContext.Provider>
}

export function useThemeMode() {
  const ctx = useContext(ThemeModeContext)
  if (!ctx) throw new Error('useThemeMode must be used within a ThemeModeProvider')
  return ctx
}

/** The active palette — swap this in for the old static `tokens`/`spine`/`shadows` imports. */
export function useTokens() {
  const { mode } = useThemeMode()
  return {
    tokens: tokensByMode[mode],
    spine: spineByMode[mode],
    shadows: shadowsByMode[mode],
  }
}
