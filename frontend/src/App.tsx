import { Routes, Route } from 'react-router'
import { LoginPage } from '@/pages/LoginPage'
import { DashboardPage } from '@/pages/DashboardPage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { Toaster } from './components/ui/toast'


function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route index element={<DashboardPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
