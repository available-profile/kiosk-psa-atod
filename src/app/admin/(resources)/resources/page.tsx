import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { redirect } from "next/navigation";

import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import { Card } from "@/components/ui/card";

const CoursesPage = async () => {
  const { userId } = await auth();

  if (!userId) {
    return redirect("/sign-in");
  }

  const resources = await db.resource.findMany({
    orderBy: {
      Title: "desc",
    },
  });

  return (
    <Card className="h-full flex-1 flex-col space-y-8 p-8 md:flex">
    <div className="px-6 py-4">
      <Link href="/instructor/create-course">
        <Button>Create New Resource</Button>
      </Link>

      <div className="mt-5">
      </div>
    </div>
    </Card>
  );
};

export default CoursesPage;
