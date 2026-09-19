import { useState } from "react"
import { Input } from "@/components/ui/input"
import { X } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import type { TagInputProps } from "@/types/component.types"


export const TagInput = ({ value, onChange, placeholder }: TagInputProps) => {
    const [inputValue, setInputValue] = useState("")

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key !== "Enter") return
        event.preventDefault()

        const tag = inputValue.trim()

        if (!tag) return
        if (tag === "" || value.includes(tag)) return

        onChange([...value, tag])
        setInputValue("")

    }

    const removeTag = (tag: string) => {
        onChange(value.filter((item) => item !== tag))
    }

    return (
        <div>
            <Input
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={placeholder} />

            <div className="mt-3 flex flex-wrap gap-1.5">
                {value.map((tag) => (
                    <Badge variant="outline" key={tag} className="transition-colors hover:bg-table-head">
                        {tag}
                        <button type="button" onClick={() => removeTag(tag)}>
                            <X className="size-4" />
                        </button>
                    </Badge>
                ))}
            </div>
        </div>
    )
}