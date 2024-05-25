import { cn } from "@/lib/utils";
import { Pagination } from "@nextui-org/pagination";
import { ComponentPropsWithoutRef, FC } from "react";
import { Typography } from "../base/Typography";
import { ListCard, ListCardProps } from "./ListCard/ListCard";

type Props = {
  title: String;
  // TODO: add right types
  cards: (ListCardProps & { id: string })[];
  pagination?: {
    total: number;
    page: number;
    onChange: (page: number) => void;
  };
};

export type ListOfListProps = ComponentPropsWithoutRef<"section"> & Props;

export const ListOfList: FC<ListOfListProps> = (props) => {
  const { title, cards, className, pagination, ...rest } = props;

  return (
    <section {...rest} className={cn("grid grid-cols-1 gap-12", className)}>
      <Typography level="h2" styling="h2">
        {title}
      </Typography>
      <div className="grid grid-cols-1 gap-4">
        <ul className="grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
          {cards.map((card) => (
            <li key={card.id} className="h-full">
              <ListCard {...card} className="h-full" />
            </li>
          ))}
        </ul>

        {pagination && <Pagination isCompact showControls {...pagination} />}
      </div>
    </section>
  );
};
