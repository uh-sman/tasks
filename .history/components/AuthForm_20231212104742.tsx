'use client'
import { useState } from "react";
import Image from "next/image";
import Input from "./Input";
import Button from "./Button";
const AuthForm = () => {
    const [ isLoading, setIsLoading ] = useState(false)
    const FormState = 'LOGIN' || 'SIGNUP'
    const [isLogin, setIsLogin] = useState('SIGNUP')

    const handleLoginState = (login:string, signup:string) => {
        if(signup){
            setIsLogin('Signup')
        }
    }
  return (
    <div>
      <div className="flex">
        <div className="bg-white flex flex-col flex-1 justify-center items-center">
          <div className="flex">
            <Image src="/images/logo_1.png" width='350' height={75} alt="Logo" className="" />
          </div>
          <p className="font-semibold italic text-black">
            ...the future is now
          </p>
        </div>
        <div className="flex min-h-screen justify-center bg-[#F5E0B8] p-0 w-1/2">
            {isLogin === 'LOGIN' ? (   <div className="flex justify-center flex-col space-y-4">
            <div>
              <h1 className="text-4xl text-center font-bold text-[#008F97]">
                Login
              </h1>
            </div>
            <div className="w-72 md:w-[420px] lg:w-[560px] flex-shrink-0 min-w-sm bg-base-100">
              {/* <form onSubmit={handleSubmit}> */}
              <form>
                <div className="form-control space-y-10">
                    <Input id="name" className="block outline-none w-full rounded-md border-none py-[12px] pl-7 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6" placeholder='email' type='text'/> 
                    <Input id="name" className="block outline-none w-full rounded-md border-none py-[12px] pl-7 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6" placeholder='password' type='text'/> 
                    <Button className='bg-teal-500 w-full rounded-md py-4 font-medium text-white' disabled={isLoading} type="submit">
                        Login
                    </Button>
                </div>
                <p className="font-semibold text-md">Don`t have an account? <span className="underline">signup</span></p>
              </form>
            </div>
          </div>) : (   <div className="flex justify-center flex-col space-y-4">
            <div>
              <h1 className="text-4xl text-center font-bold text-[#008F97]">
                Signup
              </h1>
            </div>
            <div className="w-72 md:w-[420px] lg:w-[560px] flex-shrink-0 min-w-sm bg-base-100">
              {/* <form onSubmit={handleSubmit}> */}
              <form>
                <div className="form-control space-y-10">
                    <Input id="name" className="block outline-none w-full rounded-md border-none py-[12px] pl-7 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6" placeholder='name' type='text'/> 
                    <Input id="name" className="block outline-none w-full rounded-md border-none py-[12px] pl-7 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6" placeholder='email' type='email'/> 
                    <Input id="name" className="block outline-none w-full rounded-md border-none py-[12px] pl-7 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6" placeholder='password' type='password'/> 
                    <Input id="name" className="block outline-none w-full rounded-md border-none py-[12px] pl-7 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6" placeholder='password' type='file'/> 
                    <Button className='bg-teal-500 w-full rounded-md py-4 font-medium text-white' disabled={isLoading} type="submit">
                        SIGNUP
                    </Button>
                </div>
                <p className="font-semibold text-md">Don`t have an account? <span onClick={ () => handleLoginState('SignUp','login')} className="underline cursor-pointer">signup</span></p>
              </form>
            </div>
          </div>)}
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
