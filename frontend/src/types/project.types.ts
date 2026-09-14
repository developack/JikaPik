export type Project = {
    id: string,
    name: string,
    activity_status: boolean,
    created: string,
}

export type NewProjectErrors = {
    name?: string
}

export type NewProjectDialogProps = {
    onProjectCreated: (project: Project) => void,
    setDialogOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export type ProjectsTableProps = {
    projects: Project[]
}