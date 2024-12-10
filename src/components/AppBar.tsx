"use client";

import { useState, Fragment } from "react";
import { useRouter, usePathname } from "next/navigation"; // Updated import for App Router
import { SettingsIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SignOutButton } from '@clerk/nextjs';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator
  } from '@/components/ui/breadcrumb';
import { SignedIn, UserButton } from "@clerk/nextjs";

import Link from 'next/link';

import SearchBar from './SearchBar';
import LinksBar from './LinksBar';

interface NavLink {
  label: string;
  href: string;
}

interface BreadcrumbItem {
    name: string;
    href: string;
    isCurrent: boolean;
  }

const navLinks: NavLink[] = [
  { label: "Help", href: "/consumer/help" },
];



const getAppBarContentUserType = (pathname: string) => {
    if (pathname.startsWith('/consumer')) {
        return 'consumer';
    } else if (pathname.startsWith('/pharmacist')) {
        return 'pharmacist';
    }
    return 'admin';
};



const AppBar: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter(); // Correct useRouter for App Router

  const handleNavigation = (href: string) => {
    router.push(href); // Use router.push from next/navigation
    setDropdownOpen(false); // Close dropdown after navigation
  };


  const pathname = usePathname();
  const appBarUserType = getAppBarContentUserType(pathname);

  return (
    // <header className="fixed top-0 left-0 w-full shadow-sm z-50">
    <header className="sm:w-full md:w-full sticky top-0 left-0 w-full shadow-sm z-50">
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href='/' className='text-2xl font-extrabold group cursor-pointer'>
          <img
            src='/logo-small.png'
            alt='Description of image'
            className='rounded-lg h-50 w-full object-fill'
          />
        </Link>
        {/* Avatar Dropdown */}
        <SignedIn>
        <div className="flex gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="p-0">
       
             <img
                src="/placeholder-user.jpg" // Replace with your avatar image path
                alt="Avatar"
                className="w-10 h-10 rounded-full border border-gray-300 fill-primary"
              />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            {navLinks.map((link) => (
              <DropdownMenuItem
                key={link.label}
                onClick={() => handleNavigation(link.href)} // Updated navigation handler
                className="cursor-pointer"
              >
                {link.label}
              </DropdownMenuItem>
            ))}
            <SignOutButton>
             <DropdownMenuItem
                className="cursor-pointer"
              >
              Logout
              </DropdownMenuItem>
              </SignOutButton>
          </DropdownMenuContent>
        </DropdownMenu>
        <Link href='/admin' className='text-2xl font-extrabold group cursor-pointer'>
        <Button variant="ghost" className="p-0">
                    <SettingsIcon
                className="h-7 w-7" 
              /> 
              </Button>
            </Link>
        </div>
        </SignedIn>
      </div>
      </div>
      <SignedIn>
        <SearchBar/>
        <LinksBar/>
      </SignedIn>
    
    </header>
  );
};

const DashboardBreadcrumb: React.FC = () => {
    const pathname = usePathname(); // Get the current path
    const segments = pathname.split("/").filter(Boolean); // Split and filter empty segments
  
    // Build breadcrumb items
    const breadcrumbItems: BreadcrumbItem[] = segments.map((segment, index) => {
      const href = "/" + segments.slice(0, index + 1).join("/");
      return {
        name: segment.charAt(0).toUpperCase() + segment.slice(1), // Capitalize first letter
        href,
        isCurrent: index === segments.length - 1, // Last segment is the current page
      };
    });

    return (
      <Breadcrumb className="flex">
        <BreadcrumbList>
        {breadcrumbItems.map((item, index) => (
          <Fragment key={index}>
           {index !== 0 &&  <BreadcrumbSeparator />} {/* Separator between items */}

            <BreadcrumbItem>
                                <Link href={item.href}>
                <BreadcrumbLink className="text-white">
                  {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                </BreadcrumbLink>
                </Link>
            </BreadcrumbItem>
          </Fragment>
        ))}
        </BreadcrumbList>
      </Breadcrumb>
    );
  }
  



export default AppBar;
