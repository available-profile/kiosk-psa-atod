import { ProfileForm } from "./profile-form";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";

interface SettingsProfilePageProps {
  params: { userId: string };
}

export default async function SettingsProfilePage({ params }: SettingsProfilePageProps) {
  
  const { userId } = await params;

  const user = await db.user.findUnique({
    where: { ClerkUserId: userId },
  });

  if (!user) {
    redirect('/admin/users');
  }

  return (
    <div>
      <ProfileForm user={user} />
    </div>
  );
}
