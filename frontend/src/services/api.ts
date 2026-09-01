import { BASE_API_URL } from "@/config/api";
import { getTokens } from "@/features/auth/utils/token"


const accessToken = getTokens()?.access

const parseApiResponse = async <T>(response: Response): Promise<T> => {
    const responseBody = await response.json()

    if (!response.ok) {
        throw new Error(responseBody?.detail)
    }

    return responseBody
}

export const apiRequest = async <T>(endpoint: string, options: RequestInit): Promise<T> => {

    try {
        const response = await fetch(`${BASE_API_URL}${endpoint}`, options)
        return parseApiResponse<T>(response)

    } catch (error) {
        console.error("API call error:", error)
        throw error
    }

}

export const postApi = async <T, D>(endpoint: string, data: D): Promise<T> => {
    return apiRequest<T>(endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            ...(accessToken && {
                Authorization: `Bearer ${getTokens()?.access}`
            }),
        },
        body: JSON.stringify(data)
    })
}

export const getApi = async <T>(endpoint: string): Promise<T> => {
    return apiRequest<T>(endpoint, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            ...(accessToken && {
                Authorization: `Bearer ${getTokens()?.access}`
            }),
        },
    })
}