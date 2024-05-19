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

const validationSchema = z.object({
  email: z.string({ required_error: "Required Field" }).email("Invalid email"),
  password: z.string({ required_error: "Required Field" }).min(8, "Too short"),
});

type Schema = z.infer<typeof validationSchema>;

const initialValues = {
  email: "",
  password: "",
};

type Props = {
  onFormSubmit: (values: Schema) => void;
};

export type LoginFormProps = ComponentPropsWithoutRef<"form"> & Props;

const LoginFormComponent: ForwardRefRenderFunction<
  HTMLFormElement,
  LoginFormProps
> = (props, ref) => {
  const { onFormSubmit, className, ...rest } = props;

  const form = useForm<Schema>({
    resolver: zodResolver(validationSchema),
    defaultValues: initialValues,
  });

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
      </form>
    </Form>
  );
};

export const LoginForm = forwardRef(LoginFormComponent);
