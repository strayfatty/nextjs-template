"use client";

import { useTheme } from "next-themes";
import { Icons } from "~/components/ui/icons";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <button
      className="inline-flex size-9 items-center justify-center rounded-md font-medium text-sm ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Icons.sun className="dark:-rotate-90 size-6 rotate-0 scale-100 transition-all dark:scale-0" />
      <Icons.moon className="absolute size-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </button>
  );
}
