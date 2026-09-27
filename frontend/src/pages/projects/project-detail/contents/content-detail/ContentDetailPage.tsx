import { useState, useEffect } from "react"
import { useParams } from "react-router"
import { toast } from "@/components/ui/toast"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { PanelLayout } from "@/components/layout/PanelLayout"
import { ContentDetailHeader } from "./components/ContentDetailHeader"
import { Bot, PencilSparkles, SquareArrowOutUpRight } from "lucide-react"
import { ContentDetailHeaderSkeleton } from "./components/ContentDetailHeaderSkeleton"
import type { ReceiptContentDetail } from "@/types/contents.types"
import { getApi } from "@/services/api/api"
import { ApiError } from "@/services/api/ApiError"


export const ContentDetailPage = () => {

    const [content, setContent] = useState<ReceiptContentDetail | null>(null)
    const [loading, setLoading] = useState(false)
    const { projectId } = useParams()
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
                <div className="grid grid-cols-[3fr_1fr] gap-5 mt-5">
                    <div className="flex flex-col gap-5">
                        <div className="bg-surface rounded-lg border h-50">
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
                            <div></div>
                        </div>
                        <div className="bg-surface rounded-lg border h-50">
                            <div className="flex items-center justify-between p-5 border-b">
                                <div className="flex items-center gap-2">
                                    <span className="rounded-full p-2 border border-primary">
                                        <PencilSparkles className="shrink-0 stroke-primary stroke-2" />
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
                        </div>
                    </div>
                    <aside className="h-50 bg-surface rounded-lg border"></aside>
                </div>
            </section>
        </PanelLayout>
    )
}