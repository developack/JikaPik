import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/toast"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import { PlusIcon } from "lucide-react"
import { PanelLayout } from "@/components/layout/PanelLayout"
import { ProjectTable } from "@/pages/projects/components/ProjectsTable"
import { NewProjectDialog } from "@/pages/projects/components/NewProjectDialog"
import { ProjectsTableSkeleton } from "@/pages/projects/components/ProjectsTableSkeleton"
import type { Project } from "@/types/project.types"
import { getApi } from "@/services/api/api"


export const ProjectsPage = () => {
    const [ projects, setProjects ] = useState<Project[]>([])
    const [ loading, setLoading ] = useState(false)
    const [ dialogOpen, setDialogOpen ] = useState(false)

    const handleProjectCreated = (project: Project) => {
        setProjects(prev => [...prev, project])
    }

    useEffect(() => {
        const fetchProjects = async (): Promise<void> => {

            setLoading(true)
            try {
                const project = await getApi<Project[]>("/projects/")
                setProjects(project)

            } catch (error) {

                toast.add({
                    type: "error",
                    description: "خطا در برقراری ارتباط با سرور",
                })

            } finally {
                setLoading(false)
            }
        }

        fetchProjects()
    }, [])

    return (
        <PanelLayout>
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <section>
                    <header className="flex items-center justify-between">
                        <h1 className="text-2xl font-bold">پروژه‌ها</h1>
                        <DialogTrigger>
                            <Button>
                                <PlusIcon className="size-4" />
                                افزودن پروژه
                            </Button>
                        </DialogTrigger>
                    </header>
                    <main className="mt-10">
                        <div className="bg-surface overflow-hidden rounded-xl border">
                            <div></div>
                            <div>
                                {loading ? <ProjectsTableSkeleton /> : <ProjectTable projects={projects} />}
                                <div className="flex items-center justify-between border-t p-3">
                                    <div className="flex items-center gap-2">
                                        <Button variant="outline" disabled>قبلی</Button>
                                        <Button variant="outline" disabled>بعدی</Button>
                                    </div>
                                    <span className="text-sm text-text-secondary">نمایش 1 تا 6 از 6 مورد</span>
                                </div>
                            </div>
                            <div></div>
                        </div>
                    </main>
                </section>
                <NewProjectDialog onProjectCreated={handleProjectCreated} setDialogOpen={setDialogOpen} />
            </Dialog>
        </PanelLayout>
    )
} 