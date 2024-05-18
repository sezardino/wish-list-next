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
import { Typography } from "../base/Typography";
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

const validationSchema = z.object({
  email: z.string({ required_error: "Required Field" }).email("Invalid email"),
});

type Schema = z.infer<typeof validationSchema>;

const initialValues = {
  email: "",
};

type Props = {
  onFormSubmit: (values: Schema) => void;
};

export type ConfirmResetPasswordFormProps = ComponentPropsWithoutRef<"form"> &
  Props;

const ConfirmResetPasswordFormComponent: ForwardRefRenderFunction<
  HTMLFormElement,
  ConfirmResetPasswordFormProps
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
        <header className="space-y-2 text-center">
          <Typography level="h1" weight="medium" styling="h2">
            Reset Password
          </Typography>
          <Typography isMuted>follow this steps, to reset password.</Typography>
        </header>

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

        <Button type="submit" className="w-full">
          Reset Password
        </Button>
      </form>
    </Form>
  );
};

export const ConfirmResetPasswordForm = forwardRef(
  ConfirmResetPasswordFormComponent
);
