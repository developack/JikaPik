import { PanelSidebar } from "./PanelSidebar"
import { PanelHeader } from "./PanelHeader"
import { SidebarProvider } from "@/components/ui/sidebar"


export function PanelLayout ({ children }: { children: React.ReactNode }) {
    return (
        <main id='content'>
            <SidebarProvider>
                <PanelSidebar />
                <main className="w-full">
                    <PanelHeader />
                    {children}
                </main>
            </SidebarProvider>
            <section></section>
        </main>
    )
}