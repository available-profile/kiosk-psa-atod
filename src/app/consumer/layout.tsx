import AppBar from "@/components/AppBar";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";


export default function ConsumerLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <div>
         <AppBar />
          <main className="flex-1 max-w-7xl mx-auto items-center justify-center overflow-y-auto py-8">

            {children}
          </main>
    </div>
  )

}