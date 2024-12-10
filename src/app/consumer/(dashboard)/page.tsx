import { Metadata } from "next";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ConsumersTab from "./components/ConsumersTab";
import FavoritesTab from "./components/FavoritesTab";
import RecentlyViewedTab from "./components/RecentlyViewedTab";
import UpdatesAndTrendsTab from "./components/UpdatesAndTrendsTab";
import { routeRedirect } from "@/lib/redirect";
import { db } from "@/lib/db";


export const metadata: Metadata = {
  title: "Consumer Dashboard",
  description: "",
};

export default async function DashboardPage() {
  const { userId, user } = await routeRedirect();
  
  
  const categories = await db.consumercategory.findMany({
    orderBy: {
      CategoryLabel: "asc",
    },
  });



  console.log(userId, user)

  return (
    <>
      <div className=" flex-col">
        <div className="flex-1 space-y-4">
          
          <Tabs defaultValue="consumers" className="space-y-4">


            <TabsList>

              <TabsTrigger value="consumers">
                All
              </TabsTrigger>

              <TabsTrigger value="favorites">
                Favorites
              </TabsTrigger>
              
              <TabsTrigger value="recentlyviewed" >
                Recently Viewed
              </TabsTrigger>
              
              <TabsTrigger value="updatesandtrends" >
                Updates and Trends
              </TabsTrigger>
              
            </TabsList>


            <TabsContent value="consumers" className="space-y-4">
              <ConsumersTab categories={categories}/>
            </TabsContent>

            <TabsContent value="favorites" className="space-y-4">
              <FavoritesTab />
            </TabsContent>

            <TabsContent value="recentlyviewed" className="space-y-4">
              <RecentlyViewedTab />
            </TabsContent>

             <TabsContent value="updatesandtrends" className="space-y-4">
              <UpdatesAndTrendsTab />
            </TabsContent>
            
          </Tabs>


        </div>
      </div>
    </>
  );
}
