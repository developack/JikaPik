import { SidePanel } from "@/features/sidebar/SidePanel"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"


export function DashboardPage({ children }: { children: React.ReactNode }) {
    return (
        <main className=''>
            <SidebarProvider>
                <SidePanel />
                <main>
                    <SidebarTrigger />
                    {children}
                </main>
            </SidebarProvider>
            <section></section>
        </main>
    )
}