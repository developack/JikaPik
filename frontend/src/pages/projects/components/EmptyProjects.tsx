import { FolderCode } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty"


export const EmptyProjects = () => {
    return (
        <Empty>
            <EmptyHeader>
                <EmptyMedia variant="icon" className="size-15 border">
                    <FolderCode className="size-10" />
                </EmptyMedia>
                <EmptyTitle>هنوز پروژه‌ای وجود ندارد</EmptyTitle>
                <EmptyDescription className="whitespace-nowrap">هنوز هیچ پروژه‌ای ایجاد نکرده‌اید. با ایجاد اولین پروژه خود، کار را آغاز کنید.</EmptyDescription>
                <EmptyContent className="flex-row justify-center gap-2">
                    <Button variant="outline">درون ریزی</Button>
                </EmptyContent>
            </EmptyHeader>
        </Empty>
    )
}