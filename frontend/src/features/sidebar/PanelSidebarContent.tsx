import { Link } from 'react-router'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { ChartNoAxesCombined, CircleDot, ShoppingBag, Sparkles, ChevronLeft, CalendarDays, MessagesSquare, Mail, NotepadText, Users, CircleUser, ShoppingCart, Ticket, Package, Settings } from 'lucide-react'
import { SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarGroupContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarMenuSub, SidebarMenuSubItem, SidebarMenuSubButton } from '@/components/ui/sidebar'


export function PanelSidebarContent() {
    return (
        <SidebarContent>
            <SidebarGroup>
                <SidebarGroupLabel>داشبورد</SidebarGroupLabel>

                <SidebarGroupContent>
                    <SidebarMenu>

                        <SidebarMenuItem>
                            <SidebarMenuButton>
                                <Link className="flex items-end gap-2" to="/">
                                    <ChartNoAxesCombined />
                                    <span className="leading-3.5">آمارها</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>

                        <SidebarMenuItem>
                            <SidebarMenuButton>
                                <Link className="flex items-end gap-2" to="/">
                                    <ShoppingBag />
                                    <span className="leading-3.5">فروشگاه</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>

                        <SidebarMenuItem>
                            <SidebarMenuButton>
                                <Link className="flex items-end gap-2" to="/">
                                    <CircleDot />
                                    <span className="leading-3.5">داشبورد مدیریت</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>

                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup>
                <SidebarGroupLabel>برنامه‌ها</SidebarGroupLabel>

                <SidebarGroupContent>
                    <SidebarMenu>

                        <SidebarMenuItem>
                            <Collapsible defaultOpen={false} className="group/collapsible">
                                <CollapsibleTrigger className='w-full'>
                                    <SidebarMenuButton>
                                        <Sparkles />
                                        <span className="leading-3.5">هوش مصنوعی</span>
                                        <ChevronLeft className="mr-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                                    </SidebarMenuButton>
                                </CollapsibleTrigger>

                                <CollapsibleContent>
                                    <SidebarMenuSub className='mr-3.5 border-r border-sidebar-border pr-2.5 border-l-0'>
                                        <SidebarMenuSubItem>
                                            <SidebarMenuSubButton>
                                                <Link to="/">
                                                    <span>محصولات</span>
                                                </Link>
                                            </SidebarMenuSubButton>
                                        </SidebarMenuSubItem>

                                        <SidebarMenuSubItem>
                                            <SidebarMenuSubButton>
                                                <Link to="/">
                                                    <span>سفارش‌ها</span>
                                                </Link>
                                            </SidebarMenuSubButton>
                                        </SidebarMenuSubItem>
                                    </SidebarMenuSub>
                                </CollapsibleContent>
                            </Collapsible>
                        </SidebarMenuItem>

                        <SidebarMenuItem>
                            <SidebarMenuButton>
                                <Link className="flex items-end gap-2" to="/">
                                    <CalendarDays />
                                    <span className="leading-3.5">تقویم</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>

                        <SidebarMenuItem>
                            <SidebarMenuButton>
                                <Link className="flex items-end gap-2" to="/">
                                    <MessagesSquare />
                                    <span className="leading-3.5">چت</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>

                        <SidebarMenuItem>
                            <SidebarMenuButton>
                                <Link className="flex items-end gap-2" to="/">
                                    <Mail />
                                    <span className="leading-3.5">ایمیل</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>

                        <SidebarMenuItem>
                            <SidebarMenuButton>
                                <Link className="flex items-end gap-2" to="/">
                                    <NotepadText />
                                    <span className="leading-3.5">یادداشت</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>

                        <SidebarMenuItem>
                            <SidebarMenuButton>
                                <Link className="flex items-end gap-2" to="/">
                                    <Users />
                                    <span className="leading-3.5">مخاطبین</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>

                        <SidebarMenuItem>
                            <SidebarMenuButton>
                                <Link className="flex items-end gap-2" to="/">
                                    <CircleUser />
                                    <span className="leading-3.5">پروفایل</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>

                        <SidebarMenuItem>
                            <SidebarMenuButton>
                                <Link className="flex items-end gap-2" to="/">
                                    <ShoppingCart />
                                    <span className="leading-3.5">فروشگاه</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>

                        <SidebarMenuItem>
                            <SidebarMenuButton>
                                <Link className="flex items-end gap-2" to="/">
                                    <Package />
                                    <span className="leading-3.5">سفارشات</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>

                        <SidebarMenuItem>
                            <SidebarMenuButton>
                                <Link className="flex items-end gap-2" to="/">
                                    <Ticket />
                                    <span className="leading-3.5">تیکت‌ها</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>

                        <SidebarMenuItem>
                            <SidebarMenuButton>
                                <Link className="flex items-end gap-2" to="/">
                                    <Settings />
                                    <span className="leading-3.5">تنظیمات</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>

                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>
        </SidebarContent>
    )
}