import { Separator } from "@/components/ui/separator";
import { AccountForm } from "./account-form";

export default function SettingsAccountPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Overprint Settings</h3>
        <p className="text-sm text-muted-foreground">
           Account overprint settings. 
        </p>
      </div>
      <Separator />
      <AccountForm />
    </div>
  );
}
