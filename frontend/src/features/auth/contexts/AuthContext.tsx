import { getApi } from "@/services/api/api"
import { ApiError } from "@/services/api/ApiError"
import { useState, useEffect, createContext } from "react"
import { getTokens, saveTokens, removeTokens } from "@/features/auth/utils/token"
import type { AuthTokens } from "@/features/auth/types/auth.types"
import type { AuthContextType, UserProfileType } from "../types/context.types"


export const AuthContext = createContext<AuthContextType | null>(null)
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {

    const [ loading, setLoading ] = useState(false)
    const [ user, setUser ] = useState<UserProfileType | null>(null)
    const [ isAuthenticated, setIsAuthenticated ] = useState( getTokens() !== null )

    useEffect(() => {
        const initializeAuth = async (): Promise<void> => {
            try {
                setLoading(true)
                setUser(await getApi("/auth/profile/"))

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

    const login = (tokens: AuthTokens):void => {
        saveTokens(tokens)
        setIsAuthenticated(true)
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