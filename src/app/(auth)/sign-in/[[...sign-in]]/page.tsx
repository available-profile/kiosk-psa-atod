// src/app/sign-in/[[...sign-in]]/page.tsx
import { headers } from "next/headers";
import { SignIn } from '@clerk/nextjs';

export default async function SignInPage() {
  const headerList = await headers(); // Await the headers
  const csp = headerList.get("Content-Security-Policy");

  console.log("Headers:", csp, headerList);

  return (
  <div className='w-full flex justify-center items-center'>
  <SignIn />
  </div>
  )
}
