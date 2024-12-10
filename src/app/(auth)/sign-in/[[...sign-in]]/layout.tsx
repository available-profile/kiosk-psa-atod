import AppBar from "@/components/AppBar";
import { headers } from "next/headers";


export default async function ConsumerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headerList = await headers(); // Await the headers
  console.log("Headers:", headerList);
  


  return (
    <div>
         <AppBar />
          <main className="flex-1 max-w-7xl mx-auto items-center justify-center overflow-y-auto py-8">
            {children}
          </main>
    </div>
  )

}