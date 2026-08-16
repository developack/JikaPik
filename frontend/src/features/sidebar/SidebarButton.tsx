import { Link } from 'react-router'
import type { ComponentType } from 'react'


interface SidebarButtonProps {
    label: string;
    href: string;
    icon: ComponentType;
}

export function SidebarButton ({ label, href, icon: Icon }: SidebarButtonProps) {
    return (
        <Link to={href} className='flex items-end gap-2 w-full p-2 rounded-xl hover:bg-[#EEF2FF] transition-colors'>
            <span>
                <Icon />
            </span>
            <span className='text-[13px] font-medium'>{label}</span>
        </Link>
    )
}