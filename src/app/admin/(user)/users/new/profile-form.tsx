"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "@radix-ui/react-icons";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Calendar } from "@/components/ui/calendar";
import { Button, buttonVariants } from "@/components/ui/button";
import moment from 'moment';
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";


import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
import toast from "react-hot-toast";
import { ChevronDownIcon } from "@radix-ui/react-icons";




const profileFormSchema = z.object({
  firstName: z
  .string()
  .min(2, {
    message: "Username must be at least 2 characters.",
  }),
  lastName: z
  .string()
  .min(2, {
    message: "Username must be at least 2 characters.",
  }),
  subscriptionType: z.enum(["standard", "demo", "admin"], {
    invalid_type_error: "Select a Subscription",
    required_error: "Please select a Subscription Type.",
  }),
  subscriptionValidity: z.date().optional(),
  Token: z.string().optional(),
  username: z
    .string()
    .min(5, {
      message: "Username must be at least 5 characters.",
    })
    .max(30, {
      message: "Username must not be longer than 30 characters.",
    }),
    displayName: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .max(30, {
      message: "Username must not be longer than 30 characters.",
    }),
   email: z
    .string({
      required_error: "Please select an email to display.",
    }),
    password: z
    .string()
    .min(6, {
      message: "Password must be at least 8 characters.",
    })
    .max(30, {
      message: "Password must not be longer than 30 characters.",
    }),
    IsMustChangePassword: z.boolean(),
    IsCannotChangePassword: z.boolean(),
    IsEmail: z.boolean(),
    IsPublish: z.boolean()
    
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

// This can come from your database or API.
const defaultValues: Partial<ProfileFormValues> = {
  IsMustChangePassword: false,
  IsCannotChangePassword: false,
  subscriptionType: "demo",
  IsEmail: false,
  IsPublish: false
  
};

export function ProfileForm() {
  const router = useRouter();


  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
    mode: "onChange",
  });


 async function onSubmit(data: ProfileFormValues) {
    try {
      const response = await axios.post("/api/admin/users", data);
      router.push(`/admin/users/${response.data.user.id}/account`);
      toast.success("New Course Created");
    } catch (err) {
      console.log("Failed to create new course", err);
      toast.error("Something went wrong!");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <h4 className="text-lg font-medium">Account Details</h4>
        <p className="text-sm text-muted-foreground">
          This is your account details to access the site.
        </p>
      </div>
      <Separator />    
        
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
      <div className="sm:col-span-3">
   <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        </div>
              <div className="sm:col-span-3">
           <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="******" {...field} />
              </FormControl>
       
              <FormMessage />
            </FormItem>
          )}
        />
         </div>
         </div>
          <FormField
          control={form.control}
          name="IsMustChangePassword"
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
                 Must change on next login
                </FormLabel>
              </div>
            </FormItem>
          )}
        />
                  <FormField
          control={form.control}
          name="IsCannotChangePassword"
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
                 User cannot change password
                </FormLabel>
                <FormDescription>
                 (Recommended for shared logins)
                </FormDescription>
              </div>
            </FormItem>
          )}
        />
        <br/>
      <div>
        <h3 className="text-lg font-medium">Profile</h3>
        <p className="text-sm text-muted-foreground">
          This is how others will see you on the site.
        </p>
      </div>
      <Separator />
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
      <div className="sm:col-span-3">
      <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input placeholder="Your first name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        </div>

        <div className="sm:col-span-3">
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input placeholder="Your last name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        </div>
    </div>
    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
    <div className="sm:col-span-3">
    <FormField
          control={form.control}
          name="subscriptionType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subscription Type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a type of user" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="standard">Full Member</SelectItem>
                  <SelectItem value="demo">Demo User</SelectItem>
                  <SelectItem value="admin">Administrator</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
  
        </div>
            <div className="sm:col-span-3">
    <FormField
          control={form.control}
          name="subscriptionValidity"
          render={({ field }) => (
            <FormItem className="flex flex-col space-y-3 mt-1">
              <FormLabel>Subscription Validity</FormLabel>
              <Popover>
                <PopoverTrigger asChild >
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground",
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto  w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      moment(date).add(1, 'day') <= moment() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              
              <FormMessage />
              
            </FormItem>
          )}
        />   
      </div>
    </div>
    <FormField
          control={form.control}
          name="displayName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Display Name</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input placeholder="email@mail.com" {...field} />
            </FormControl>
            <FormDescription>
            The email address used for this login account. It must be unique.
            </FormDescription>
            <FormMessage />
          </FormItem>
          )}
        />
           <FormField
          control={form.control}
          name="Token"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Token</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormDescription>
              Widget access code enables eFactCards to be put on the pharmacy web site.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
  
   
     
        <Button type="submit">Create</Button>
      </form>
    </Form>
  );
}
