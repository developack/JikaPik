import { createContext, useContext, useEffect, useState } from "react"


type Theme = "light" | "dark" | "system"
type ThemeContextType = {
    theme: Theme
    setTheme: (them: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)


export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>(() => {

        const savedTheme = localStorage.getItem("theme")
        if (savedTheme === "light" || savedTheme === "dark" || savedTheme === "system") {
            return savedTheme
        }

        return "system"
    })

    useEffect(() => {
        const root = document.documentElement

        const applyTheme = () => {
            root.classList.remove("light", "dark")

            if (theme === "system") {
                const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
                root.classList.add(systemTheme)
            } else {
                root.classList.add(theme)
            }
        }

        applyTheme()
        localStorage.setItem("theme", theme)

        if (theme !== "system") {
            return
        }

        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
        const handleSystemThemeChange = () => {
            applyTheme()
        }

        mediaQuery.addEventListener("change", handleSystemThemeChange)
        return () => {
            mediaQuery.removeEventListener("change", handleSystemThemeChange)
        }
        
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    const context = useContext(ThemeContext)

    if (!context) {
        throw new Error("useTheme must be used within ThemeProvider")
    }

    return context
}
