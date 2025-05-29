import { redirect } from "next/navigation";
import { auth } from "~/server/auth";
import { api } from "~/trpc/server";

export default async function Users() {
  const session = await auth();
  if (!session) redirect("/api/auth/signin");

  const users = await api.users.list();

  return (
    <div>
      <h1 className="mb-4 font-bold text-2xl">Users</h1>
      <p className="text-muted-foreground">View users</p>
      {users.map((u) => (
        <div key={u.id}>
          {u.name}, {u.id}
        </div>
      ))}
    </div>
  );
}
