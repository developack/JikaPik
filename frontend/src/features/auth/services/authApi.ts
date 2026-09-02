import { BASE_API_URL } from "@/config/api"
import { getTokens, saveTokens, removeTokens } from "../utils/token"
import type { LoginResponse, LoginErrorResponse, RefreshAccessTokenResponse } from "../types/auth.types"


export const login = async (email: string, password: string): Promise<LoginResponse> => {

    const response = await fetch(`${BASE_API_URL}/login/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email,
            password
        })
    })
    const data: LoginResponse | LoginErrorResponse = await response.json()

    if (!response.ok) {
        throw data
    }

    return data as LoginResponse
}

const logout = (): void => {
    removeTokens()
}

export const verify2FA = () => {

}

export const resend2FA = () => {

}

export const refreshAccessToken = async (): Promise<void> => {
    const tokens = getTokens()
    if (!tokens) {
        return
    }

    const { refresh } = tokens
    try {
        const response = await fetch(`${BASE_API_URL}/refresh/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({refresh})
        })
        const data: RefreshAccessTokenResponse = await response.json()
        if (!response.ok) {
            logout()
            throw new Error("Refresh token is invalid or expired")
        }
        saveTokens({access: data.access, refresh: refresh})

    } catch (error) {
        console.log(error)
        throw error
    }
}