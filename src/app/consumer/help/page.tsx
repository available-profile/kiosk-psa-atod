import { promises as fs } from "fs"
import path from "path"
import { Metadata } from "next"
import { z } from "zod"
import { PlusCircle } from 'lucide-react';
import { Card } from "@/components/ui/card"
import Link from "next/link";
import { db } from "@/lib/db";

export const metadata: Metadata = {
  title: "Tasks",
  description: "A task and issue tracker build using Tanstack Table.",
}

// Simulate a database read for tasks.


export default async function HelpPage() {

  const users = await db.user.findMany({
    orderBy: {
      DisplayName: "asc",
    },
  });


  return (
    <>
        <Card className="h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
            <h1>HELP PAGE</h1>        
        </div>
        </Card>
    </>
  )
}
