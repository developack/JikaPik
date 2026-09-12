import { Skeleton } from "@/components/ui/skeleton"
import { Table, TableRow, TableHead, TableCell, TableHeader, TableBody } from "@/components/ui/table"


export const ProjectsTableSkeleton = () => {
    return (
        <div className="rounded-md border">
            <Table>
                <TableHeader className="bg-[#f7f7f7]">
                    <TableRow>
                        <TableHead className="text-right font-bold">عنوان</TableHead>
                        <TableHead className="text-right font-bold">تاریخ ایجاد</TableHead>
                        <TableHead className="text-right font-bold">وضعیت</TableHead>
                        <TableHead className="text-right font-bold">عملیات</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {Array.from({ length: 10 }).map((_, index) => (
                        <TableRow key={index}>
                            <TableCell>
                                <Skeleton className="h-4 w-32" />
                            </TableCell>

                            <TableCell>
                                <Skeleton className="h-5 w-16 rounded-full" />
                            </TableCell>

                            <TableCell>
                                <Skeleton className="h-4 w-24" />
                            </TableCell>

                            <TableCell>
                                <div className="flex gap-2">
                                    <Skeleton className="h-8 w-8 rounded-md" />
                                    <Skeleton className="h-8 w-8 rounded-md" />
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}