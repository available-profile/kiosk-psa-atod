// middleware.ts
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { auth as clerkAuth} from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { NextResponse, NextRequest } from 'next/server';

// const isProtectedRoute = createRouteMatcher(['/admin(.*)', '/consumer(.*)']);
// export default clerkMiddleware((auth, req) => {

//   // const headerList = await headers(); // Await the headers

//   // const userAgent = headerList.get("user-agent");
//   // const contentSecurity = headerList.get("Content-Security-Policy");

//   // console.log("User-Agent:", userAgent);
//   // console.log("Content Security:", contentSecurity);

//   console.log(auth(), clerkAuth(), "AUTH MIDDLE")

//   if (isProtectedRoute(req)) {
//     // Check if the user is authenticated
//     if (!auth().userId) {
//       throw new Error('User is not authenticated');
//     }
//   }



// //   const { userId } = auth();
// // console.log(auth(), userId, 'USER')
// //   if (!userId) {
// //     return NextResponse.redirect(new URL("/sign-in", req.url));
// //   }

// //   const user = await db.user.findUnique({
// //     where: { ClerkUserId: userId },
// //   });

// //   if (!user) {
// //     return NextResponse.redirect(new URL("/sign-in", req.url));
// //   }

// //   let destination = "/sign-in";

// //   switch (user.Role) {
// //     case "PSA_STAFF":
// //       destination = "/admin";
// //       break;
// //       case "PSA_ADMIN":
// //         destination = "/admin";
// //         break;
// //       case "PHARMACY_OWNER":
// //         destination = "/consumer";
// //         break;
// //     case "PHARMACY_WORKER":
// //       destination = "/consumer";
// //       break;
// //       case "PHARMACY_CUSTOMER":
// //         destination = "/consumer";
// //         break;
// //   }

// //   return NextResponse.redirect(new URL(destination, req.url));
// })

export default clerkMiddleware();


export const config = {
  matcher: ["/((?!.*\\..*|_next).*)",  "/(api|trpc)(.*)"],
};