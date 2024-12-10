// app/api/users/route.ts
import { NextRequest, NextResponse } from 'next/server';
import {db} from '@/lib/db';
import  clerkClient  from '@/lib/clerkClient'
import { currentUser } from '@clerk/nextjs/server'





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
        const { email, password, firstName, lastName, username, subscriptionType, subscriptionValidity, displayName, IsMustChangePassword, IsCannotChangePassword, IsEmail, IsPublish } = await req.json();
    console.log({ email, password, firstName, lastName, username})
        const user = await clerkClient.users.createUser({
          emailAddress: [email],
          password,
          firstName,
          lastName,
          username,
          privateMetadata: {
            Username: username,
            DisplayName: displayName,
            DateExpires: subscriptionValidity,
            IsMustChangePassword, IsCannotChangePassword, IsEmail, IsPublish
          },
          publicMetadata: {
                subscriptionType
          }
        });
    
    
      console.log(user, 'USER')
        return NextResponse.json({ message: 'User created', user });
      } catch (error) {
        console.log('Error creating user:', error);
        return NextResponse.json({ error: 'Error creating user' }, { status: 500 });
      }
}

export async function PATCH(req: NextRequest) {
  try {
    const {
      userId, // The Clerk User ID
      firstName,
      lastName,
      email,
      password,
      username,
      subscriptionType,
      subscriptionValidity,
      displayName,
      IsMustChangePassword,
      IsCannotChangePassword,
      IsEmail,
      IsPublish,
    } = await req.json();

const user = await db.user.findUnique({
  where: {
    ClerkUserId: userId,
  },
});

    // Update the user in Clerk
    const updatedUser = await clerkClient.users.updateUser(userId, {
      ...(firstName ? { firstName } : {}),
      ...(lastName ? { lastName } : {}),
      ...(username ? { username } : {}),
      ...(password ? { password } : {}),
      privateMetadata: {
        ...(displayName ? { DisplayName: displayName } : {}),
        ...(username ? { Username: username } : {}),
        ...(subscriptionValidity ? { DateExpires: subscriptionValidity } : {}),
        ...(IsMustChangePassword !== undefined ? { IsMustChangePassword } : {}),
        ...(IsCannotChangePassword !== undefined ? { IsCannotChangePassword } : {}),
        ...(IsEmail !== undefined ? { IsEmail } : {}),
        ...(IsPublish !== undefined ? { IsPublish } : {}),
      },
      publicMetadata: {
        ...(subscriptionType ? { subscriptionType } : {}),
      },
    });
    
    
  

    console.log( user, 'Updated User');
    return NextResponse.json({ message: 'User updated', user: updatedUser });
  } catch (error) {
    console.log('Error updating user:', error);
    return NextResponse.json({ error: 'Error updating user' }, { status: 500 });
  }
}