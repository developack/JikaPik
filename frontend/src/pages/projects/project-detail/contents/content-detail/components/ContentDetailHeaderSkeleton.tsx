import { Link } from "react-router"
import { Skeleton } from "@/components/ui/skeleton"
import { Button } from "@/components/ui/button"
import { FileText, FolderClosed, Calendar, EllipsisVertical, Pencil, MoveRight } from "lucide-react"


export const ContentDetailHeaderSkeleton = () => {
    return (
        <header>
            <div className="flex items-center justify-between">
                <Button variant="ghost">
                    <Link to="/projects" className="flex items-center gap-1.5">
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
                            <h1 className="text-xl font-bold"><Skeleton className="w-150 h-[26px]" /></h1>
                            <Skeleton className="w-[60rem] h-[18px]" />
                        </div>
                        <div className="flex items-center gap-5 text-xs text-text-secondary mt-5">
                            <div className="flex items-center gap-1">
                                <FolderClosed className="size-4" />
                                <p className="flex items-center gap-2">پروژه: <Skeleton className="w-18 h-5" /></p>
                            </div>
                            <div className="flex items-center gap-1">
                                <Calendar className="size-4" />
                                <p className="flex items-center gap-2">تاریخ ایجاد: <Skeleton className="w-18 h-5" /></p>
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