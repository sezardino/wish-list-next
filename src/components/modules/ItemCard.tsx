import { cn } from "@nextui-org/system";
import { ComponentPropsWithoutRef, FC } from "react";
import { Icon, IconNames } from "../base/Icon";
import { Typography } from "../base/Typography";
import { Button } from "../ui/Button";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/Card";

type Props = {
  name: string;
  description: string;
  price: number;
  image: string;
  actions?: { label: string; onClick: () => void; icon: IconNames }[];
};

export type ItemCardProps = ComponentPropsWithoutRef<"div"> & Props;

export const ItemCard: FC<ItemCardProps> = (props) => {
  const { name, description, price, image, actions, className, ...rest } =
    props;

  return (
    <Card {...rest} className={cn("flex flex-col shadow-md", className)}>
      <CardHeader>
        <Typography styling="large" className="text-blue-gray-900">
          {name}
        </Typography>
        <Typography styling="small" isMuted>
          {description}
        </Typography>
      </CardHeader>
      <CardContent className="-order-1 p-0 relative mx-4 mt-4 h-44 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
        {/* TODO: change to image */}
        <img src={image} className="h-full w-full object-cover" />
      </CardContent>
      <CardFooter className="flex justify-between gap-3 mt-auto">
        <Typography styling="small" isMuted>
          Average price: {price}
        </Typography>
        {!!actions?.length && (
          <ul className="flex items-center gap-1">
            {actions?.map((action, index) => (
              <Button
                key={index}
                size="icon"
                variant="outline"
                onClick={action.onClick}
                aria-label={action.label}
              >
                <Icon name={action.icon} size={20} />
              </Button>
            ))}
          </ul>
        )}
      </CardFooter>
    </Card>
  );
};
