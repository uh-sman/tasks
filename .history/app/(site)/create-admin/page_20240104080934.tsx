"use client";
import { useEffect } from "react";
import { SessionProvider, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

function CreateAdmin() {
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
      <div className="flex">
        <div className="bg-white flex flex-col justify-center items-center w-1/2">
          <div className="flex">
            <figure>
              <Image src='/images/logo_1.png' alt="Logo" width={50} height={50}/> 
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CreateAdminProvider() {
  return (
    <SessionProvider>
      <CreateAdmin />
    </SessionProvider>
  );
}
