import { Button } from "@/components/ui/button"
import { Link } from "react-router"
import { MoveRight, FileText, EllipsisVertical, Calendar, Pencil, Folder } from "lucide-react"
import type { ContentDetailHeaderProps } from "@/types/contents.types"
import { formatDate } from "@/utils/date"


export const ContentDetailHeader = ({ content }: ContentDetailHeaderProps) => {
    return (
        <header>
            <div className="flex items-center justify-between">
                <Button variant="ghost">
                    <Link to={`/projects/${content?.project.id}`} className="flex items-center gap-1.5">
                        <MoveRight />
                        بازگشت به پروژه
                    </Link>
                </Button>
                <Button>
                    <Pencil />
                    ویرایش محتوا
                </Button>
            </div>
            <div className="bg-surface rounded-lg mt-5 border p-5 grid grid-cols-[60px_auto] gap-5 items-start">
                <span className="bg-primary rounded-lg p-2.5 flex w-fit">
                    <FileText className="size-10 stroke-white" />
                </span>
                <div className="flex items-start justify-between">
                    <div>  
                        <div className="flex flex-col gap-2">
                            <h1 className="text-xl font-bold flex items-center gap-2">{content?.title}</h1>
                            <p className="text-sm text-text-secondary truncate max-w-[60rem]">{content?.summary}</p>
                        </div>
                        <div className="flex items-center gap-5 text-xs text-text-secondary mt-5">
                            <div className="flex items-center gap-1">
                                <Folder className="size-4" />
                                <p>پروژه: <span>{content?.project.name}</span></p>
                            </div>
                            <div className="flex items-center gap-1">
                                <Calendar className="size-4" />
                                <p>تاریخ ایجاد: <span>{formatDate(content?.created)}</span></p>
                            </div>
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