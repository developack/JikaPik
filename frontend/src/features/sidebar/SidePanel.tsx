// import { Link } from 'react-router'
// import { SidebarButton } from '@/features/sidebar/SidebarButton'
// import { ChartIcon } from '@/features/sidebar/icons/ChartIcon'
// import { StoreIcon } from '@/features/sidebar/icons/StoreIcon'
// import { CrmDashboardIcon } from '@/features/sidebar/icons/CrmDashboardIcon'
import { Link } from 'react-router'
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarGroupLabel,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarMenuSub,
    SidebarMenuSubItem,
    SidebarMenuSubButton,

} from '@/components/ui/sidebar'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { ChartNoAxesCombined, CircleDot, ShoppingBag, Sparkles, ChevronLeft, CalendarDays, MessagesSquare, Mail, NotepadText, Users, CircleUser, ShoppingCart, Ticket, Package, Settings, LogOut, ChevronsUpDown, CreditCard, Bell, } from 'lucide-react'


export function SidePanel() {
    return (
        <Sidebar className='p-2' side='right'>
            <SidebarHeader>
                <Link to="/" className='flex items-end gap-2'>
                    <img className='w-[30px]' src="../public/logo.svg" alt="logo" />
                    <span className='font-bold'>جیـکاپیـــک</span>
                </Link>
            </SidebarHeader>
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
            <SidebarFooter>
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <div className="flex w-full cursor-pointer items-center gap-2 rounded-md p-2 hover:bg-sidebar-accent">
                            <Avatar className="size-8">
                                <AvatarImage src="../public/img/avatar.png" />
                                <AvatarFallback>ع</AvatarFallback>
                            </Avatar>

                            <div className="flex min-w-0 flex-1 flex-col text-right">
                                <span className="truncate text-sm font-medium">علی احمدی</span>
                                <span className="truncate text-xs text-muted-foreground">ali@example.com</span>
                            </div>

                            <ChevronsUpDown className='size-4' />
                        </div>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent side="left" align="end" className="w-56 ring-0 border border-border">
                        <DropdownMenuGroup>
                            <DropdownMenuLabel className="font-normal">
                                <div className="flex items-center gap-2">
                                    <Avatar className="size-8">
                                        <AvatarImage src="../public/img/avatar.png" />
                                        <AvatarFallback>ع</AvatarFallback>
                                    </Avatar>
                                    <div className="flex min-w-0 flex-col">
                                        <span className="truncate text-sm font-medium">علی احمدی</span>
                                        <span className="truncate text-xs text-muted-foreground">ali@example.com</span>
                                    </div>
                                </div>
                            </DropdownMenuLabel>

                            <DropdownMenuSeparator />

                            <DropdownMenuItem>
                                <Sparkles />
                                ارتقا به نسخه حرفه‌ای
                            </DropdownMenuItem>

                            <DropdownMenuItem>
                                <CircleUser />
                                حساب کاربری
                            </DropdownMenuItem>

                            <DropdownMenuItem>
                                <CreditCard />
                                صورت‌حساب
                            </DropdownMenuItem>

                            <DropdownMenuItem>
                                <Bell />
                                اعلان‌ها
                            </DropdownMenuItem>
                        </DropdownMenuGroup>

                        <DropdownMenuSeparator />

                        <DropdownMenuItem>
                            <LogOut />
                            خروج از حساب
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </SidebarFooter>
        </Sidebar>
    )
}