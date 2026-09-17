import { Link } from "react-router"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Pencil, MoveRight, FolderOpen, Calendar, EllipsisVertical } from "lucide-react"
import type { ProjectHeaderProps } from "@/types/project.types"
import { formatDate } from "@/utils/date"


export const ProjectHeader = ({ project }: ProjectHeaderProps) => {
    return (
        <header>
            <div className="flex items-center justify-between">
                <Button variant="ghost">
                    <Link to="/projects" className="flex items-center gap-1.5">
                        <MoveRight />
                        بازگشت به پروژه‌ها
                    </Link>
                </Button>
                <Button>
                    <Pencil />
                    ویرایش پروژه
                </Button>
            </div>
            <div className="bg-surface rounded-lg mt-5 border p-5 grid grid-cols-[60px_auto] gap-5 items-start">
                <span className="bg-primary rounded-lg p-2.5 flex w-fit">
                    <FolderOpen className="size-10 stroke-white" />
                </span>
                <div className="flex items-start justify-between">
                    <div>
                        <div className="flex flex-col gap-1">
                            <h1 className="text-2xl font-bold flex items-center gap-2">
                                {project?.name}
                                <Badge variant={project?.activity_status ? 'active' : 'destructive'} className="select-none">
                                    <span className={`rounded-full w-[5px] h-[5px] ${project?.activity_status ? 'bg-success' : 'bg-destructive'}`}></span>
                                    {project?.activity_status ? 'فعال' : 'غیرفعال'}
                                </Badge>
                            </h1>
                            <p className="text-text-secondary text-sm">یک سایت فروشگاهی کتاب و توزیع کننده کتاب های آموزشی و کمک آموزشی برای تمامی مقاطع و سننین</p>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-text-secondary mt-4">
                            <Calendar className="size-4" />
                            <p>تاریخ ایجاد: <span>{formatDate(project?.created)}</span></p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button variant="outline" size="icon">
                            <EllipsisVertical className="size-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    )
}