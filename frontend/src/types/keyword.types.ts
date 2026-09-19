export type Keyword = {
    id: string,
    project: string,
    language: string,
    keyword_type: string,
    name: string,
    words: any,
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
    onKeywordCreated: (keyword: Keyword) => void,
    onDialogOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export type KeywordsTableProps = {
    keywords: Keyword[]
}