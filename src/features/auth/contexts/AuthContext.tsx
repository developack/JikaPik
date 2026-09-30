import { ApiError } from "@/services/api/ApiError"
import { useState, useEffect, createContext } from "react"
import { getCurrentUser } from "@/features/auth/services/authApi"
import { getTokens, saveTokens, removeTokens } from "@/features/auth/utils/token"
import type { AuthTokens } from "@/features/auth/types/auth.types"
import type { AuthContextType, UserProfileType } from "@/features/auth/types/context.types"


export const AuthContext = createContext<AuthContextType | null>(null)
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {

    const [ loading, setLoading ] = useState(false)
    const [ user, setUser ] = useState<UserProfileType | null>(null)
    const [ isAuthenticated, setIsAuthenticated ] = useState( getTokens() !== null )

    useEffect(() => {
        const initializeAuth = async (): Promise<void> => {
            try {
                setLoading(true)
                setUser(await getCurrentUser())

            } catch (error) {
                if (error instanceof ApiError && error.status === 401) {
                    logout()
                }
            } finally {
                setLoading(false)
            }
        }
        initializeAuth()
    }, [])

    const login = async (tokens: AuthTokens): Promise<void> => {
        saveTokens(tokens)
        setIsAuthenticated(true)
        setUser(await getCurrentUser())
    }

    const logout = (): void => {
        removeTokens()
        setUser(null)
        setIsAuthenticated(false)
    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    )
}