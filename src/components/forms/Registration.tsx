"use client";

import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ComponentPropsWithoutRef,
  ForwardRefRenderFunction,
  forwardRef,
} from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/Form";
import { Input } from "../ui/Input";

const validationSchema = z
  .object({
    email: z
      .string({ required_error: "Required Field" })
      .email("Invalid email"),
    password: z
      .string({ required_error: "Required Field" })
      .min(8, "Too short"),
    confirmPassword: z.string({ required_error: "Required Field" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type Schema = z.infer<typeof validationSchema>;

const initialValues = {
  email: "",
  password: "",
  repeatPassword: "",
};

type Props = {
  onFormSubmit: (values: Schema) => void;
};

export type RegistrationFormProps = ComponentPropsWithoutRef<"form"> & Props;

const RegistrationFormComponent: ForwardRefRenderFunction<
  HTMLFormElement,
  RegistrationFormProps
> = (props, ref) => {
  const { onFormSubmit, className, ...rest } = props;

  const form = useForm<Schema>({
    resolver: zodResolver(validationSchema),
    defaultValues: initialValues,
  });

  const submitHandler = (values: Schema) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form
        {...rest}
        ref={ref}
        className={cn("grid grid-cols-1 gap-4", className)}
        onSubmit={form.handleSubmit(onFormSubmit)}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="********" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="********" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export const RegistrationForm = forwardRef(RegistrationFormComponent);
