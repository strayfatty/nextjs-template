import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from "~/components/ui/sidebar";
import { NavUser } from "~/components/nav-user";
import { auth } from "~/server/auth";
import { NavSignIn } from "~/components/nav-sign-in";

export async function AppSidebar() {
  const session = await auth();

  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent />
      <SidebarFooter>
        {session ? <NavUser session={session} /> : <NavSignIn /> }
      </SidebarFooter>
    </Sidebar>
  );
}
