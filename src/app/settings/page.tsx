import { redirect } from "next/navigation";
import { auth } from "~/server/auth";

export default async function Settings() {
  const session = await auth();
  if (!session)
    redirect("/api/auth/signin");

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      <p className="text-muted-foreground">
        Configure your account settings here.
      </p>
    </div>
  );
}
