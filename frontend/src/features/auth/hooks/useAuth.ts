import { useContext } from "react"
import { AuthContext } from "@/features/auth/contexts/AuthContext"


export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error("Some error occurs when using AuthContext")
    }

    return context
}