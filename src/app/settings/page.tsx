import { redirect } from "next/navigation";
import { auth } from "~/server/auth";
import { api } from "~/trpc/server";

export default async function Settings() {
  const session = await auth();
  if (!session) redirect("/api/auth/signin");

  const user = await api.users.byId(session.user.id);

  return (
    <div>
      <h1 className="mb-4 font-bold text-2xl">Settings</h1>
      <p className="text-muted-foreground">
        Configure your account settings here.
      </p>
      <div>{user?.name}</div>
    </div>
  );
}
