import { Webhook } from 'svix'
import { headers } from 'next/headers'
import { WebhookEvent } from '@clerk/nextjs/server'
import { createUser, UpdateUser } from '@/lib/users'
import { user } from '@prisma/client'
import  clerkClient  from '@/lib/clerkClient'

export async function POST(req: Request) {
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET

  if (!WEBHOOK_SECRET) {
    throw new Error(
      'Please add CLERK_WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local'
    )
  }

  // Get the headers
  const headerPayload = await headers()
  const svix_id = headerPayload.get('svix-id')
  const svix_timestamp = headerPayload.get('svix-timestamp')
  const svix_signature = headerPayload.get('svix-signature')

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error occurred -- no svix headers', {
      status: 400
    })
  }

  // Get the body
  const payload = await req.json()
  const body = JSON.stringify(payload)

  // Create a new Svix instance with your secret.
  const wh = new Webhook(WEBHOOK_SECRET)

  let evt: WebhookEvent

  // Verify the payload with the headers
  try {
    evt = wh.verify(body, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature
    }) as WebhookEvent
  } catch (err) {
    console.log('Error verifying webhook:', err)
    return new Response('Error occurred', {
      status: 400
    })
  }

  const eventType = evt.type
  console.log(evt.data, eventType, 'WEBHOOK DATA')
  if (eventType === 'user.created') {
    const { id, email_addresses, first_name, last_name, username, private_metadata, public_metadata: { subscriptionType } } = evt.data

    if (!id || !email_addresses) {
      return new Response('Error occurred -- missing data', {
        status: 400
      })
    }

    const User = {
      ClerkUserId: id,
      Email: email_addresses[0].email_address,
      ...private_metadata,
      ...(username ? { Username: username } : {}),
      ...(first_name ? { FirstName: first_name } : {}),
      ...(last_name ? { LastName: last_name } : {}),
      ...(subscriptionType == "demo" ? { IsDemo: true } : subscriptionType == "admin" ? {IsAdmin: true} : subscriptionType == "standard" ? {IsNewUser: true} : {}),
    }

console.log(User, evt.data, 'CREATE USER DATA')
    await createUser(User as user)
  }
  
  if (eventType === 'user.updated') {
    const { id, email_addresses, first_name, last_name, username, private_metadata, public_metadata: { subscriptionType } } = evt.data

    if (!id || !email_addresses) {
      return new Response('Error occurred -- missing data', {
        status: 400
      })
    }

    const User = {
      ...private_metadata,
      ...(first_name ? { FirstName: first_name } : {}),
      ...(last_name ? { LastName: last_name } : {}),
      ...(subscriptionType == "demo" ? { IsDemo: true } : subscriptionType == "admin" ? {IsAdmin: true} : subscriptionType == "standard" ? {IsNewUser: true} : {}),
    }

console.log(User, evt.data, 'CREATE USER DATA')
    await UpdateUser(id, User as user)
  }
  
  if (eventType === 'session.created') {
  let {id } = evt.data;
  const response = await clerkClient.sessions.getSession(id)
  console.log(evt, response, 'EVENT DATA')
    

  }

  return new Response('', { status: 200 })
}