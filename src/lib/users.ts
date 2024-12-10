import {db} from '@/lib/db'
import { user } from '@prisma/client'

export async function createUser(data: user) {
  try {
    const User = await db.user.create({ data })
    
    console.log(User, 'USER CREATE')
    return { user: User }
  } catch (error) {
    console.log(error, 'USER CREATE ERROR')
    return { error }
  }
}

export async function getUserById({
  id,
  clerkUserId
}: {
  id?: number
  clerkUserId?: string
}) {
  try {
    if (!id && !clerkUserId) {
      throw new Error('id or clerkUserId is required')
    }

    const query = id ? { UserID: id } : { ClerkUserId: clerkUserId }

    const User = await db.user.findUnique({ where: query })
    return { User }
  } catch (error) {
    return { error }
  }
}

export async function UpdateUser(id: string, data: Partial<user>) {
  try {
    const User = await db.user.update({
      where: { ClerkUserId: id },
      data
    })
    return { User }
  } catch (error) {
    return { error }
  }
}