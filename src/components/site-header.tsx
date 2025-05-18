import { SidebarTrigger } from "~/components/ui/sidebar";
import { ThemeToggle } from "~/components/ui/theme-toggle";

export function SiteHeader() {
  return (
    <header className="flex justify-between py-2 pr-6 pl-1">
      <SidebarTrigger />
      <div className="flex gap-4">
        <a
          href="https://github.com/strayfatty/nextjs-template"
          target="_blank"
          className="inline-flex size-9 items-center justify-center rounded-md font-medium text-sm ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:fill-white"
          rel="noreferrer"
        >
          <svg className="size-6">
            <use href="/icons/github.svg#github" />
          </svg>
        </a>
        <ThemeToggle />
      </div>
    </header>
  );
}
