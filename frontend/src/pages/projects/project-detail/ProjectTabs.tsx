import { Building, Database, FileText, Tag } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { OverviewTabContent } from "@/pages/projects/project-detail/overview/OverviewTabContent"
import { KeywordsTabContent } from "@/pages/projects/project-detail/keywords/KeywordsTabContent"
import { SourcesTabContent } from "@/pages/projects/project-detail/sources/SourcesTabContent"
import { ContentsTabContent } from "@/pages/projects/project-detail/contents/ContentsTabContent"


export const ProjectTabs = () => {
    return (
        <div className="mt-5">
            <Tabs defaultValue="keywords">
                <div className="border-b">
                    <TabsList variant="line" className="h-12!">
                        <TabsTrigger value="overview" className="px-5 py-3 text-sm">
                            <Building />
                            نمای کلی
                        </TabsTrigger>
                        <TabsTrigger value="keywords" className="px-5 py-3 text-sm">
                            <Tag />
                            کلیدواژه‌ها
                        </TabsTrigger>
                        <TabsTrigger value="sources" className="px-5 py-3 text-sm">
                            <Database />
                            منابع خزش
                        </TabsTrigger>
                        <TabsTrigger value="contents" className="px-5 py-3 text-sm">
                            <FileText />
                            محتواها
                        </TabsTrigger>
                    </TabsList>
                </div>
                <div className="mt-5">
                    <TabsContent value="overview"><OverviewTabContent /></TabsContent>
                    <TabsContent value="keywords"><KeywordsTabContent /></TabsContent>
                    <TabsContent value="sources"><SourcesTabContent /></TabsContent>
                    <TabsContent value="contents"><ContentsTabContent /></TabsContent>
                </div>
            </Tabs>
        </div>
    )
}