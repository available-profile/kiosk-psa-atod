"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarIcon, CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Textarea } from "@/components/ui/textarea";
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

import { toast } from "@/components/ui/use-toast";
import { Separator } from "@/components/ui/separator";


const accountFormSchema = z.object({
  PublishSender: z
    .string()
    .min(2, {
      message: "From Email must be at least 2 characters.",
    })
    .max(30, {
      message: "From Email must not be longer than 30 characters.",
    }).optional(),
    PublishEmail: z
    .string()
    .min(2, {
      message: "Reply Email must be at least 2 characters.",
    })
    .max(30, {
      message: "Reply Email must not be longer than 30 characters.",
    }).optional(),
    PublishAddress: z
    .string()
    .min(2, {
      message: "Reply Email must be at least 2 characters.",
    })
    .max(30, {
      message: "Reply Email must not be longer than 30 characters.",
    }).optional(),
    PublishPhone: z
    .string()
    .min(2, {
      message: "Reply Email must be at least 2 characters.",
    })
    .max(30, {
      message: "Reply Email must not be longer than 30 characters.",
    }).optional(),
    PublishWeb: z
    .string()
    .min(2, {
      message: "Reply Email must be at least 2 characters.",
    })
    .max(30, {
      message: "Reply Email must not be longer than 30 characters.",
    }).optional(),
    Watermark: z
    .string()
    .min(2, {
      message: "Reply Email must be at least 2 characters.",
    })
    .max(30, {
      message: "Reply Email must not be longer than 30 characters.",
    }).optional(),
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 disabled ">
  

    
        <FormField
          control={form.control}
          name="PublishSender"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Business Name</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="PublishEmail"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="PublishAddress"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us a little bit about yourself"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                You can <span>@mention</span> other users and organizations to
                link to them.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
                <FormField
          control={form.control}
          name="PublishPhone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Telephone</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
                <FormField
          control={form.control}
          name="PublishWeb"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Website</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
                <FormField
          control={form.control}
          name="Watermark"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Watermark</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
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
           Enable Overprint 
           </FormLabel>
           <FormDescription>
           Enable overprinting of Fact Cards with these details
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
