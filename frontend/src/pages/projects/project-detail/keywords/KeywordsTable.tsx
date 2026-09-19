import { Link } from "react-router"
import { Button } from "@/components/ui/button"
import { Pencil, EllipsisVertical, Tag, Eye } from "lucide-react"
import { Table, TableRow, TableHead, TableCell, TableHeader, TableBody } from "@/components/ui/table"
import type { KeywordsTableProps } from "@/types/keyword.types"
import { formatDate } from "@/utils/date"


export const KeywordsTable = ({ keywords }: KeywordsTableProps) => {
    return (
        <div className="bg-surface overflow-hidden rounded-lg border">
            <Table className="overflow-hidden">
                <TableHeader className="bg-table-head">
                    <TableRow>
                        <TableHead className="text-right font-bold w-[30%]">عنوان</TableHead>
                        <TableHead className="text-right font-bold w-[15%]">پروژه</TableHead>
                        <TableHead className="text-right font-bold w-[15%]">نوع کلیدواژه</TableHead>
                        <TableHead className="text-right font-bold w-[15%]">زبان</TableHead>
                        <TableHead className="text-right font-bold w-[15%]">تاریخ ایجاد</TableHead>
                        <TableHead className="text-right font-bold w-[10%]">عملیات</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {keywords.map((keyword) => (
                        <TableRow key={keyword.id}>
                            <TableCell>
                                <h2 className="flex items-center gap-2 font-medium">
                                    <Tag className="size-4" />
                                    {keyword.name}
                                </h2>
                            </TableCell>
                            <TableCell>{keyword.project}</TableCell>
                            <TableCell>{keyword.keyword_type}</TableCell>
                            <TableCell>{keyword.language}</TableCell>
                            <TableCell>{formatDate(keyword.created)}</TableCell>
                            <TableCell className="flex items-center gap-2">
                                <Button size="icon-sm" variant="outline">
                                    <Eye />
                                </Button>
                                <Button size="icon-sm" variant="outline" disabled>
                                    <Link to="/project">
                                        <Pencil />
                                    </Link>
                                </Button>
                                <Button size="icon-sm" variant="ghost" disabled>
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