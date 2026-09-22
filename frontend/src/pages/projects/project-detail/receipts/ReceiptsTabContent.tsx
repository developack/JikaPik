import { useState, useEffect } from "react"
import { PlusIcon, Database } from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/toast"
import { DataTableEmpty } from "@/components/data-table/DataTableEmpty"
import { DataTableError } from "@/components/data-table/DataTableError"
import { ReceiptsTable } from "@/pages/projects/project-detail/receipts/ReceiptsTable"
import { NewReceiptDialog } from "@/pages/projects/project-detail/receipts/NewReceiptDialog"
import { ReceiptsTableSkeleton } from "@/pages/projects/project-detail/receipts/ReceiptsTableSkeleton"
import type { Receipt } from "@/types/receipt.types"
import { getApi } from "@/services/api/api"
import { ApiError } from "@/services/api/ApiError"


export const ReceiptsTabContent = () => {
    const [receipts, setReceipts] = useState<Receipt[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<ApiError | null>(null)
    const [dialogOpen, setDialogOpen] = useState(false)

    const fetchReceipts = async (): Promise<void> => {

        setLoading(true)
        try {
            const data = await getApi<Receipt[]>("/receipts/")
            setReceipts(data)

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
        fetchReceipts()
    }, [])

    const renderReceiptsContent = () => {
        if (loading) {
            return <ReceiptsTableSkeleton />
        }

        if (error) {
            return <DataTableError onRetry={fetchReceipts} />
        }

        if (receipts.length === 0) {
            return <DataTableEmpty title="هنوز منبع خزشی ایجاد نکرده‌اید" description="برای شروع، اولین منبع خزش خود را ایجاد کنید." icon={Database} />
        }

        return <ReceiptsTable receipts={receipts} />
    }

    return (
        <section className="bg-surface rounded-lg p-5 border">
            <header className="flex items-center justify-between">
                <div className="flex flex-col gap-2">
                    <h2 className="text-xl font-bold">منابع خزش</h2>
                    <p className="text-text-secondary text-sm">منابع خزش را برای این پروژه مدیریت کنید</p>
                </div>
                <Button onClick={() => setDialogOpen(true)}>
                    <PlusIcon className="size-4" />
                    افزودن منبع
                </Button>
            </header>
            {/* <NewReceiptDialog open={dialogOpen} onOpenChange={setDialogOpen} onReceiptCreated={handleReceiptCreated} /> */}
            <main className="mt-5">
                {renderReceiptsContent()}
            </main>
        </section>
    )
}