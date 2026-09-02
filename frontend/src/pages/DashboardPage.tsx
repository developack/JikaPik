import { PanelLayout } from "@/components/layout/PanelLayout"
import { getApi } from "@/services/api/api"
import { useState } from "react"
import { ApiError } from "@/services/api/ApiError"


export function DashboardPage() {
    const [ users, setUsers ] = useState({})

    const fetchUsers = async (): Promise<void> => {

        try {
            const response = await getApi("/auth/profile/")
            console.log(response)

        } catch (error) {
            if (error instanceof ApiError) {
                console.log(error)
                console.log(error.status)
            }
        }

    }

    return (
        <PanelLayout>
            <div>Dashboard</div>
            <a className="bg-primary rounded-xl p-2 text-sm m-5 flex w-fit cursor-pointer" onClick={fetchUsers}>دریافت کاربران</a>
        </PanelLayout>
    )
}