import { GitHubLink } from "~/components/ui/github-link";
import { SidebarTrigger } from "~/components/ui/sidebar";
import { ThemeToggle } from "~/components/ui/theme-toggle";

export function SiteHeader() {
  return (
    <header className="flex justify-between border-b py-2 pr-6 pl-1">
      <SidebarTrigger />
      <div className="flex gap-4">
        <GitHubLink project="strayfatty/nextjs-template" />
        <ThemeToggle />
      </div>
    </header>
  );
}
