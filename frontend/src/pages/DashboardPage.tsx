import { AppSidebar } from "@/features/sidebar/AppSidebar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"


export function DashboardPage({ children }: { children: React.ReactNode }) {
    return (
        <main className=''>
            <SidebarProvider>
                <AppSidebar />
                <main>
                    <SidebarTrigger />
                    {children}
                </main>
            </SidebarProvider>
            <section></section>
        </main>
    )
}