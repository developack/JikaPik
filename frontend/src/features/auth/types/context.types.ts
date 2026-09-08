import type { AuthTokens } from "./auth.types"


export type UserProfileType = {
    username: string
    email?: string
    number?: string | number
}

export type AuthContextType = {
    isAuthenticated: boolean
    user: UserProfileType | null
    login: (tokens: AuthTokens) => void
    logout: () => void
    loading: boolean
}