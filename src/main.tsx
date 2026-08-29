import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { getTheme } from './theme'
import { ThemeModeProvider, useThemeMode } from './context/ThemeModeContext'
import { LanguageProvider } from './context/LanguageContext'

function ThemedApp() {
  const { mode } = useThemeMode()
  return (
    <ThemeProvider theme={getTheme(mode)}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeModeProvider>
      <LanguageProvider>
        {/* basename keeps routing correct under the GitHub Pages subpath. */}
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <ThemedApp />
        </BrowserRouter>
      </LanguageProvider>
    </ThemeModeProvider>
  </StrictMode>,
)
