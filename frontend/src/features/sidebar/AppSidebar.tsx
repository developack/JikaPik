import { Sidebar } from '@/components/ui/sidebar'
import { AppSidebarHeader } from './AppSidebarHeader'
import { AppSidebarContent } from './AppSidebarContent'
import { AppSidebarFooter } from './AppSidebarFooter'


export function AppSidebar() {
    return (
        <Sidebar className='p-2' side='right'>
            <AppSidebarHeader />
            <AppSidebarContent />
            <AppSidebarFooter />
        </Sidebar>
    )
}