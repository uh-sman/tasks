"use client";
import { useEffect } from "react";
import { SessionProvider, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

function CreateListing() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return; // Do nothing while loading
    if (!session) router.push("/auth");
  }, [session, status, router]);

  if (!session) {
    return null;
  }
  return (
    <div>
      <h1 className="flex gap-4">
        Welcome
        <small>{session?.user?.email}</small>
      </h1>
      <button onClick={() => signOut({ callbackUrl: "/auth" })}>Logout</button>
    </div>
  );
}

export default function CreateListingProvider() {
  return (
    <SessionProvider>
      <CreateListing />
    </SessionProvider>
  );
}
