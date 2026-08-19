import { Sidebar } from '@/components/ui/sidebar'
import { PanelSidebarHeader } from '@/features/sidebar/PanelSidebarHeader'
import { PanelSidebarContent } from '@/features/sidebar/PanelSidebarContent'
import { PanelSidebarFooter } from '@/features/sidebar/PanelSidebarFooter'


export function PanelSidebar () {
    return (
        <Sidebar className='p-2' side='right'>
            <PanelSidebarHeader />
            <PanelSidebarContent />
            <PanelSidebarFooter />
        </Sidebar>
    )
}