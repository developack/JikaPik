import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Bot, WandSparkles, SquareArrowOutUpRight } from "lucide-react"
import { ExpandableText } from "@/components/ui/expandable-text"
import type { ContentDetailMainProps } from "@/types/contents.types"


export const ContentDetailMain = ({ content }: ContentDetailMainProps) => {
    return (
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
                            <span className="text-sm absolute bg-surface px-2.5 top-[-8px] right-[10px] z-[1]">خلاصه</span>
                            <p className="text-text-secondary text-sm border p-4 rounded-lg leading-7">{content?.summary}</p>
                        </div>
                        <div className="relative">
                            <span className="text-sm absolute bg-surface px-2.5 top-[-8px] right-[10px] z-[1]">محتوای اصلی</span>
                            <ExpandableText className="text-text-secondary text-sm border p-4 rounded-lg leading-7" text={content?.details} />
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
                            <ExpandableText className="text-text-secondary text-sm border p-4 rounded-lg leading-7" text={content?.ai_content.details} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}