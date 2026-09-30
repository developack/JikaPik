import { useEffect, useState } from "react"


type TopProgressBarProps = {
    loading: boolean
}

export function TopProgressBar({ loading }: TopProgressBarProps) {
    const [ progress, setProgress ] = useState(0)
    const [ visible, setVisible ] = useState(false)

    useEffect(() => {
        if (loading) {
            setVisible(true)
            setProgress(0)

            const interval = setInterval(() => {
                setProgress((prev) => {
                    if (prev >= 90) {
                        return prev
                    }

                    return prev + 5
                })
            }, 150)

            return () => clearInterval(interval)
        }

        setProgress(100)

        const timeout = setTimeout(() => {
            setVisible(false)
        }, 200)

        return () => clearTimeout(timeout)
    }, [loading])

    if (!visible) {
        return null
    }

    return (
        <div className="fixed top-0 left-0 right-0 z-50 h-1">
            <div className="h-full bg-primary transition-[width] duration-150"
                style={{
                    width: `${progress}%`,
                    marginLeft: "auto",
                }}
            />
        </div>
    )
}