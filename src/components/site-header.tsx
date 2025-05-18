import { SidebarTrigger } from "./ui/sidebar";

export function SiteHeader() {
  return (
    <header className="flex justify-between pl-1 pr-6 py-2">
      <SidebarTrigger className=""/>
      <div className="flex gap-4">
      </div>
    </header>
  );
}
