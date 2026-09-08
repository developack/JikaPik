import { Outlet, Navigate } from "react-router"
import { useAuth } from "@/features/auth/hooks/useAuth"


export const ProtectedRoutes = () => {
    const { isAuthenticated } = useAuth()
    
    return isAuthenticated ? <Outlet /> : <Navigate to="/login/" replace />
}