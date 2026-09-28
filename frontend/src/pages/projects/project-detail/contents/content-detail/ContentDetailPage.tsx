import { useState, useEffect } from "react"
import { useParams, Link } from "react-router"
import { toast } from "@/components/ui/toast"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { PanelLayout } from "@/components/layout/PanelLayout"
import { ContentDetailHeader } from "./components/ContentDetailHeader"
import { Bot, WandSparkles, SquareArrowOutUpRight, FolderClosed, FolderOpen, ChevronLeft, Tag, CircleDot, Clock, Layers, MapPinSearch, CircleCheck } from "lucide-react"
import { ContentDetailHeaderSkeleton } from "./components/ContentDetailHeaderSkeleton"
import type { ReceiptContentDetail } from "@/types/contents.types"
import { getApi } from "@/services/api/api"
import { ApiError } from "@/services/api/ApiError"
import { formatDate } from "@/utils/date"


export const ContentDetailPage = () => {

    const [content, setContent] = useState<ReceiptContentDetail | null>(null)
    const [loading, setLoading] = useState(false)
    const { contentId } = useParams()

    const fetchContent = async (): Promise<void> => {

        setLoading(true)
        try {
            const data = await getApi<ReceiptContentDetail>(`/receipt-content/${contentId}/`)
            setContent(data)

        } catch (error) {
            let message = "خطا در برقراری ارتباط با سرور"

            if (error instanceof ApiError) {
                message = error.message
            }
            toast.add({
                type: "error",
                description: message,
            })

        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchContent()
    }, [])

    return (
        <PanelLayout>
            <section>
                {loading ? <ContentDetailHeaderSkeleton /> : <ContentDetailHeader content={content} />}
                <div className="grid grid-cols-[3fr_1fr] items-start gap-5 mt-5">
                    <div className="flex flex-col gap-5">
                        <div className="bg-surface rounded-lg border">
                            <div className="flex items-center justify-between p-5 border-b">
                                <div className="flex items-center gap-2">
                                    <span className="rounded-full p-2 border border-primary">
                                        <Bot className="shrink-0 stroke-primary stroke-2" />
                                    </span>
                                    <div className="flex flex-col gap-1.5">
                                        <h4 className="font-semibold flex items-center gap-2">
                                            <span>محتوای خزش‌شده</span>
                                            <Badge>نسخه اصلی از منبع</Badge>
                                        </h4>
                                        <p className="text-xs text-text-secondary">این محتوا توسط خزشگر از منبع جمع‌آوری شده است.</p>
                                    </div>
                                </div>
                                <Button variant="outline">
                                    <SquareArrowOutUpRight />
                                    مشاهده منبع
                                </Button>
                            </div>
                            <div className="p-5">
                                <h5 className="font-semibold">{content?.title}</h5>
                                <div className="flex flex-col gap-5 mt-5">
                                    <div className="relative">
                                        <span className="text-sm absolute bg-surface px-2.5 top-[-8px] right-[10px]">خلاصه</span>
                                        <p className="text-text-secondary text-sm border p-4 rounded-lg leading-7">{content?.summary}</p>
                                    </div>
                                    <div className="relative">
                                        <span className="text-sm absolute bg-surface px-2.5 top-[-8px] right-[10px]">محتوای اصلی</span>
                                        <p className="text-text-secondary text-sm border p-4 rounded-lg leading-7">{content?.details}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-surface rounded-lg border">
                            <div className="flex items-center justify-between p-5 border-b">
                                <div className="flex items-center gap-2">
                                    <span className="rounded-full p-2 border border-primary">
                                        <WandSparkles className="shrink-0 stroke-primary stroke-2" />
                                    </span>
                                    <div className="flex flex-col gap-1.5">
                                        <h4 className="font-semibold flex items-center gap-2">
                                            <span>محتوای تولیدشده با هوش مصنوعی</span>
                                            <Badge>تولیدشده با هوش مصنوعی</Badge>
                                        </h4>
                                        <p className="text-xs text-text-secondary">این محتوا بر اساس محتوای اصلی، توسط هوش مصنوعی تولید و بهینه‌سازی شده است.</p>
                                    </div>
                                </div>
                                <Button variant="outline">
                                    <SquareArrowOutUpRight />
                                    مشاهده جزئیات
                                </Button>
                            </div>
                            <div className="p-5">
                                <h5 className="font-semibold">{content?.ai_content.title}</h5>
                                <div className="flex flex-col gap-5 mt-5">
                                    <div className="relative">
                                        <span className="text-sm absolute bg-surface px-2.5 top-[-8px] right-[10px]">خلاصه</span>
                                        <p className="text-text-secondary text-sm border p-4 rounded-lg leading-7">{content?.ai_content.summary}</p>
                                    </div>
                                    <div className="relative">
                                        <span className="text-sm absolute bg-surface px-2.5 top-[-8px] right-[10px]">محتوای اصلی</span>
                                        <p className="text-text-secondary text-sm border p-4 rounded-lg leading-7">{content?.ai_content.details}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <aside className="flex flex-col gap-5 sticky top-[81px]">
                        <div className="bg-surface rounded-lg border">
                            <div className="border-b p-4 flex items-center justify-between font-bold text-sm">
                                <div className="flex items-center gap-2">
                                    <CircleDot className="size-5" />
                                    وضعیت و اطلاعات انتشار
                                </div>
                                <Badge variant="active">منتشر شده</Badge>
                            </div>
                            <div className="flex flex-col gap-5 p-4">
                                <div className="flex items-start gap-2">
                                    <Clock className="size-5" />
                                    <div className="flex flex-col gap-1 text-sm text-text-secondary">
                                        انتشار در تاریخ
                                        <span className="text-xs text-text">{formatDate(content?.created)}</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-2">
                                    <Layers className="size-5" />
                                    <div className="flex flex-col gap-1 text-sm text-text-secondary">
                                        منتشر شده در
                                        <span className="text-xs text-text">{content?.reference_config.name}</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-2">
                                    <MapPinSearch className="size-5" />
                                    <div className="flex flex-col gap-1 text-sm text-text-secondary">
                                        آدرس منبع
                                        {content?.reference_config.url && <Link target="_blank" to={content?.reference_config.url}>
                                            <Badge variant="secondary">{content?.reference_config.url}</Badge>
                                        </Link>}
                                    </div>
                                </div>
                                <div className="flex items-start gap-2">
                                    <CircleCheck className="size-5" />
                                    <div className="flex flex-col gap-1 text-sm text-text-secondary">
                                        وضعیت منبع
                                        <Badge variant={content?.reference_config?.activity_status ? 'active' : 'destructive'} className="select-none">
                                            <span className={`rounded-full w-[5px] h-[5px] ${content?.reference_config?.activity_status ? 'bg-success' : 'bg-destructive'}`}></span>
                                            {content?.reference_config?.activity_status ? 'فعال' : 'غیرفعال'}
                                        </Badge>
                                    </div>
                                </div>
                                <div className="flex items-start gap-2">
                                    <Clock className="size-5" />
                                    <div className="flex flex-col gap-1 text-sm text-text-secondary">
                                        آخرین بروزرسانی
                                        <span className="text-xs text-text">{formatDate(content?.updated)}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-surface rounded-lg border">
                            <div className="border-b p-4 flex items-center gap-2 font-bold text-sm">
                                <Tag className="size-5" />
                                کلیدواژه‌های مرتبط
                            </div>
                            <div className="flex items-start justify-between p-4">
                                <div className="flex flex-wrap gap-3">
                                    {content?.related_keywords.map((keyword) => (
                                        <Badge variant="secondary">{keyword}</Badge>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="bg-surface rounded-lg border">
                            <div className="border-b p-4 flex items-center gap-2 font-bold text-sm">
                                <FolderClosed className="size-5" />
                                پروژه
                            </div>
                            <div className="flex items-start justify-between p-4">
                                <div className="flex items-center gap-2">
                                    <span className="bg-primary rounded-lg p-2 flex w-fit">
                                        <FolderOpen className="size-8=7 stroke-white" />
                                    </span>
                                    <div className="flex flex-col gap-1">
                                        <h5 className="font-semibold text-sm">{content?.project.name}</h5>
                                        <p className="text-text-secondary text-xs">تاریخ ایجاد: <span>{formatDate(content?.created)}</span></p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Badge variant={content?.project?.activity_status ? 'active' : 'destructive'} className="select-none">
                                        <span className={`rounded-full w-[5px] h-[5px] ${content?.project?.activity_status ? 'bg-success' : 'bg-destructive'}`}></span>
                                        {content?.project?.activity_status ? 'فعال' : 'غیرفعال'}
                                    </Badge>
                                    <Button variant="secondary" size="icon-xs">
                                        <Link to={`/projects/${content?.project.id}/`}>
                                            <ChevronLeft />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </section>
        </PanelLayout>
    )
}