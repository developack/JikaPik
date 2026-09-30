import { Skeleton } from "@/components/ui/skeleton"
import { Table, TableRow, TableHead, TableCell, TableHeader, TableBody } from "@/components/ui/table"
import { TableFooterSkeleton } from "@/components/skeleton/TableFooterSkeleton"


export const ProjectsTableSkeleton = () => {
    return (
        <div className="rounded-md border bg-surface">
            <Table>
                <TableHeader className="bg-table-head">
                    <TableRow>
                        <TableHead className="text-right font-bold w-[40%]">عنوان</TableHead>
                        <TableHead className="text-right font-bold w-[30%]">وضعیت</TableHead>
                        <TableHead className="text-right font-bold w-[20%]">تاریخ ایجاد</TableHead>
                        <TableHead className="text-right font-bold w-[10%]">عملیات</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {Array.from({ length: 10 }).map((_, index) => (
                        <TableRow key={index}>
                            <TableCell>
                                <Skeleton className="h-5 w-32" />
                            </TableCell>

                            <TableCell>
                                <Skeleton className="h-5 w-16 rounded-full" />
                            </TableCell>

                            <TableCell>
                                <Skeleton className="h-5 w-24" />
                            </TableCell>

                            <TableCell>
                                <div className="flex gap-2">
                                    <Skeleton className="h-7 w-7 rounded-md" />
                                    <Skeleton className="h-7 w-7 rounded-md" />
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <TableFooterSkeleton />
        </div>
    )
}