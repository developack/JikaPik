import { getApi } from "@/services/api/api"
import { ApiError } from "@/services/api/ApiError"
import { useState, useEffect, createContext } from "react"
import type { AuthTokens } from "@/features/auth/types/auth.types"
import { getTokens, saveTokens, removeTokens } from "@/features/auth/utils/token"


type UserProfileType = {
    username: string
    email?: string
    number?: string | number
}

type AuthContextType = {
    isAuthenticated: boolean
    user: UserProfileType | null
    login: (tokens: AuthTokens) => void
    logout: () => void
}

export const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {

    const [ user, setUser ] = useState<UserProfileType | null>(null)
    const [ isAuthenticated, setIsAuthenticated ] = useState( getTokens() !== null )

    useEffect(() => {
        const initializeAuth = async (): Promise<void> => {
            try {
                setUser(await getApi("/auth/profile/"))

            } catch (error) {
                if (error instanceof ApiError && error.status === 401) {
                    logout()
                }
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
        <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}