import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"


export const TableFooterSkeleton = () => {
    return (
        <div className="flex items-center justify-between border-t p-3">
            <div className="flex items-center gap-2">
                <Button variant="outline" disabled>قبلی</Button>
                <Button variant="outline" disabled>بعدی</Button>
            </div>
            <Skeleton className="w-30 h-5" />
        </div>
    )
}