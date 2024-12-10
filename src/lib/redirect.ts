import { auth as clerkAuth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { headers } from "next/headers";

export async function routeRedirect() {
  // Authenticate the user with Clerk
  const headerList = await headers(); // Properly awaited
  const userAgent = headerList.get("Content-Security-Policy");

  const { userId } = clerkAuth();

  if (!userId) {
    // Redirect to sign-in if not authenticated
    redirect("/sign-in");
  }

  // Fetch user data from the database
  const user = await db.user.findUnique({
    where: { ClerkUserId: userId },
  });

  if (!user) {
    // Redirect to a fallback page if user data is missing
    redirect("/sign-in");
  }

  // Check user role and redirect accordingly
//   switch (user.role) {
//     case "admin":
//       redirect("/admin");
//       break;
//     case "customer":
//       redirect("/consumer");
//       break;
//     default:
//       // Redirect to a generic fallback page
//       redirect("/sign-in");
//   }
  let destination = '/sign-in';
    switch (user.Role) {
    case "PSA_STAFF":
      destination = "/admin";
      break;
      case "PSA_ADMIN":
        destination = "/admin";
        break;
      case "PHARMACY_OWNER":
        destination = "/consumer";
        break;
    case "PHARMACY_WORKER":
      destination = "/consumer";
      break;
      case "PHARMACY_CUSTOMER":
        destination = "/consumer";
        break;
  }

  // Return user data if needed by the calling component
  return { userId, user };
}
