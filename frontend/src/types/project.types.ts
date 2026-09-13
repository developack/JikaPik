export type Project = {
    id: string,
    name: string,
    activity_status: boolean,
    other_fields: JSON,
    created: string,
    updated?: string,
}

export type NewProjectErrors = {
    name?: string
}

export type NewProjectResponse = {
    name?: string
    activity_status?: boolean,
}

export type NewProjectDialogProps = {
    setNewProject: React.Dispatch<React.SetStateAction<NewProjectResponse>>,
    setDialogOpen: React.Dispatch<React.SetStateAction<boolean>>
}