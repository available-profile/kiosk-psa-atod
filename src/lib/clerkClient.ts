// lib/clerkClient.ts
import { createClerkClient } from '@clerk/nextjs/server'

const clerkClient = createClerkClient({ secretKey: process.env.CLERK_SECRET_KEY })

// const clerkClient = new Clerk({ apiKey: process.env.CLERK_API_KEY });

export default clerkClient;
