import { App } from '@/App'
import { LoginPage } from '@/pages/LoginPage'
import { DashboardPage } from '@/pages/DashboardPage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { createBrowserRouter } from "react-router"
import { ProtectedRoutes} from '@/routes/ProtectedRoutes'


export const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: "/login",
                element: <LoginPage />
            },

            {
                element: <ProtectedRoutes />,
                children: [
                    {
                        index: true,
                        element: <DashboardPage />
                    }
                ]
            },

            {
                path: "*",
                element: <NotFoundPage />
            }
        ]
    }
])