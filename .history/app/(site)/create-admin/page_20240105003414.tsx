"use client";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { SessionProvider, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Input from "@/components/Input";
import axios from "axios";
import toast from "react-hot-toast";
// import { FcGoogle } from "react-icons/fc";

function CreateAdmin() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return; // Do nothing while loading
    if (!session) router.push("/auth");
  }, [session, status, router]);
  const [formState, setFormState] = useState<"LOGIN" | "SIGNUP">("SIGNUP");
  const [passwordMatch, setPasswordMatch] = useState(false)
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phoneNo: '',
    password: "",
    confirmpassword: "",
    photo: null as File | Blob | string | null,
  });

  const toggleVariant = () => {
    setFormState((current) => (current === "LOGIN" ? "SIGNUP" : "LOGIN"));
  };
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

  if (!session) {
    return null;
  }

  const handleRegister = async (e:any) => {
    e.preventDefault()
    try {
      const { firstname, lastname, email, password, confirmpassword, phoneNo, photo } = form

      const checkPassword = password === confirmpassword
      if (!checkPassword) {
        setPasswordMatch(true)
        console.log("passwords don't match")
        setTimeout(() => setPasswordMatch(false), 3000)
      }
      const res = await axios.post('http://localhost:4000/api/superAdmin/register', {
        firstname,
        lastname,
        email,
        password,
        phoneNo,
      })
      if (res.status === 500) {
        console.log(res?.data?.message)
        toast.error(`failed`)
      }
      toast.success(`${res.data.message}`)
      console.log(res?.data)
    } catch (error) {
      console.log(`Error ${error}`)
    }
  }
  return (
    <div>
      <div className="flex">
        <div className="bg-white hidden lg:flex justify-center items-center w-1/2">
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
        <div className="flex min-h-screen justify-center  bg-[#F5E0B8] p-0 w-full lg:w-1/2">
          <div className="flex flex-col space-y-4">
            <div>
              <h1 className="text-4xl text-center font-bold text-[#008F97]">
                {formState === "SIGNUP" ? "Create Admin" : "Login"}
              </h1>
            </div>
            <div className="w-72 md:w-[420px] flex-shrink-0 lg:w-[560px] min-w-sm bg-base-100">
              <form onSubmit={handleRegister} className="w-full max-w-lg">
                {formState === 'SIGNUP' && <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="firstname"
                    >
                      First Name
                    </label>
                    <Input
                      onChange={(value) => handleChange(value, null, "firstname")}
                      className={`appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
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
                      onChange={(value) => handleChange(value, null, "lastname")}
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-200"
                      id="lastname"
                      type="text"
                      placeholder="Enter last name"
                    />
                  </div>
                </div>}
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <Input
                      onChange={(value) => handleChange(value, null, "email")}
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="email"
                      type="email"
                      placeholder="Enter email"
                    />
                    <p className="text-red-500 text-xs italic">
                      Please fill out this field.
                    </p>
                  </div>
                  {formState === 'SIGNUP' && <div className="w-full md:w-1/2 px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="phoneNo"
                    >
                      Phone Number
                    </label>
                    <Input
                      onChange={(value) => handleChange(value, null, "phoneNo")}
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-200"
                      id="phoneNo"
                      type="text"
                      placeholder="Enter phone number"
                    />
                  </div>}
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className={`w-full ${formState === 'SIGNUP' ? 'md:w-1/2' : 'w-full'} px-3 mb-6 md:mb-0`}>
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <Input
                      onChange={(value) => handleChange(value, null, "password")}
                      className={`appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white  ${passwordMatch ? 'border-red-500' : 'border-gray-200'}`}
                      id="password"
                      type="password"
                      placeholder="********"
                    />
                    <p className="text-red-500 text-xs italic">
                      Please fill out this field.
                    </p>
                  </div>
                  {formState === 'SIGNUP' && <div className="w-full md:w-1/2 px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="confirmpassword"
                    >
                      Confirm Password
                    </label>
                    <Input
                      onChange={(value) => handleChange(value, null, "confirmpassword")}
                      className={`appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-200 ${passwordMatch ? 'border-red-500' : 'border-gray-200'}`}
                      id="confirmpassword"
                      type="password"
                      placeholder="********"
                    />
                  </div>}
                </div>
                {formState === 'SIGNUP' && <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <Input
                    // @ts-ignore
                       onChange={(value, file: File | null ) =>
                        handleChange(value, file, "photo")
                      }
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="photo"
                      type="file"
                      placeholder="******************"
                    />
                      <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="photo"
                    >
                      Photo must not exceed one
                    </label>
                  </div>
                </div>}
                <div className="w-full px-3">
                  <button className="bg-teal-500 w-full rounded-md py-4 font-medium text-white">
                    {formState === "SIGNUP" ? "Create Admin" : "Login"}
                  </button>
                  <p className="font-semibold cursor-pointer underline text-lg" onClick={toggleVariant}>{formState === 'SIGNUP' ? 'or login as admin' : 'create admin account'}</p>
                </div>
                {
                  passwordMatch && <p className="text-red-500 font-semibold">
                    passwords don't match !
                  </p>
                }
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
