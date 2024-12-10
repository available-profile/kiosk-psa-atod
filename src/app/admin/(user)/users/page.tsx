import { PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { columns } from "./components/columns"
import { DataTable } from "./components/data-table"
import { Card } from "@/components/ui/card"
import Link from "next/link";
import { db } from "@/lib/db";



export default async function UsersPage() {

  const users = await db.user.findMany({
    orderBy: {
      DisplayName: "asc",
    },
  });


  return (
    <>
        <Card className="h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Users</h2>
            <p className="text-muted-foreground">
              List of all Users
            </p>
          </div>
          <div className="flex items-center space-x-2">
            {/* <UserNav /> */}
            <Link href="/admin/users/new" >
            <Button size="sm" className="h-8 gap-1">
            <PlusCircle className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Add New User
            </span>
          </Button>
          </Link>
          </div>
        </div>
        <DataTable data={users} columns={columns} />
        </Card>
    </>
  )
}
