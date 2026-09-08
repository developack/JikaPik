import { Toaster } from '@/components/ui/toast'
import { Outlet, useNavigation } from 'react-router'
import { TopProgressBar } from '@/components/layout/TopProgressBar'


export function App() {
  const navigation = useNavigation()
  const isNavigating = navigation.state === "loading"

  return (
    <>
      <TopProgressBar loading={isNavigating} />
      <Toaster />
      <Outlet />
    </>
  )
}

