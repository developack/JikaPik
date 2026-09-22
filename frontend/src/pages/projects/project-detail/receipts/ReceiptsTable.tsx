import { Link } from "react-router"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Pencil, EllipsisVertical, Database } from "lucide-react"
import { Table, TableRow, TableHead, TableCell, TableHeader, TableBody } from "@/components/ui/table"
import type { ReceiptsTableProps } from "@/types/receipt.types"
import { formatDate } from "@/utils/date"


export const ReceiptsTable = ({ receipts }: ReceiptsTableProps) => {
    return (
        <div className="bg-surface overflow-hidden rounded-lg border">
            <Table className="overflow-hidden">
                <TableHeader className="bg-table-head">
                    <TableRow>
                        <TableHead className="text-right font-bold w-[30%]">عنوان</TableHead>
                        <TableHead className="text-right font-bold w-[20%]">آدرس</TableHead>
                        <TableHead className="text-right font-bold w-[20%]">وضعیت</TableHead>
                        <TableHead className="text-right font-bold w-[20%]">تاریخ ایجاد</TableHead>
                        <TableHead className="text-right font-bold w-[10%]">عملیات</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {receipts.map((receipt) => (
                        <TableRow key={receipt.id}>
                            <TableCell>
                                <h2 className="flex items-center gap-2 font-medium">
                                    <Database className="size-4" />
                                    {receipt.name}
                                </h2>
                            </TableCell>
                            <TableCell>{receipt.url}</TableCell>
                            <TableCell>
                                <Badge className="select-none" variant={receipt.activity_status ? 'active' : 'destructive'}>
                                    {receipt.activity_status ? 'فعال' : 'غیرفعال'}
                                </Badge>
                            </TableCell>
                            <TableCell>{formatDate(receipt.created)}</TableCell>
                            <TableCell className="flex items-center gap-2">
                                <Button size="icon-sm" variant="outline">
                                    <Link to="/project">
                                        <Pencil />
                                    </Link>
                                </Button>
                                <Button size="icon-sm" variant="ghost">
                                    <EllipsisVertical />
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <div className="flex items-center justify-between border-t p-3">
                <div className="flex items-center gap-2">
                    <Button variant="outline" disabled>قبلی</Button>
                    <Button variant="outline" disabled>بعدی</Button>
                </div>
                <span className="text-sm text-text-secondary">نمایش 1 تا 6 از 6 مورد</span>
            </div>
        </div>
    )
}