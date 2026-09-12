import { useState, useEffect } from "react"
import { Link } from "react-router"
import { FolderClosed, Pencil, PlusIcon, EllipsisVertical } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Empty } from "@/components/ui/empty"
import { toast, Toast } from "@/components/ui/toast"
import { PanelLayout } from "@/components/layout/PanelLayout"
import { ProjectsTableSkeleton } from "@/pages/projects/components/ProjectsTableSkeleton"
import { Table, TableRow, TableHead, TableCell, TableHeader, TableBody } from "@/components/ui/table"
import type { Project } from "@/types/project.types"
import { getApi } from "@/services/api/api"
import { formatDate } from "@/utils/date"


export const ProjectsPage = () => {
    const [projects, setProjects] = useState<Project[]>([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchProjects = async (): Promise<void> => {

            try {
                setLoading(true)
                const response = await getApi<Project[]>("/projects/")
                console.log(response)
                setProjects(response)

            } catch (error) {
                console.log(error)
                toast.add({
                    type: "error",
                    description: "خطا در برقراری ارتباط با سرور",
                  })

            } finally {
                setLoading(false)
            }
        }

        fetchProjects()
    }, [])

    return (
        <PanelLayout>
            <section>
                <header className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold">پروژه‌ها</h1>
                    <Button>
                        <Link className="flex items-center gap-1.5" to="/projects/new">
                            <PlusIcon className="size-4" />
                            افزودن پروژه
                        </Link>
                    </Button>
                </header>
                <main className="mt-10">
                    <div className="bg-surface overflow-hidden rounded-xl border">
                        <div></div>
                        <div>
                            {loading ? <ProjectsTableSkeleton /> : <Table className="overflow-hidden">
                                <TableHeader className="bg-[#f7f7f7]">
                                    <TableRow>
                                        <TableHead className="text-right font-bold">عنوان</TableHead>
                                        <TableHead className="text-right font-bold">تاریخ ایجاد</TableHead>
                                        <TableHead className="text-right font-bold">وضعیت</TableHead>
                                        <TableHead className="text-right font-bold">عملیات</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {projects.map((project) => (
                                        <TableRow key={project.id}>
                                            <TableCell>
                                                <Button variant="link">
                                                    <Link to={`/projects/${project.id}`} className="flex items-center gap-2 text-text">
                                                        <FolderClosed className="size-4 stroke-gray-800" />
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
                            </Table>}
                            <div className="flex items-center justify-between border-t p-3">
                                <div className="flex items-center gap-2">
                                    <Button variant="outline" disabled>قبلی</Button>
                                    <Button variant="outline" disabled>بعدی</Button>
                                </div>
                                <span className="text-sm text-text-secondary">نمایش 1 تا 6 از 6 مورد</span>
                            </div>
                        </div>
                        <div></div>
                    </div>
                </main>
            </section>
        </PanelLayout>
    )
} 