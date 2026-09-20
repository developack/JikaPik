export type Keyword = {
    id: string,
    project: string,
    language: string,
    keyword_type: string,
    name: string,
    words: {
        list?: string[]
    },
    created: string,
}

export type KeywordType = {
    id: string,
    name: string
}

export type NewProjectErrors = {
    name?: string
}

export type NewKeywordDialogProps = {
    open: boolean,
    onOpenChange: React.Dispatch<React.SetStateAction<boolean>>
    onKeywordCreated: (keyword: Keyword) => void,
}

export type KeywordDetailDialogProps = {
    open: boolean,
    onOpenChange: React.Dispatch<React.SetStateAction<boolean>>,
    keyword: Keyword | null
}

export type KeywordsTableProps = {
    keywords: Keyword[]
}