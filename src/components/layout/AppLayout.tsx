"use client";
import { BRAND, URL } from "@/const";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ComponentPropsWithoutRef, useState } from "react";
import { Icon, IconNames } from "../base/Icon";
import { Typography } from "../base/Typography";
import { Button } from "../ui/Button";

export type AppLayoutLink = {
  label: string;
  href: string;
  icon: IconNames;
};

type Props = {
  links: AppLayoutLink[];
};

export type AppLayoutProps = ComponentPropsWithoutRef<"div"> & Props;

export const AppLayout = (props: AppLayoutProps) => {
  const { links, children, className, ...rest } = props;

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return (
    <div
      {...rest}
      className={cn("flex h-screen overflow-y-hidden bg-slate-400", className)}
    >
      <div
        className={cn(
          "fixed inset-0 z-10 bg-black bg-opacity-20 lg:hidden",
          !isSidebarOpen && "hidden"
        )}
        onClick={() => setIsSidebarOpen(false)}
      />

      <aside
        className={cn(
          "fixed inset-y-0 z-10 flex flex-col flex-shrink-0 w-44 max-h-screen overflow-hidden transition-all transform shadow-lg lg:z-auto lg:static lg:shadow-none bg-slate-400",
          !isSidebarOpen && "-translate-x-full lg:translate-x-0 lg:w-16"
        )}
      >
        <div
          className={cn(
            "flex items-center justify-between flex-shrink-0 p-2",
            !isSidebarOpen && "lg:justify-center"
          )}
        >
          <Link href={URL.root}>
            <Typography
              level="span"
              styling="h3"
              isUppercase
              className="p-2 whitespace-nowrap"
            >
              {BRAND[0]}
              <span className={cn(!isSidebarOpen && "lg:hidden")}>
                {BRAND.slice(1)}
              </span>
            </Typography>
          </Link>
          <Button
            size="sm"
            variant={"link"}
            className="lg:hidden"
            onClick={toggleSidebar}
          >
            <Icon name="TbX" />
          </Button>
        </div>
        <nav className="flex-1 overflow-hidden hover:overflow-y-auto">
          <ul className="p-2 overflow-hidden grid grid-cols-1 gap-1">
            {links.map((link) => (
              <li key={link.icon}>
                <Button
                  asChild
                  variant="ghost"
                  className={cn(
                    "justify-start w-full flex items-center gap-2",
                    !isSidebarOpen && "justify-center"
                  )}
                >
                  <Link href={link.href}>
                    <Icon name={link.icon} />

                    <span className={cn(!isSidebarOpen && "lg:hidden")}>
                      {link.label}
                    </span>
                  </Link>
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      <div className="flex flex-col flex-1 h-full overflow-hidden">
        <header className="flex-shrink-0">
          <div className="flex items-center justify-between p-2">
            <div className="flex items-center">
              <Link href={URL.root}>
                <Typography
                  level="span"
                  styling="h3"
                  isUppercase
                  className="p-2 whitespace-nowrap lg:hidden"
                >
                  {BRAND}
                </Typography>
              </Link>
              <Button size="sm" variant={"link"} onClick={toggleSidebar}>
                <Icon
                  name={
                    isSidebarOpen
                      ? "HiChevronDoubleLeft"
                      : "HiChevronDoubleRight"
                  }
                  className="text-white"
                  size={20}
                />
              </Button>
            </div>

            <Button variant="secondary" size="icon">
              <Icon name="HiOutlineBell" />
              <div className="absolute top-2 right-2 p-0.5 bg-red-400 rounded-full animate-ping">
                <div className="p-0.5 bg-red-400 border rounded-full"></div>
              </div>
            </Button>
          </div>
        </header>

        <main className="flex-1 max-h-full overflow-hidden overflow-y-auto rounded-tl-3xl bg-white">
          {children}
        </main>
      </div>
    </div>
  );
};
