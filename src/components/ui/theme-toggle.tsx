"use client";

import { useTheme } from "next-themes";
import { Icons } from "~/components/ui/icons";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground size-9" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      <Icons.sun className="rotate-0 scale-100 size-6 transition-all dark:-rotate-90 dark:scale-0" />
      <Icons.moon className="absolute rotate-90 size-6 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </button>
  );
}
