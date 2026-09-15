import { TriangleAlertIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty"
import type { ProjectsTableErrorProps } from "@/types/project.types"


export const ProjectTableError = ({ onRetry }: ProjectsTableErrorProps) => {
    return (
        <Empty>
            <EmptyHeader>
                <EmptyMedia variant="icon" className="size-15 border">
                    <TriangleAlertIcon className="size-10" />
                </EmptyMedia>
                <EmptyTitle>دریافت پروژه‌ها ناموفق بود</EmptyTitle>
                <EmptyDescription>در دریافت اطلاعات مشکلی پیش آمد. لطفاً دوباره تلاش کنید.</EmptyDescription>
            </EmptyHeader>

            <EmptyContent>
                <Button onClick={onRetry} variant="outline">تلاش مجدد</Button>
            </EmptyContent>
        </Empty>
    )
}   