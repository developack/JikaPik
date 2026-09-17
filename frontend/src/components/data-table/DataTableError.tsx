import { TriangleAlertIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty"
import type { DataTableErrorProps } from "@/types/component.types"


export const DataTableError = ({ onRetry }: DataTableErrorProps) => {
    return (
        <Empty>
            <EmptyHeader>
                <EmptyMedia variant="icon" className="size-15 border">
                    <TriangleAlertIcon className="size-10" />
                </EmptyMedia>
                <EmptyTitle>خطا در دریافت اطلاعات</EmptyTitle>
                <EmptyDescription>دریافت اطلاعات با مشکل مواجه شد. لطفاً دوباره تلاش کنید.</EmptyDescription>
            </EmptyHeader>

            <EmptyContent>
                <Button onClick={onRetry} variant="outline">تلاش مجدد</Button>
            </EmptyContent>
        </Empty>
    )
}