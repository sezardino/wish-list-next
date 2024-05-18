"use client";

import { Typography } from "@/components/base/Typography";
import { ChangePasswordForm } from "@/components/forms/ChangePassword";
import { ConfirmResetPasswordForm } from "@/components/forms/ConfirmResetPassword";
import { ConfirmResetPasswordCodeForm } from "@/components/forms/ConfirmResetPasswordCode";
import { Button } from "@/components/ui/Button";
import { useState } from "react";

type Props = {};

type ResetPasswordSteps = "email" | "code" | "password";

const ResetPasswordPage = (props: Props) => {
  const [step, setStep] = useState<ResetPasswordSteps>("email");

  return (
    <>
      {step === "email" && (
        <>
          <ConfirmResetPasswordForm onFormSubmit={console.table} />
          <Typography styling="small" className="mt-4">
            Already have a code?
            <Button variant="link" onClick={() => setStep("code")}>
              Verify code
            </Button>
          </Typography>
        </>
      )}
      {step === "code" && (
        <ConfirmResetPasswordCodeForm onFormSubmit={console.table} />
      )}
      {step === "password" && (
        <ChangePasswordForm onFormSubmit={console.table} />
      )}
    </>
  );
};

export default ResetPasswordPage;
