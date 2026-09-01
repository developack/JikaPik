import { getTokens, saveTokens } from "../utils/token"
import type { LoginResponse, LoginErrorResponse } from "../types/auth.types"


export const login = async (email: string, password: string): Promise<LoginResponse> => {

    const response = await fetch('http://localhost:8000/login/', {
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

// export const refreshAccessToken = async (): Promise<string> => {
//     const { refresh } = getTokens()

//     const response = await fetch("http://localhost:8000/token/refresh/", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//             refresh
//         })
//     })
//     const data = await response.json()

//     if (response.ok) {
//         saveTokens({access: data.access, refresh: refresh})
//         return data.access
//     }

// }