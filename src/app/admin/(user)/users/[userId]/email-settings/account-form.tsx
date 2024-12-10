"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarIcon, CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
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
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { toast } from "@/components/ui/use-toast";
import { Separator } from "@/components/ui/separator";

const languages = [
  { label: "English", value: "en" },
  { label: "French", value: "fr" },
  { label: "German", value: "de" },
  { label: "Spanish", value: "es" },
  { label: "Portuguese", value: "pt" },
  { label: "Russian", value: "ru" },
  { label: "Japanese", value: "ja" },
  { label: "Korean", value: "ko" },
  { label: "Chinese", value: "zh" },
] as const;

const accountFormSchema = z.object({
  FromEmail: z
    .string()
    .min(2, {
      message: "From Email must be at least 2 characters.",
    })
    .max(30, {
      message: "From Email must not be longer than 30 characters.",
    }),
    ReplyEmail: z
    .string()
    .min(2, {
      message: "Reply Email must be at least 2 characters.",
    })
    .max(30, {
      message: "Reply Email must not be longer than 30 characters.",
    }),
    IsEmail: z.boolean(),

});

type AccountFormValues = z.infer<typeof accountFormSchema>;

// This can come from your database or API.
const defaultValues: Partial<AccountFormValues> = {
  // name: "Your name",
  // dob: new Date("2023-01-23"),
};

export function AccountForm() {
  const form = useForm<AccountFormValues>({
    resolver: zodResolver(accountFormSchema),
    defaultValues,
  });

  function onSubmit(data: AccountFormValues) {
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
          name="FromEmail"
          render={({ field }) => (
            <FormItem>
              <FormLabel>From Email</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormDescription>
              Normally use the pharmacy email. If the pharmacy email server
              rejects emails sent from this address, enter <span className="link text-primary">noreply@psa.org.au</span>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="ReplyEmail"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Reply Email</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormDescription>
              The email address that the customer's reply will be sent to.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
    <Separator />
     <FormField
          control={form.control}
          name="IsEmail"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>
                Enable Email 
                </FormLabel>
                <FormDescription>
                Enable emailing of Fact Cards to customers
              </FormDescription>
              </div>
            </FormItem>
          )}
        />
            <Separator />
            <br/><br/>
        <Button type="submit">Update</Button>
      </form>
    </Form>
  );
}
