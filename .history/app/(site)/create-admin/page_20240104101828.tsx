"use client";
import { useEffect, useState } from "react";
import { SessionProvider, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Input from "@/components/Input";
import { FcGoogle } from "react-icons/fc";

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
  const [formState, setFormState] = useState<"LOGIN" | "SIGNUP">("LOGIN");
  const [isLogin, setIsLogin] = useState("SIGNUP");
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    avatar: null as File | Blob | string | null,
  });

  const toggleVariant = () => {
    setFormState((current) => current === 'LOGIN' ? 'SIGNUP' : 'LOGIN')
  } 
  const handleChange = (
    value: string,
    data: File | null,
    fieldName: string
  ) => {
    setForm((prevForm) => ({
      ...prevForm,
      [fieldName]: fieldName === "avatar" ? data : value,
    }));
  };
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
        <div className="flex min-h-screen justify-center bg-[#F5E0B8] p-0 w-full lg:w-1/2">
          <div className="flex justify-center flex-col space-y-4">
            <div>
              <h1 className="text-4xl text-center font-bold text-[#008F97]">
                {formState === "SIGNUP" ? "Create Admin" : "Login"}
              </h1>
            </div>
            <div className="w-72 md:w-[420px] lg:w-[560px] flex-shrink-0 min-w-sm bg-base-100">
              <form onSubmit={() => {}}>
                <div className="form-control space-y-10">
                 {formState === 'SIGNUP' && 
                 <Input
                    onChange={(value) => handleChange(value, null, "name")}
                    id="name"
                    className="block outline-none w-full rounded-md border-none py-[12px] pl-7 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                    placeholder="name"
                    type="text"
                  />}
                  <Input
                    onChange={(value) => handleChange(value, null, "email")}
                    id="email"
                    className="block outline-none w-full rounded-md border-none py-[12px] pl-7 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                    placeholder="email"
                    type="email"
                  />
                  <Input
                    onChange={(value) => handleChange(value, null, "password")}
                    id="password"
                    className="block outline-none w-full rounded-md border-none py-[12px] pl-7 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                    placeholder="password"
                    type="password"
                  />
                { formState === 'SIGNUP' &&  <Input
                    // @ts-ignore
                    onChange={(value, file: File | null) =>
                      handleChange(value, file, "avatar")
                    }
                    id="avatar"
                    className="block outline-none w-full rounded-md border-none py-[12px] pl-7 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                    placeholder="avatar"
                    type="file"
                  />}
               
                  <button
                  // onClick={handleAuth}
                    className="bg-teal-500 w-full rounded-md py-4 font-medium text-white"
                    disabled={isLoading}
                    type="submit"
                  >
                    {formState === 'LOGIN' ? 'login' : 'Signup'}
                  </button>
                  <button onClick={() => {}} className="bg-teal-500 flex justify-center items-center gap-4 w-full rounded-md py-4 font-medium text-white">
                    <FcGoogle className='w-10 h-10' />
                    <p className="text-center">Sign in with Google</p>
                  </button>
                  <p className="font-semibold text-md">
                   {formState === 'LOGIN' ? "Don't have an account?" : 'already have an account?'}
                    <small
                      onClick={toggleVariant}
                      className="underline cursor-pointer ml-1 text-lg"
                    >
                      {formState === 'LOGIN' ? 'Create one' :  'login' }
                    </small>
                  </p>
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
