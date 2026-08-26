export type LoginInputs = {
    email: string,
    password: string
}

export type LoginErrors = {
    email?: string,
    password?: string
}

export type OTPErrors = {
    otp?: string
}

export type AuthStep = "login" | "otp"

export type LoginFormProps = {
    setAuthStep: React.Dispatch<React.SetStateAction<AuthStep>>
    setTwoFactorToken: React.Dispatch<React.SetStateAction<string>>
}

export type OTPFormProps = {
    setAuthStep: React.Dispatch<React.SetStateAction<AuthStep>>
    token: string
}