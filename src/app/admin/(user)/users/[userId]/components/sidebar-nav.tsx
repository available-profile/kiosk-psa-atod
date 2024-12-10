"use client";

import Link from "next/link";
import { usePathname, useParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";





interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {

}

const newSidbarNavItems = (userId: any) => {
  const sidebarNavItems = [
    {
      title: "Account Details",
      href: `/admin/users/${userId}/account`,
    },
    {
      title: "Permissions",
      href: `/admin/users/${userId}/permissions`,
    },
    {
      title: "Email Settings",
      href: `/admin/users/${userId}/email-settings`,
    },
    {
      title: "Overprint Settings",
      href: `/admin/users/${userId}/overprint-settings`,
    },
    {
      title: "Audit Logs",
      href: `/admin/users/${userId}/audit-logs`,
    },
  ];
  
  return sidebarNavItems

}




export function SidebarNav({ className, ...props }: SidebarNavProps) {
  const pathname = usePathname();
  const {userId} = useParams();
  
  const sidebarNavItems = newSidbarNavItems(userId);

  
  return (
    <nav
      className={cn(
        "flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1",
        className,
      )}
      {...props}
    >
      {sidebarNavItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            pathname === item.href
              ? "bg-muted hover:bg-muted"
              : "hover:bg-transparent hover:underline",
            "justify-start",
          )}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}
