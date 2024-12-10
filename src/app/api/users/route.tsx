// app/api/users/route.ts
import { NextRequest, NextResponse } from 'next/server';
import {db} from '@/lib/db';
import  clerkClient  from '@/lib/clerkClient'

// import { auth } from '@clerk/nextjs/server';




export async function GET() {
  try {
    const users = await db.user.findMany();
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    console.error('[USERS_GET]', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

export async function POST(req: NextRequest) {
    try {
        const { email, password, firstName, lastName, username, role } = await req.json();
    console.log({ email, password, firstName, lastName, username})
        const user = await clerkClient.users.createUser({
          emailAddress: [email],
          password,
          firstName,
          lastName,
          username,
          privateMetadata: {
            Role: role
          }
        });
    
    
      console.log(user, 'USER')
        return NextResponse.json({ message: 'User created', user });
      } catch (error) {
        console.log('Error creating user:', error);
        return NextResponse.json({ error: 'Error creating user' }, { status: 500 });
      }
}
