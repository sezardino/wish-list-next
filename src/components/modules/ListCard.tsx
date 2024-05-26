"use client";

import { Icon, IconNames } from "@/components/base/Icon";
import { cn } from "@/lib/utils";
import { Tooltip } from "@nextui-org/tooltip";

import {
  DEFAULT_DAY_FORMAT,
  ListColors,
  ListColorsBackgroundMap,
} from "@/const";
import dayjs from "dayjs";
import Link from "next/link";
import { ComponentPropsWithRef, FC } from "react";
import { Typography } from "../base/Typography";

type Props = {
  name: string;
  description: string;
  itemsCount: number;
  lastModified: string;
  icon?: IconNames;
  color?: ListColors;
  link: string;
};

export type ListCardProps = ComponentPropsWithRef<"div"> & Props;

const MAX_NAME_LENGTH = 24;
const MAX_DESCRIPTION_LENGTH = 150;

export const ListCard: FC<ListCardProps> = (props) => {
  const {
    name,
    description,
    link,
    itemsCount,
    lastModified,
    icon = "HiArchiveBox",
    color = "chocolate",
    className,
    ...rest
  } = props;

  return (
    <article
      {...rest}
      className={cn(
        "relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md",
        className
      )}
    >
      <Link
        href={link}
        className={cn(
          `bg-clip-border mx-4 rounded-xl overflow-hidden text-white shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center`,
          ListColorsBackgroundMap[color]
        )}
        aria-label={name}
      >
        <Icon name={icon} size={32} />
      </Link>
      <div className="p-4 ml-auto text-right flex flex-col justify-end max-w-[80%]">
        <Link href={link}>
          <Tooltip
            isDisabled={name.length < MAX_NAME_LENGTH}
            content={
              <Typography styling="small" className="max-w-xs">
                {name}
              </Typography>
            }
            aria-label={name}
          >
            <Typography
              level="h3"
              styling="h3"
              aria-label={name.length > MAX_NAME_LENGTH ? name : undefined}
            >
              {name.length < MAX_NAME_LENGTH
                ? name
                : `${name.slice(0, MAX_NAME_LENGTH)}...`}
            </Typography>
          </Tooltip>
        </Link>
        {!!description && (
          <Tooltip
            isDisabled={description.length < MAX_DESCRIPTION_LENGTH}
            content={
              <Typography styling="small" className="max-w-xs">
                {description}
              </Typography>
            }
            aria-label={description}
          >
            <Typography
              styling="small"
              aria-label={
                description.length > MAX_DESCRIPTION_LENGTH
                  ? description
                  : undefined
              }
            >
              {description.length < MAX_DESCRIPTION_LENGTH
                ? description
                : `${description.slice(0, MAX_DESCRIPTION_LENGTH)}...`}
            </Typography>
          </Tooltip>
        )}
      </div>
      <div className="mt-auto border-t border-blue-gray-50 p-4 flex justify-between gap-3 items-center">
        <Typography styling="small">
          <strong className="text-green-500">{itemsCount}</strong> item
          {itemsCount > 1 ? "s" : ""}
        </Typography>
        <Typography styling="small">
          Last modification:{" "}
          <strong className="text-chocolate-500">
            {dayjs(lastModified).format(DEFAULT_DAY_FORMAT)}
          </strong>
        </Typography>
      </div>
    </article>
  );
};
