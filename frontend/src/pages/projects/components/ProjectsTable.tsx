import { Link } from "react-router"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FolderClosed, Pencil, EllipsisVertical } from "lucide-react"
import { Table, TableRow, TableHead, TableCell, TableHeader, TableBody } from "@/components/ui/table"
import type { ProjectsTableProps } from "@/types/project.types"
import { formatDate } from "@/utils/date"


export const ProjectTable = ({ projects }: ProjectsTableProps) => {

    return (
        <div className="bg-surface overflow-hidden rounded-xl border">
            <Table className="overflow-hidden">
                <TableHeader className="bg-table-head">
                    <TableRow>
                        <TableHead className="text-right font-bold w-[40%]">عنوان</TableHead>
                        <TableHead className="text-right font-bold w-[25%]">تاریخ ایجاد</TableHead>
                        <TableHead className="text-right font-bold w-[20%]">وضعیت</TableHead>
                        <TableHead className="text-right font-bold w-[15%]">عملیات</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {projects.map((project) => (
                        <TableRow key={project.id}>
                            <TableCell>
                                <Button variant="link">
                                    <Link to={`/projects/${project.id}`} className="flex items-center gap-2 text-text">
                                        <FolderClosed className="size-4" />
                                        {project.name}
                                    </Link>
                                </Button>
                            </TableCell>
                            <TableCell>{formatDate(project.created)}</TableCell>
                            <TableCell>
                                <Badge className="select-none" variant={project.activity_status ? 'secondary' : 'destructive'}>
                                    {project.activity_status ? 'فعال' : 'غیرفعال'}
                                </Badge>
                            </TableCell>
                            <TableCell className="flex items-center gap-2">
                                <Button size="icon-sm" variant="outline">
                                    <Link to="/project">
                                        <Pencil />
                                    </Link>
                                </Button>
                                <Button size="icon-sm" variant="ghost" className="absolute left-[12px]">
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