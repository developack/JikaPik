import { useState, useEffect } from "react"
import { useParams } from "react-router"
import { PlusIcon, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/toast"
import { DataTableEmpty } from "@/components/data-table/DataTableEmpty"
import { DataTableError } from "@/components/data-table/DataTableError"
import { ContentsTable } from "@/pages/projects/project-detail/contents/ContentsTable"
import { NewContentDialog } from "@/pages/projects/project-detail/contents/NewContentDialog"
import { ContentsTableSkeleton } from "@/pages/projects/project-detail/contents/ContentsTableSkeleton"
import type { Content } from "@/types/contents.types"
import { getApi } from "@/services/api/api"
import { ApiError } from "@/services/api/ApiError"


export const ContentsTabContent = () => {
    const [contents, setContents] = useState<Content[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<ApiError | null>(null)
    const [dialogOpen, setDialogOpen] = useState(false)
    const { projectId } = useParams()

    const fetchContents = async (): Promise<void> => {

        setLoading(true)
        try {
            const data = await getApi<Content[]>(`/receipt-contents/${projectId}/`)
            setContents(data)

        } catch (error) {
            if (error instanceof ApiError) {
                setError(error)
            } else {
                setError(new ApiError("خطا در برقراری ارتباط با سرور", 0, ""))
            }
            toast.add({
                type: "error",
                description: "خطا در برقراری ارتباط با سرور"
            })

        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchContents()
    }, [])

    const renderContentsContent = () => {
        if (loading) {
            return <ContentsTableSkeleton />
        }

        if (error) {
            return <DataTableError onRetry={fetchContents} />
        }

        if (contents.length === 0) {
            return <DataTableEmpty title="هنوز محتوایی ایجاد نکرده‌اید" description="برای شروع، اولین محتوای خود را ایجاد کنید." icon={FileText} />
        }

        return <ContentsTable contents={contents} />
    }

    return (
        <section className="bg-surface rounded-lg p-5 border">
            <header className="flex items-center justify-between">
                <div className="flex flex-col gap-2">
                    <h2 className="text-xl font-bold">محتواها</h2>
                    <p className="text-text-secondary text-sm">محتواهای این پروژه مدیریت کنید</p>
                </div>
                <Button onClick={() => setDialogOpen(true)}>
                    <PlusIcon className="size-4" />
                    افزودن منبع
                </Button>
            </header>
            {/* <NewContentDialog open={dialogOpen} onOpenChange={setDialogOpen} onReceiptCreated={handleReceiptCreated} /> */}
            <main className="mt-5">
                {renderContentsContent()}
            </main>
        </section>
    )
}