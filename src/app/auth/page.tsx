"use client";

import { Icon } from "@/components/base/Icon";
import { Typography } from "@/components/base/Typography";
import { LoginForm } from "@/components/forms/Login";
import { RegistrationForm } from "@/components/forms/Registration";
import { Button } from "@/components/ui/Button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/Card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { URL } from "@/const";
import Link from "next/link";
import { useId, useState } from "react";

const enum AuthTab {
  LOGIN = "login",
  REGISTER = "register",
}

const AuthPage = () => {
  const [activeTab, setActiveTab] = useState<AuthTab>(AuthTab.LOGIN);
  const formId = useId();

  return (
    <div className="mx-auto w-full max-w-[450px] space-y-6">
      <header className="space-y-2 text-center">
        <Typography level="h1" weight="medium" styling="h2">
          Authorization
        </Typography>
        <Typography isMuted>
          Sign in to your account or create a new one
        </Typography>
      </header>

      <Button asChild variant="link">
        <Link href={URL.root}>
          <Icon name="TbSignLeft" />
          <Typography styling="small" level="span">
            Back to home
          </Typography>
        </Link>
      </Button>

      <Tabs
        asChild
        onValueChange={(tab) => setActiveTab(tab as AuthTab)}
        value={activeTab}
      >
        <Card>
          <CardHeader>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value={AuthTab.LOGIN}>Login</TabsTrigger>
              <TabsTrigger value={AuthTab.REGISTER}>Register</TabsTrigger>
            </TabsList>
          </CardHeader>

          <TabsContent asChild value={AuthTab.LOGIN}>
            <CardContent className="grid grid-cols-1 gap-4">
              <LoginForm id={formId} onFormSubmit={console.table} />
              <Link href={URL.auth.forgotPassword}>
                <Typography styling="small" level="span" isUnderlined isMuted>
                  Forgot password?
                </Typography>
              </Link>
            </CardContent>
          </TabsContent>

          <TabsContent asChild value={AuthTab.REGISTER}>
            <CardContent>
              <RegistrationForm id={formId} onFormSubmit={console.table} />
            </CardContent>
          </TabsContent>

          <CardFooter>
            <Button size="lg" type="submit" form={formId} className="w-full">
              <div className="mr-2 font-medium">Login</div>
            </Button>
          </CardFooter>
        </Card>
      </Tabs>
    </div>
  );
};

export default AuthPage;
