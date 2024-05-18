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
import { Button } from "../ui/Button";
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

const initialValues: Schema = {
  password: "",
  confirmPassword: "",
};

type Props = {
  onFormSubmit: (values: Schema) => void;
};

export type ChangePasswordFormProps = ComponentPropsWithoutRef<"form"> & Props;

const ChangePasswordFormComponent: ForwardRefRenderFunction<
  HTMLFormElement,
  ChangePasswordFormProps
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

        <Button type="submit" className="w-full">
          Change Password
        </Button>
      </form>
    </Form>
  );
};

export const ChangePasswordForm = forwardRef(ChangePasswordFormComponent);
