import { redirect } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { getInitials } from "~/lib/getInitials";
import { auth } from "~/server/auth";
import { api } from "~/trpc/server";

export default async function Settings() {
  const session = await auth();
  if (!session) redirect("/api/auth/signin");

  const user = await api.users.byId(session.user.id);
  const userInitials = getInitials(user?.name);

  return (
    <div>
      <h1 className="mb-4 font-bold text-2xl">Settings</h1>
      <div className="flex flex-col gap-6">
        <p className="text-muted-foreground">
          Configure your account settings here.
        </p>
        <div className="flex gap-2">
          <Avatar className="size-15 rounded-lg">
            <AvatarImage
              src={user?.image ?? undefined}
              alt={user?.name ?? undefined}
            />
            <AvatarFallback className="rounded-lg" delayMs={200}>
              {userInitials}
            </AvatarFallback>
          </Avatar>
          <div className="grid flex-1 content-start text-left leading-tight">
            <span className="truncate font-medium">{user?.name}</span>
            <span className="truncate text-muted-foreground">
              {user?.email}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
