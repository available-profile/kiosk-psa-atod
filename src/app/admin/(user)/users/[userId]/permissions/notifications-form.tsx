"use client";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { toast } from "@/components/ui/use-toast";
import { Separator } from "@/components/ui/separator";

const notificationsFormSchema = z.object({
  type: z.enum(["all", "mentions", "none"], {
    required_error: "You need to select a notification type.",
  }),
  mobile: z.boolean().default(false).optional(),
  communication_emails: z.boolean().default(false).optional(),
  social_emails: z.boolean().default(false).optional(),
  marketing_emails: z.boolean().default(false).optional(),
  security_emails: z.boolean(),
});

type NotificationsFormValues = z.infer<typeof notificationsFormSchema>;

// This can come from your database or API.
const defaultValues: Partial<NotificationsFormValues> = {
  communication_emails: false,
  marketing_emails: false,
  social_emails: true,
  security_emails: true,
};

export function NotificationsForm() {
  const form = useForm<NotificationsFormValues>({
    resolver: zodResolver(notificationsFormSchema),
    defaultValues,
  });

  function onSubmit(data: NotificationsFormValues) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Types of user</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">
                      PSA STAFF 
                    </FormLabel>
                    <FormDescription>
                    Member Services team staff
                    </FormDescription>
                  </div>
                  <FormControl>
                    <RadioGroupItem value="PSA_STAFF" />
                  </FormControl>
                </FormItem>
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">
                    PSA Admin
                    </FormLabel>
                    <FormDescription>
                    Digital IT admin can control settings and dates
                    </FormDescription>
                  </div>
                  <FormControl>
                    <RadioGroupItem value="PSA_ADMIN" />
                  </FormControl>
                </FormItem>
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5 space-x-1">
                    <FormLabel className="text-base">
                    PSA Customer  
                    </FormLabel>
                    <FormDescription>
                    Business or Individual who has purchased kiosk subscription with PSA they can or cannot be a PSA member
                    </FormDescription>
                  </div>
                  <FormControl>
                    <RadioGroupItem value="CUSTOMER" />
                  </FormControl>
                </FormItem>
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5 space-x-1">
                    <FormLabel className="text-base">
                    Pharmacy Worker
                    </FormLabel>
                    <FormDescription>
                    Works for the pharmacist who has purchased the subscription. Can access kiosk from the pharmacist machine, 
can do a pharmacy assistant training from the Kiosk with the specific list of review material.
                    </FormDescription>
                  </div>
                  <FormControl>
                    <RadioGroupItem value="PHARMACY_WORKER" />
                  </FormControl>
                </FormItem>
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">
                    Pharmacy Customer
                    </FormLabel>
                    <FormDescription>
                    patient or person who visits pharmacy for medication is a demo account only
                    </FormDescription>
                  </div>
                  <FormControl>
                    <RadioGroupItem value="PHARMACY_CUSTOMER" />
                  </FormControl>
                </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
          <Separator />
 
        <Button type="submit">Update</Button>
      </form>
    </Form>
  );
}
