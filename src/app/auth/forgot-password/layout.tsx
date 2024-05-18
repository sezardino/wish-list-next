import { Icon } from "@/components/base/Icon";
import { Typography } from "@/components/base/Typography";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { URL } from "@/const";
import Link from "next/link";
import { PropsWithChildren } from "react";

const layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="mx-auto w-full max-w-[450px] space-y-6">
      <Button asChild variant="link">
        <Link href={URL.auth.root}>
          <Icon name="TbSignLeft" />
          <Typography styling="small" level="span">
            Back to login
          </Typography>
        </Link>
      </Button>

      <Card>
        <CardContent className="mt-4">{children}</CardContent>
      </Card>
    </div>
  );
};

export default layout;
