import { Link } from "react-router"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Pencil, EllipsisVertical, FileText } from "lucide-react"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { Table, TableRow, TableHead, TableCell, TableHeader, TableBody } from "@/components/ui/table"
import type { ContentsTableProps } from "@/types/contents.types"
import { formatDate } from "@/utils/date"


export const ContentsTable = ({ contents }: ContentsTableProps) => {
    return (
        <div className="bg-surface overflow-hidden rounded-lg border">
            <Table className="overflow-hidden">
                <TableHeader className="bg-table-head">
                    <TableRow>
                        <TableHead className="text-right font-bold w-[40%]">عنوان</TableHead>
                        <TableHead className="text-right font-bold w-[20%]">منبع محتوا</TableHead>
                        <TableHead className="text-right font-bold w-[15%]">رسانه</TableHead>
                        <TableHead className="text-right font-bold w-[15%]">تاریخ ایجاد</TableHead>
                        <TableHead className="text-right font-bold w-[10%]">عملیات</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {contents.map((content) => (
                        <TableRow key={content.id}>
                            <TableCell>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <Link className="flex items-center gap-2" to={`contents/${content.id}/`}>
                                            <FileText className="size-4 shrink-0" />
                                            <span className="block truncate max-w-[400px] hover:underline">
                                                {content.title}
                                            </span>
                                        </Link>
                                    </TooltipTrigger>
                                    <TooltipContent>{content.title}</TooltipContent>
                                </Tooltip>
                            </TableCell>
                            <TableCell>{content.receipt_status_config__reference_config__name}</TableCell>
                            <TableCell>
                                <Badge className="select-none" variant={content.has_media ? 'active' : 'destructive'}>
                                    {content.has_media ? 'دارد' : 'ندارد'}
                                </Badge>
                            </TableCell>
                            <TableCell>{formatDate(content.created)}</TableCell>
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