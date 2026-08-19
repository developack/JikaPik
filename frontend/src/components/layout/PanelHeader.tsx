import { Input } from "@/components/ui/input"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { IconWrapper } from "@/components/ui/icon-wrapper"
import { Contrast, Search, Bell, Mail, Globe, Moon, Monitor, Sun } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu"


export function PanelHeader() {
    return (
        <header className="flex items-center justify-between p-3 border-b border-border bg-surface">
            <div className="flex items-center">
                <SidebarTrigger />
                <div className="mx-5 h-5 w-px bg-border" />
                <div className="relative">
                    <Search className="size-4.5 absolute top-0 bottom-0 m-auto right-[10px]" />
                    <Input className="p-4 pr-9" placeholder="جستجو..." />
                </div>
            </div>
            <div className="flex items-center gap-2">
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <IconWrapper>
                            <Contrast className="size-4" />
                        </IconWrapper>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent className="ring-0 border border-border">
                        <DropdownMenuItem>
                            <Sun />
                            روشن
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Moon />
                            تیره
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Monitor />
                            سیستم
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                <IconWrapper>
                    <Bell className="size-4" />
                </IconWrapper>

                <IconWrapper>
                    <Mail className="size-4" />
                </IconWrapper>

                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <IconWrapper>
                            <Globe className="size-4" />
                        </IconWrapper>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="ring-0 border border-border">
                        <DropdownMenuGroup>
                            <DropdownMenuRadioGroup>
                                <DropdownMenuRadioItem value="persian">فارسی</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="english">English</DropdownMenuRadioItem>
                            </DropdownMenuRadioGroup>
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    )
}