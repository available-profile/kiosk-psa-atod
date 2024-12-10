import React from 'react'
import Link from 'next/link';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

export default function Header() {
  return (
    <header className=' bg-white shadow-lg'>
      <div className='max-w-6xl mx-auto flex justify-between items-center p-3'>
        {/* logo */}
        <Link href='/' className='text-2xl font-extrabold group cursor-pointer'>
          <img
            src='/logo-small.png'
            alt='PSA Kiosk'
            className='rounded-lg h-50 w-full object-fill'
          />
        </Link>
        {/* add a navigation menu */}
        <nav>
          <ul className='flex gap-4'>
            <Link href='/'>Admin</Link>
            <Link href='/about'>Home</Link>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton />
            </SignedOut>
          </ul>
        </nav>
      </div>      
    </header>
  )
}
