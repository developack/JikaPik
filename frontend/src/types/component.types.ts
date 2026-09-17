import type { LucideIcon } from "lucide-react"


export type DataTableEmptyProps = {
    title: string,
    description: string,
    icon: LucideIcon
}

export type DataTableErrorProps = {
    onRetry: () => void
}