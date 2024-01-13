"use client";
import { useEffect } from "react";
import { SessionProvider, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Input from "@/components/Input";

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
      <div className="w-72 md:w-[420px] flex-shrink-0 lg:w-[560px] min-w-sm bg-base-100">
        <form onSubmit={() => {}} className="w-full max-w-lg">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="firstname"
              >
                First Name
              </label>
              <Input
              onChange={() => {}}
                // onChange={(value) => handleChange(value, null, "firstname")}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="firstname"
                type="text"
                placeholder="Enter first name"
              />
              <p className="text-red-500 text-xs italic">
                Please fill out this field.
              </p>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="lastname"
              >
                Last Name
              </label>
              <Input
              onChange={() => {}}
                // onChange={(value) => handleChange(value, null, "lastname")}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="lastname"
                type="text"
                placeholder="Enter last name"
              />
            </div>
          </div>
        </form>
      </div>
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
