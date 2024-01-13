// 'use client'
import Image from "next/image";
import Input from "./Input";
const AuthForm = () => {
  return (
    <div>
      <div className="flex">
        <div className="bg-white flex flex-col flex-1 justify-center items-center">
          <div className="flex">
            <Image src="" alt="Logo" className="" />
          </div>
          <p className="font-semibold italic text-black">
            ...the future is now
          </p>
        </div>
        <div className="flex min-h-screen justify-center bg-[#F5E0B8] p-0 w-1/2">
          <div className="flex justify-center flex-col ">
            <div>
              <h1 className="text-4xl lg:mr-[460px] font-bold text-[#008F97]">
                Login
              </h1>
            </div>
            <div className="w-72 md:w-[420px] lg:w-[560px] flex-shrink-0 min-w-sm bg-base-100">
              {/* <form onSubmit={handleSubmit}> */}
              <form>
                <div className="form-control">
                    <Input id="name" className="block w-full rounded-md border-none py-1.5 pl-7 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder='name'/> 
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
