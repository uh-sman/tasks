'use client'
// import getConfig from 'next/config';


import React, { useState,useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Input from "./Input";
import Button from "./Button";
import axios from "axios";
// import { CldImage } from "next-cloudinary";
// import { File } from "buffer";
const AuthForm = () => {
    // const { publicRuntimeConfig } = getConfig();
// const cloudName = publicRuntimeConfig.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
// const uploadPreset = publicRuntimeConfig.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;
    const { NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: cloudName , NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET: uploadPreset} = process.env
    const router = useRouter()
    const [ isLoading, setIsLoading ] = useState(false)
    const [formState, setFormState] = useState<'LOGIN' | 'SIGNUP'>('SIGNUP');
    const [isLogin, setIsLogin] = useState('SIGNUP')
    const [form,setForm] = useState({
        name:'',
        email:'',
        password:'',
        avatar: null as File | Blob | string | null
    })

    const createPost = async () => {
        // ...
        const { avatar } = form;
      
        if (avatar) {
          const formData = new FormData();
          formData.append('file', avatar);
          formData.append('upload_preset', 'pya1lxcg' || '');
          formData.append('cloud_name', 'dmidoz6fi' || '');
          formData.append('folder', 'avatar');

          console.log('env', process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME )
      
          try {
            const response = await fetch(`https://api.cloudinary.com/v1_1/dmidoz6fi/image/upload`, {
              method: 'POST',
              body: formData,
            });
            const data = await response.json();
            setForm({...form, avatar: data?.public_id as string})

            if(data){
              if(isLogin === 'SIGNUP'){
              const response = await axios.post(`http://localhost:4000/api/users/register`, form)
              console.log('response',response)
              router.push('/dashboard')
              }
              if(isLogin === 'LOGIN') {
                const response = await axios.post(`http://localhost:4000/api/users/login`, {
                    email:form.email,
                    password:form.password
                })
                console.log('response',response)   
                router.push('/dashboard')
              } 
            }
            // console.log('data', );
          } catch (error) {
            console.log(error);
          }
        }
        // ...
      };
    //   console.log(form)

    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        createPost()
    }
    


    const handleChange = (value:string, data:File | null, fieldName: string) => {
      setForm(prevForm => ({
        ...prevForm,
        [fieldName]: fieldName === 'avatar' ? data : value
       }))
    }
    // console.log('value', value)
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
              <form onSubmit={handleSubmit}>
                <div className="form-control space-y-10">
                    <Input onChange={(value) => handleChange(value, null, 'email')} id="email" className="block outline-none w-full rounded-md border-none py-[12px] pl-7 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6" placeholder='email' type='email'/> 
                    <Input onChange={(value) => handleChange(value, null, 'password')} id="password" className="block outline-none w-full rounded-md border-none py-[12px] pl-7 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6" placeholder='password' type='password'/> 
                    <Button className='bg-teal-500 w-full rounded-md py-4 font-medium text-white' disabled={isLoading} type="submit">
                        Login
                    </Button>
                </div>
                <p className="font-semibold text-md">{isLogin ? 'Don`t have an account?' : 'Already have an account'} <span onClick={ () => setIsLogin('SIGNUP')} className="underline cursor-pointer">{isLogin ? "signup" : 'login'}</span></p>
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
              <form onSubmit={handleSubmit}>
                <div className="form-control space-y-10">
                    <Input onChange={(value) => handleChange(value, null, 'name')} id="name" className="block outline-none w-full rounded-md border-none py-[12px] pl-7 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6" placeholder='name' type='text'/> 
                    <Input onChange={(value) => handleChange(value, null, 'email')} id="email" className="block outline-none w-full rounded-md border-none py-[12px] pl-7 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6" placeholder='email' type='email'/> 
                    <Input onChange={(value) => handleChange(value, null, 'password')} id="password" className="block outline-none w-full rounded-md border-none py-[12px] pl-7 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6" placeholder='password' type='password'/> 
                    <Input onChange={(value, file:File | Blob | null) => handleChange(value, file ,'avatar')} id="avatar" className="block outline-none w-full rounded-md border-none py-[12px] pl-7 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6" placeholder='avatar' type='file'/> 
                    <Button className='bg-teal-500 w-full rounded-md py-4 font-medium text-white' disabled={isLoading} type="submit">
                        Signup
                    </Button>
                </div>
                <p className="font-semibold text-md">{isLogin ?  'already have an account?' : 'Don`t have an account?' } <span onClick={ () => setIsLogin('LOGIN')} className="underline cursor-pointer">{isLogin ? "login" : 'signup'}</span></p>
              </form>
            </div>
          </div>)}
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
