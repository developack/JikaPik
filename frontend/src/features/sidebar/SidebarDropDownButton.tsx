import type { ComponentType } from "react"

interface SidebarDropDownButtonProps {
    label: string;
    icon: ComponentType;
    children: React.ReactNode
}


export function SidebarDropDownButton ({ label, icon: Icon, children }: SidebarDropDownButtonProps) {
    return (
        <button className='flex items-end gap-2 w-full p-2 rounded-xl hover:bg-[#EEF2FF] transition-colors'>
            <span>
                <Icon />
            </span>
            <span className='text-[13px] font-medium'>{label}</span>
        </button>
    )
}