import { Link, useLocation } from 'react-router'
import { FolderRoot, House } from 'lucide-react'
import { SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarGroupContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar'


export function PanelSidebarContent() {
    const pathname = useLocation().pathname
    
    return (
        <SidebarContent>
            <SidebarGroup>
                <SidebarGroupLabel>مدیریت</SidebarGroupLabel>
                <SidebarGroupContent>
                    <SidebarMenu>
                        {/* <SidebarMenuItem>
                            <SidebarMenuButton isActive={pathname === '/'}>
                                <Link className="flex items-end gap-2 w-full" to="/">
                                    <House />
                                    <span className="leading-3.5">داشبورد</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem> */}
                        <SidebarMenuItem>
                            <SidebarMenuButton isActive={pathname === '/projects'}>
                                <Link className="flex items-end gap-2 w-full" to="/projects">
                                    <FolderRoot />
                                    <span className="leading-3.5">پروژه‌ها</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>
        </SidebarContent>
    )
}