import { NavSignIn } from "~/components/nav-sign-in";
import { NavUser } from "~/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "~/components/ui/sidebar";
import { auth } from "~/server/auth";

export async function AppSidebar() {
  const session = await auth();

  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent />
      <SidebarFooter>
        {session ? <NavUser session={session} /> : <NavSignIn />}
      </SidebarFooter>
    </Sidebar>
  );
}
