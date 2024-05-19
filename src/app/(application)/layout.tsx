import { AppLayout, AppLayoutLink } from "@/components/layout/AppLayout";

const links: AppLayoutLink[] = [
  { label: "Dashboard", href: "/", icon: "HiHome" },
  { label: "Friends", href: "/", icon: "HiUsers" },
];

const ApplicationLayout = () => <AppLayout links={links} />;

export default ApplicationLayout;
