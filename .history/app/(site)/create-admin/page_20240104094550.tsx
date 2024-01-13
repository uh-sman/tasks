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
        <div className="bg-white hidden lg:flex  justify-center items-center w-1/2">
          <div className="flex">
            <figure>
              <Image
                src="/images/logo_1.png"
                alt="Logo"
                width={350}
                height={350}
              />
            </figure>
          </div>
        </div>
        {/* Second flex item */}
        <div className="flex items-center justify-center h-screen">
          <div className="flex flex-col">
            <div className="ml-0">
              <h1 className="ml-8 text-4xl lg:mr-[250px] font-primary font-bold text-[#008F97]">
                Create Admin
              </h1>
            </div>
            <div className=" w-72 h-[530px] md:w-[500px] md:h-[470px] lg:w-[600px] lg:h-[380px] flex-shrink-0 min-w-sm bg-base-100">
              <form onSubmit={() => {}}>
                <div className="h-screen w-full bg-[#F5E0B8]">
                  <div className="lg:flex lg:space-x-16 ">
                    <div className="form-control mb-2">
                      <label className="label py-0">
                        <span className="label-text text-[#F48222]">
                          First Name
                        </span>
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        onChange={(e) => {}}
                        placeholder="Enter first name"
                        className="input bg-[#F5E0B8] border-5 border-[#ACABAB] valid:text-[#118286] focus:border-[#ACABAB] focus:outline-none focus:bg-[#F5E0B8]"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label py-0">
                        <span className="label-text text-[#F48222]">
                          Last Name
                        </span>
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        required
                        onChange={(e) => {}}
                        placeholder="Enter last name"
                        className="input bg-[#F5E0B8] border-5 border-[#ACABAB] valid:text-[#118286] focus:border-[#ACABAB] focus:outline-none focus:bg-[#F5E0B8]"
                      />
                    </div>
                  </div>
                  <div className="lg:flex lg:space-x-16 ">
                    <div className="form-control mb-2">
                      <label className="label py-0">
                        <span className="label-text text-[#F48222]">Email</span>
                      </label>
                      <input
                        type="text"
                        name="email"
                        required
                        onChange={(e) => {}}
                        placeholder="Enter email"
                        className="input bg-[#F5E0B8] border-5 border-[#ACABAB] valid:text-[#118286] focus:border-[#ACABAB] focus:outline-none focus:bg-[#F5E0B8]"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label py-0">
                        <span className="label-text text-[#F48222]">
                          Phone Number
                        </span>
                      </label>
                      <input
                        type="text"
                        name="phoneNumber"
                        required
                        onChange={(e) => {}}
                        placeholder="Enter phone number"
                        className="input bg-[#F5E0B8] border-5 border-[#ACABAB] valid:text-[#118286] focus:border-[#ACABAB] focus:outline-none focus:bg-[#F5E0B8]"
                      />
                    </div>
                  </div>
                  <div className="lg:flex lg:space-x-16 ">
                    <div className="form-control mb-2">
                      <label className="label py-0">
                        <span className="label-text text-[#F48222]">
                          Password
                        </span>
                      </label>
                      <input
                        type="password"
                        name="password"
                        required
                        onChange={(e) => {}}
                        placeholder="Enter password"
                        className="input bg-[#F5E0B8] border-5 border-[#ACABAB] valid:text-[#118286] focus:border-[#ACABAB] focus:outline-none focus:bg-[#F5E0B8]"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label py-0">
                        <span className="label-text text-[#F48222]">
                          Confirm Password
                        </span>
                      </label>
                      <input
                        type="password"
                        name="password2"
                        required
                        onChange={(e) => {}}
                        placeholder="Confirm password"
                        className="input bg-[#F5E0B8] border-5 border-[#ACABAB] valid:text-[#118286] focus:border-[#ACABAB] focus:outline-none focus:bg-[#F5E0B8]"
                      />
                    </div>
                  </div>
                  <div className="">
                    {/* <FaSquarePlus style={{ color: "#7C6A0A" }} onChange={handleImageUpload} type='file' /> */}
                    <input
                      type="file"
                      max="1"
                      accept=".jpg, .png, .jpeg, .avif"
                      required
                      onChange={() => {}}
                      disabled
                    />
                    <p className="text-sm text-[#F48222]">
                      The photo must not exceed one(1)
                    </p>
                    {/* <button onClick={() => setImages([])}>Clear Images</button> */}
                    {/* <div>{renderCarousel()}</div> */}
                  </div>
                  <div className="form-control mt-6 space-y-3">
                    <button className="btn font-primary text-base normal-case bg-[#118286] outline-none border-none hover:bg-[#118286] text-white">
                      Create Admin
                    </button>
                    <button
                      onClick={() => {}}
                      className="btn font-primary text-base normal-case bg-[#F5E0B8] hover:bg-[#F5E0B8] border-none text-[#118286]"
                    >
                      Login
                    </button>
                  </div>
                </div>
              </form>
            </div>
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
