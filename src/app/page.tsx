import { routeRedirect } from '@/lib/redirect';
import React from 'react'

export default async function MainPage() {
    const { userId, user } = await routeRedirect();
console.log(userId, user, 'USER MAAIN')
  return (
    <div>
      
    </div>
  )
}
