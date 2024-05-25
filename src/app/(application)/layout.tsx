import { AppLayout, AppLayoutLink } from "@/components/layout/AppLayout";
import { PropsWithChildren } from "react";

const links: AppLayoutLink[] = [
  { label: "Dashboard", href: "/", icon: "HiHome" },
  { label: "Friends", href: "/", icon: "HiUsers" },
];

const ApplicationLayout = ({ children }: PropsWithChildren) => (
  <AppLayout links={links}>{children}</AppLayout>
);

export default ApplicationLayout;
