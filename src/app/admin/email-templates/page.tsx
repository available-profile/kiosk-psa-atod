import { Metadata } from "next"
import { Card } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Tasks",
  description: "A task and issue tracker build using Tanstack Table.",
}

// Simulate a database read for tasks.


export default async function EmailTemplatePage() {



  return (
    <>
        <Card className="h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
            <h1>EMAIL TEMPLATES PAGE</h1>        
        </div>
        </Card>
    </>
  )
}
