"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from '@/components/ui/button';
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string;
    title: string;
  }[];
}

export function SidebarNav({ className, items, ...props }: SidebarNavProps) {
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        "flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1",
        className,
      )}
      {...props}
    >
      {items.map((item) => 
      pathname === item.href ?
        <Link
          aria-disabled="true"
          key={item.href}
          href={item.href}
          className={cn(
            buttonVariants({ variant: "ghost" }), "bg-muted hover:bg-muted",
            "justify-start",
          )}
        >
          {item.title}
        </Link> : 
        <Button 
        className={cn(
          buttonVariants({ variant: "ghost" }), 
          "bg-transparent hover:bg-muted text-black",
            "cursor-not-allowed",
          "justify-start",
        )}
        >
          {item.title}
        </Button>
      )}
    </nav>
  );
}
