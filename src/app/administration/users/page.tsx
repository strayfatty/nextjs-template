import { redirect } from "next/navigation";
import { auth } from "~/server/auth";
import { HydrateClient, api } from "~/trpc/server";
import { UserTable } from "./_components/user-table";
import { userTableDefaultQuery } from "./_components/user-table-default-query";

export default async function Users() {
  const session = await auth();
  if (!session) redirect("/api/auth/signin");

  api.users.list.prefetch(userTableDefaultQuery);

  return (
    <HydrateClient>
      <div>
        <h1 className="mb-4 font-bold text-2xl">Users</h1>
        <p className="text-muted-foreground">View users</p>
        <UserTable />
      </div>
    </HydrateClient>
  );
}
