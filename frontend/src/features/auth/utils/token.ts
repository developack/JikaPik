import type { AuthTokens } from "../types/auth.types"


export const getTokens = (): AuthTokens | null => {
    const access = localStorage.getItem("access")
    const refresh = localStorage.getItem("refresh")

    if (!access || !refresh) {
        return null
    }

    return {
        access,
        refresh
    }
}

export const saveTokens = (tokens: AuthTokens): void => {

    localStorage.setItem("access", tokens.access)
    localStorage.setItem("refresh", tokens.refresh)
}

export const removeTokens = () => {
    localStorage.removeItem("access")
    localStorage.removeItem("refresh")
}