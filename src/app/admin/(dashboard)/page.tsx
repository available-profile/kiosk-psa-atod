import { Metadata } from "next";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import  {CalendarDateRangePicker}  from "./components/date-range-picker";
import ConsumersTab from "./components/ConsumersTab";
import ResourcesTab from "./components/ResourcesTab";
import EngagementTab from "./components/EngagementTab";
import { routeRedirect } from "@/lib/redirect";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Example dashboard app built using the components.",
};

export default async function DashboardPage() {
  const { userId, user } = await routeRedirect();

  

  return (
    <>
      <div className=" flex-col ">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="w-[100%] flex md:justify-end">
          <CalendarDateRangePicker />
          </div>
          <Tabs defaultValue="consumers" className="space-y-4">
            <TabsList>
              <TabsTrigger value="consumers">Consumers</TabsTrigger>
              <TabsTrigger value="resources">
                Resources
              </TabsTrigger>
              <TabsTrigger value="engagement" >
                Engagement
              </TabsTrigger>
            </TabsList>
            <TabsContent value="consumers" className="space-y-4">
              <ConsumersTab/>
            </TabsContent>
            <TabsContent value="resources" className="space-y-4">
              <ResourcesTab/>
            </TabsContent>
            <TabsContent value="engagement" className="space-y-4">
              <EngagementTab/>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}
