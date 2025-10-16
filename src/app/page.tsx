import { requireAuth } from "@/lib/auth-utils";
import { caller } from "@/trpc/server";

export default async function HomePage() {
  await requireAuth();

  const data = await caller.getUsers()

  return <div className="flex items-center justify-center h-screen flex-col gap-4">{JSON.stringify(data, null, 2)}</div>;
}
