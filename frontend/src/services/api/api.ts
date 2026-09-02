import { ApiError } from "./ApiError"
import { BASE_API_URL } from "@/config/api"
import { getTokens } from "@/features/auth/utils/token"
import { refreshAccessToken } from "@/features/auth/services/authApi"


const parseApiResponse = async <T>(response: Response): Promise<T> => {
    const responseBody = await response.json()

    if (!response.ok) {
        throw new ApiError(responseBody?.detail, response.status, responseBody)
    }

    return responseBody
}

export const apiRequest = async <T>(endpoint: string, options: RequestInit, isRetry: boolean = false): Promise<T> => {
    const accessToken = getTokens()?.access

    try {
        const response = await fetch(`${BASE_API_URL}${endpoint}`, {
            ...options,
            headers: {
                ...options.headers,
                ...(accessToken && {
                    Authorization: `Bearer ${accessToken}`
                }),
            }
        })

        if (response.status === 401 && !isRetry) {
            await refreshAccessToken()
            return apiRequest<T>(endpoint, options, true)
        }

        return parseApiResponse<T>(response)

    } catch (error) {
        console.error("API call error:", error)
        throw error
    }

}

export const postApi = async <T, D>(endpoint: string, data: D): Promise<T> => {

    return apiRequest<T>(endpoint, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    })
}

export const getApi = async <T>(endpoint: string): Promise<T> => {

    return apiRequest<T>(endpoint, {
        method: "GET",
        headers: {"Content-Type": "application/json"}
    })
}