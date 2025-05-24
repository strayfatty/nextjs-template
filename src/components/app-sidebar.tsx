import Link from "next/link";
import { NavSignIn } from "~/components/nav-sign-in";
import { NavUser } from "~/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "~/components/ui/sidebar";
import { auth } from "~/server/auth";

export async function AppSidebar() {
  const session = await auth();

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="font-bold text-lg">
              <Link href="/">
                <img
                  src="/favicon.ico"
                  alt=""
                  className="h-6 w-6 self-center"
                />
                <span>Home</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent />
      <SidebarFooter>
        {session ? <NavUser session={session} /> : <NavSignIn />}
      </SidebarFooter>
    </Sidebar>
  );
}
