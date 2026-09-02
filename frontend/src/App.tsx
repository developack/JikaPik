import { Routes, Route } from 'react-router'
import { LoginPage } from '@/pages/LoginPage'
import { DashboardPage } from '@/pages/DashboardPage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { Toaster } from '@/components/ui/toast'
import ProtectedRoutes from '@/routes/ProtectedRoutes'


function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
        
        <Route element={<ProtectedRoutes />}>
          <Route index element={<DashboardPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
