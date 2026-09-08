import { StrictMode } from 'react'
import { router } from '@/routes/router.tsx'
import { RouterProvider } from 'react-router'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from '@/contexts/ThemeContext.tsx'
import { AuthProvider } from '@/features/auth/contexts/AuthContext'
import '@/index.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </AuthProvider>
  </StrictMode>
)
