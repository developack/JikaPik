import { Building, LayoutDashboard, Tag } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { KeywordsTabContent } from "@/pages/projects/project-detail/keywords/KeywordsTabContent"
import { CategoriesTabContent } from "@/pages/projects/project-detail/categories/CategoriesTabContent"


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
                        <TabsTrigger value="categories" className="px-5 py-3 text-sm">
                            <LayoutDashboard />
                            دسته‌بندی‌ها
                        </TabsTrigger>
                    </TabsList>
                </div>
                <div className="mt-5">
                    <TabsContent value="keywords"><KeywordsTabContent /></TabsContent>
                    <TabsContent value="categories"><CategoriesTabContent /></TabsContent>
                </div>
            </Tabs>
        </div>
    )
}