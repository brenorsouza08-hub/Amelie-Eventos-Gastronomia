import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App'
import '@fontsource/cormorant-garamond/latin-400.css'
import '@fontsource/cormorant-garamond/latin-400-italic.css'
import '@fontsource/cormorant-garamond/latin-500.css'
import '@fontsource/cormorant-garamond/latin-500-italic.css'
import '@fontsource/manrope/latin-300.css'
import '@fontsource/manrope/latin-400.css'
import '@fontsource/manrope/latin-500.css'
import '@fontsource/manrope/latin-600.css'
import '@fontsource/pinyon-script/latin-400.css'
import './index.css'

const container = document.getElementById('root')
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

// Em produção o HTML vem pré-renderizado (melhor SEO e primeira pintura)
if (container.hasChildNodes()) hydrateRoot(container, app)
else createRoot(container).render(app)
