import { SidebarFooter } from '@/components/ui/sidebar'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Sparkles, CircleUser, LogOut, ChevronsUpDown, CreditCard, Bell, } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'



export function AppSidebarFooter() {
    return (
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
    )
}