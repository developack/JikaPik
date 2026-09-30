export type Submission = {
    id: string,
    name: string,
    url: string,
    activity_status: boolean
    created: string
}

export type SubmissionsTableProps = {
    submissions: Submission[]
}