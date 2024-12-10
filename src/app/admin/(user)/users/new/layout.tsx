import { Metadata } from "next";
import Image from "next/image";
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator";
import { SidebarNav } from "./components/sidebar-nav";

export const metadata: Metadata = {
  title: "Forms",
  description: "Advanced form example using react-hook-form and Zod.",
};

const sidebarNavItems = [
  {
    title: "Account Details",
    href: "/admin/users/new",
  },
  {
    title: "Permissions",
    href: "/admin/users/new/account",
  },
  {
    title: "Email Settings",
    href: "/admin/users/new/appearance",
  },
  {
    title: "Overprint Settings",
    href: "/admin/users/new/notifications",
  },
  {
    title: "Audit Logs",
    href: "/admin/users/new/display",
  },
];

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {




  return (
    <>
<Card className="h-full flex-1 flex-col space-y-8 p-8 md:flex">
      <div className="space-y-6 p-10 pb-16 md:block">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Create New User</h2>
          <p className="text-muted-foreground">
            Enter all details of the new user
          </p>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 lg:w-1/5">
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <div className="flex-1 lg:max-w-2xl">{children}</div>
        </div>
      </div>
      </Card>
    </>
  );
}
