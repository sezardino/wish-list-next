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
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "../ui/input-otp";

const validationSchema = z.object({
  code: z.string({ required_error: "Required Field" }).min(6, "Too short"),
});

type Schema = z.infer<typeof validationSchema>;

const initialValues: Schema = {
  code: undefined as unknown as string,
};

type Props = {
  onFormSubmit: (values: Schema) => void;
};

export type ConfirmResetPasswordCodeFormProps =
  ComponentPropsWithoutRef<"form"> & Props;

const ConfirmResetPasswordCodeFormComponent: ForwardRefRenderFunction<
  HTMLFormElement,
  ConfirmResetPasswordCodeFormProps
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
          <Typography level="h2" weight="bold" styling="h2">
            Verify Email
          </Typography>
          <Typography isMuted>
            Enter the 6-digit code sent to your email
          </Typography>
        </header>
        <FormField
          control={form.control}
          name="code"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Verification Code</FormLabel>
              <FormControl>
                <InputOTP {...field} maxLength={6}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup>
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full" type="submit">
          Verify Code
        </Button>
      </form>
    </Form>
  );
};

export const ConfirmResetPasswordCodeForm = forwardRef(
  ConfirmResetPasswordCodeFormComponent
);
