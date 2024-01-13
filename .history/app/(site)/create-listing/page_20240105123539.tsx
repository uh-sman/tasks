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
  const data = [
    {
      title: "Survey/Layout",
      subtitle: "Global C of O",
    },
    {
      title: "Gate",
      subtitle: "Certificate of Ownership",
    },
    {
      title: "CCTV",
      subtitle: "Law Deed",
    },
    {
      title: "Security Personnel",
      subtitle: "Agreement",
    },
    {
      title: "Garage",
    },
  ];

  return (
    <div className="w-full mt-2">
      <div className="w-72 md:w-[420px] flex-shrink-0 lg:w-[1000px] min-w-sm bg-base-100">
        <form onSubmit={() => {}} className="w-full max-w-full">
          <div className="flex mb-6">
            <div className="w-full md:w-lg px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="firstname"
              >
                Title of Property
              </label>
              <Input
                onChange={() => {}}
                // onChange={(value) => handleChange(value, null, "firstname")}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="firstname"
                type="text"
                placeholder="Enter title"
              />
              <p className="text-red-500 text-xs italic">
                Please fill out this field.
              </p>
            </div>
            <div className="w-full md:w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="lastname"
              >
                Description
              </label>
              <Input
                onChange={() => {}}
                // onChange={(value) => handleChange(value, null, "lastname")}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="lastname"
                type="text"
                placeholder="Enter the description"
              />
            </div>
          </div>
          <div className="flex flex-wrap mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="firstname"
              >
                Location
              </label>
              <Input
                onChange={() => {}}
                // onChange={(value) => handleChange(value, null, "firstname")}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="firstname"
                type="text"
                placeholder="Enter a location"
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
                Nearest Landmark
              </label>
              <Input
                onChange={() => {}}
                // onChange={(value) => handleChange(value, null, "lastname")}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="lastname"
                type="text"
                placeholder="Enter the nearest landmark"
              />
            </div>
          </div>
          <div className="flex flex-wrap  mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="firstname"
              >
                Plot(s)
              </label>
              <Input
                onChange={() => {}}
                // onChange={(value) => handleChange(value, null, "firstname")}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="firstname"
                type="text"
                placeholder="Enter the number of plots"
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
                Price
              </label>
              <Input
                onChange={() => {}}
                // onChange={(value) => handleChange(value, null, "lastname")}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="lastname"
                type="text"
                placeholder="Enter price"
              />
            </div>
          </div>
          {/* HEADINGS */}
          <div className="flex flex-wrap  mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <h1 className="font-bold text-xl text-orange-300">Amenities</h1>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <h1 className="font-bold text-xl text-orange-300">Documents</h1>
            </div>
          </div>
          {/* CHECKBOXES */}
          {data.map(({ title, subtitle }) => (
            <div className="flex flex-wrap mb-6">
              <div className="w-full flex justify-between md:w-1/2 px-3 mb-6 md:mb-0">
                <h1 className="font-bold text-xl">{title}</h1>
                <input
                  type="checkbox"
                  className="accent-black h-[30px] w-[30px] border border-4"
                />
              </div>
              <div className="w-full flex justify-between md:w-1/2 px-3 mb-6 md:mb-0">
                <h1 className="font-bold text-xl">{subtitle}</h1>
                {subtitle && (
                  <input
                    type="checkbox"
                    className="accent-black h-[30px] w-[30px]"
                  />
                )}
              </div>
            </div>
          ))}
          <div className="flex flex-wrap mt-3 mb-6">
            <div className="w-full flex justify-between md:w-1/2 px-3 mb-6 md:mb-0">
              <h1 className="font-bold text-orange-300 text-xl">Sale</h1>
            </div>
            <div className="w-full flex justify-between md:w-1/2 px-3 mb-6 md:mb-0">
              <h1 className="font-bold text-orange-300 text-xl">
                Sale
              </h1>
            </div>
          </div>
          <div className="flex flex-wrap mt-3 mb-6">
            <div className="w-full flex justify-between md:w-1/2 px-3 mb-6 md:mb-0">
              <h1 className="font-semibold text-lg">Sale</h1>
              <input
                    type="checkbox"
                    className="accent-black h-[30px] w-[30px]"
                  />
            </div>
            <div className="w-full flex justify-between md:w-1/2 px-3 mb-6 md:mb-0">
              <select className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name="" id="">
                <option value="">
                  Installment
                </option>
              </select>
            </div>
          </div>
          <div className="flex flex-wrap mt-3 mb-6">
            <div className="w-full flex justify-between md:w-1/2 px-3 mb-6 md:mb-0">
              <button className="bg-teal-600 w-full h-[50px] font-semibold rounded-md text-white">Add Listing</button>
            </div>
            <div className="w-full flex justify-between md:w-1/2 px-3 mb-6 md:mb-0">
              <button className="bg-transparent w-full h-[50px] font-semibold rounded-md text-teal-500 border border-teal-500">
                Cancel
              </button>
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

{
  /* <div className="flex flex-wrap  mb-6">
            <div className="w-full flex justify-between md:w-1/2 px-3 mb-6 md:mb-0">
            <h1>Survey/layout</h1>
              <input type="checkbox" className="accent-black h-[30px] w-[30px] transition" />
            </div>
            <div className="w-full flex justify-between md:w-1/2 px-3 mb-6 md:mb-0">
            <h1>Survey/layout</h1>
              <input type="checkbox" className="accent-black h-[30px] w-[30px] transition" />
            </div>
          </div> */
}
