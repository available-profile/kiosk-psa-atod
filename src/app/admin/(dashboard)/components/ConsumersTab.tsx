import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Overview  from './overview';
import { RecentSales } from './recent-sales';
function ConsumersTab() {

  return (
    <>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                     Active Users
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">1540</div>
                    <p className="text-xs text-muted-foreground">
                    Total number of active consumers
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      New Subscriptions
                    </CardTitle>
                  
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">230</div>
                    <p className="text-xs text-muted-foreground">
                    No. of new subscriptions purchased
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Subscription Renewals</CardTitle>
                   
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">27</div>
                    <p className="text-xs text-muted-foreground">
                    No. of consumers renewed in last 30 days
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Churn Rate
                    </CardTitle>
             
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">20%</div>
                    <p className="text-xs text-muted-foreground">
                     % of users who cancel their subscriptions
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-8">
                <Card className="col-span-5">
                  <CardHeader>
                    <CardTitle>Login Frequency</CardTitle>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <Overview />
                  </CardContent>
                </Card>
                <Card className="col-span-4 md:col-span-3">
                  <CardHeader>
                    <CardTitle>Expiring Subscription</CardTitle>
                    <CardDescription>
                      Subscriptions Expiring in 30 days
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RecentSales />
                  </CardContent>
                </Card>
              </div>
    </>
  )
}

export default ConsumersTab
