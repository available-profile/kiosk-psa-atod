import AppBar from "@/components/AdminAppBar";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";


export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = await auth()

  if (!userId) {
    return redirect("/sign-in")
  }


  return (
    <div>
         <AppBar />
          <main className="flex-1 max-w-7xl mx-auto items-center justify-center overflow-y-auto py-8">
            {children}
          </main>
    </div>
  )

}