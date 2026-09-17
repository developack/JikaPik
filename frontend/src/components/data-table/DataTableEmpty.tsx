import { Button } from "@/components/ui/button"
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty"
import type { DataTableEmptyProps } from "@/types/component.types"


export const DataTableEmpty = ({ title, description, icon: Icon }: DataTableEmptyProps) => {
    return (
        <Empty>
            <EmptyHeader>
                <EmptyMedia variant="icon" className="size-15 border">
                    <Icon className="size-10" />
                </EmptyMedia>
                <EmptyTitle>{title}</EmptyTitle>
                <EmptyDescription className="whitespace-nowrap">{description}</EmptyDescription>
                <EmptyContent className="flex-row justify-center gap-2 mt-2.5">
                    <Button variant="outline">درون ریزی</Button>
                </EmptyContent>
            </EmptyHeader>
        </Empty>
    )
}