"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
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

const formSchema = z.object({
  firstname: z.string().min(2, {
    message: "First Name must be at least 2 characters.",
  }),
  lastname: z.string().min(2, {
    message: "Last Name must be at least 2 characters.",
  }),
  country: z.string().min(2, {
    message: "Country/Region must be at least 2 characters.",
  }),
  street: z.string().min(2, {
    message: "Street Address must be at least 2 characters.",
  }),
  city: z.string().min(2, {
    message: "City must be at least 2 characters.",
  }),
  state: z.string().min(2, {
    message: "State must be at least 2 characters.",
  }),
  postal: z.string().min(2, {
    message: "Postal Code must be at least 2 characters.",
  }),
  phone: z.string().min(2, {
    message: "Phone must be at least 2 characters.",
  }),
});

export function CheckoutForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      country: "",
      street: "",
      city: "",
      state: "",
      postal: "",
      phone: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-2 gap-4"
      >
        <FormField
          control={form.control}
          name="firstname"
          render={({ field }) => (
            <FormItem className="col-span-1">
              <FormLabel className="block text-sm font-medium text-gray-700">
                First Name*
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="First Name"
                  {...field}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastname"
          render={({ field }) => (
            <FormItem className="col-span-1">
              <FormLabel className="block text-sm font-medium text-gray-700">
                Last Name*
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Last Name"
                  {...field}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem className="col-span-1">
              <FormLabel className="block text-sm font-medium text-gray-700">
                Country/Region*
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Country/Region"
                  {...field}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="street"
          render={({ field }) => (
            <FormItem className="col-span-1">
              <FormLabel className="block text-sm font-medium text-gray-700">
                Street Address*
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Street Address"
                  {...field}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem className="col-span-1">
              <FormLabel className="block text-sm font-medium text-gray-700">
                City*
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="City"
                  {...field}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="state"
          render={({ field }) => (
            <FormItem className="col-span-1">
              <FormLabel className="block text-sm font-medium text-gray-700">
                State*
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="State"
                  {...field}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="postal"
          render={({ field }) => (
            <FormItem className="col-span-1">
              <FormLabel className="block text-sm font-medium text-gray-700">
                Postal Code*
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Postal Code"
                  {...field}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem className="col-span-1">
              <FormLabel className="block text-sm font-medium text-gray-700">
                Phone*
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Phone"
                  {...field}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                />
              </FormControl>
            </FormItem>
          )}
        />
      </form>
      <input type="checkbox"></input>
      <label>Save my information for a faster checkout</label>
      <button
        type="submit"
        className="mt-6 w-full bg-purple-600 text-white p-3 rounded"
      >
        Continue to delivery
      </button>
    </Form>
  );
}
