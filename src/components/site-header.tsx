import { SidebarTrigger } from "~/components/ui/sidebar";
import { ThemeToggle } from "~/components/ui/theme-toggle";

export function SiteHeader() {
  return (
    <header className="flex justify-between pl-1 pr-6 py-2">
      <SidebarTrigger />
      <div className="flex gap-4">
        <a href="https://github.com/strayfatty/nextjs-template" target="_blank" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground size-9 dark:fill-white">
          <svg className="size-6">
            <use href="/icons/github.svg#github"></use>
          </svg>
        </a>
        <ThemeToggle />
      </div>
    </header>
  );
}
