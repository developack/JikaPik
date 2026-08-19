import { Button } from "./button"


export function IconWrapper ({ children }: { children: React.ReactNode }) {
    return (
        <Button variant="ghost" className="px-[5px]">
            {children}
        </Button>
    )
}