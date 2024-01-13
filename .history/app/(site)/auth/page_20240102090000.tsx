"use client";
// import getConfig from 'next/config';

import React, { useState, useCallback } from "react";
import { useRouter, useParams, redirect } from "next/navigation";
import Image from "next/image";
import Input from "@/components/Input";
import Button from "@/components/Button";
import axios from "axios";
import SignUp from "@/components/forms/signup";
import Login from "@/components/forms/login";
import { signIn } from "next-auth/react";
import {FcGoogle} from 'react-icons/fc'

interface UserRegistration {
  name: string;
  email: string;
  password: string;
  avatar: File | Blob | string | null;
}
// import { CldImage } from "next-cloudinary";
// import { File } from "buffer";
const AuthForm = () => {
  // const
  const router = useRouter();
  const params = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [formState, setFormState] = useState<"LOGIN" | "SIGNUP">("LOGIN");
  const [isLogin, setIsLogin] = useState("SIGNUP");
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    avatar: null as File | Blob | string | null,
  });

  const toggleVariant = useCallback (() => {
    setFormState((current) => current === 'LOGIN' ? 'SIGNUP' : 'LOGIN')
  } , [])
  const requestBody: UserRegistration = {
    name: form.name,
    email: form.email,
    password: form.password,
    avatar: form.avatar,
  };
  const createPost = async () => {
    // ...

    const { avatar } = form;

    if (avatar) {
      const formData = new FormData();
      formData.append("file", avatar);
      formData.append("upload_preset", "pya1lxcg" || "");
      formData.append("cloud_name", "dmidoz6fi" || "");
      formData.append("folder", "avatar");

      console.log("env", process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME);

      try {
        const cloudinaryResponse = await fetch(
          `https://api.cloudinary.com/v1_1/dmidoz6fi/image/upload`,
          {
            method: "POST",
            body: formData,
          }
        );

        const cloudinaryData = await cloudinaryResponse.json();
        console.log("Cloudinary data:", cloudinaryData?.public_id);
        setForm({ ...form, avatar: cloudinaryData?.public_id as string });

        if (formState === "SIGNUP") {
          const userRegistrationResponse = await axios.post(
            "http://localhost:4000/api/users/register",
            form
          );
          console.log(
            "User registration response:",
            userRegistrationResponse.data
          );
          router.push(`/dashboard/${userRegistrationResponse.data.userId}`);
          // Handle the response or update the state as needed
        }
        if (formState === "LOGIN") {
        //   handleLogin();
          // const userRegistrationResponse = await axios.post('http://localhost:4000/api/users/login', form);
          // console.log('User registration response:', userRegistrationResponse.data);
          // router.push(`/dashboard/${userRegistrationResponse.data.userId}`)
          // Handle the response or update the state as needed
        }
      } catch (error) {
        console.error("Error:", error);
        // Handle errors here if needed
      }
    }
    // ...
  }; 
  const login = async () => {
    const { email, password } = form
    try {
        const response = await axios.post('http://localhost:4000/api/users/login', {
            email,
            password
        })
        console.log(response)
        sessionStorage.setItem('token', response.data.token)
        // localStorage.setItem('token', response.data.token
        redirect
        //     email: form.email,
        //     password: form.password
        // })
    } catch (error) {
        console.log(error)
    }
  }
  // const login = useCallback (async () => {
  //   const { email, password } = form
  //   try {
  //       const response = await axios.post('http://localhost:4000/api/users/login', {
  //           email,
  //           password
  //       })
  //       console.log(response)
  //       sessionStorage.setItem('token', response.data.token)
  //       // localStorage.setItem('token', response.data.token
  //       redirect
  //       //     email: form.email,
  //       //     password: form.password
  //       // })
  //   } catch (error) {
  //       console.log(error)
  //   }
  // },[form.email, form.password])
  const handleLogin = async () => {
    const userRegistrationResponse = await axios.post(
      "http://localhost:4000/api/users/login",
    );
    console.log("User registration response:", userRegistrationResponse.data);
    router.push(`/dashboard/${userRegistrationResponse.data.userId}`);
  };

  const handleFormUpload = async () => {
    if (formState === "LOGIN") {
      const response = await axios.post(
        "http://localhost:4000/api/users/login",
        {
          ...form,
        }
      );
      console.log(response);
    }
    if (formState === "SIGNUP") {
      const response = await axios.post(
        "http://localhost:4000/api/users/register",
        requestBody
      );
      console.log(response);
    }
    if (formState === "LOGIN") {
      console.log({ email: form.email, password: form.password });
      // const response = await axios.post('http://localhost:4000/api/users/login', {
      //   email: form.email,
      //   password: form.password
      // })
      //      console.log(response)
    }
  };

  const handleGoogleSignIn = useCallback (async () => {
    try {
    await signIn('google', { callbackUrl: '/' })
        
    } catch (error) {
        console.log(error)
    }
  }, [])
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createPost();
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
  return (
    <div className="w-full">
      <div className="lg:flex">
      {/*  */}
        <div className="bg-white hidden lg:flex flex-col flex-1 justify-center items-center">
          <div className="flex">
            <Image
              src="/images/logo_1.png"
              width="350"
              height={75}
              alt="Logo"
              className=""
            />
          </div>
          <p className="font-semibold italic text-black">
            ...the future is now
          </p>
        </div>
        <div className="flex min-h-screen justify-center bg-[#F5E0B8] p-0 w-full lg:w-1/2">
          <div className="flex justify-center flex-col space-y-4">
            <div>
              <h1 className="text-4xl text-center font-bold text-[#008F97]">
                {formState === "SIGNUP" ? "Register" : "Login"}
              </h1>
            </div>
            <div className="w-72 md:w-[420px] lg:w-[560px] flex-shrink-0 min-w-sm bg-base-100">
              {/* <form onSubmit={handleSubmit}> */}
              {/* {
              formState === 'SIGNUP' ? <SignUp setFormState={setFormState}/> : <Login setFormState={setFormState}/>
              } */}
              <form onSubmit={login}>
                <div className="form-control space-y-10">
                 {formState === 'SIGNUP' && <Input
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
                  <Button
                    className="bg-teal-500 w-full rounded-md py-4 font-medium text-white"
                    disabled={isLoading}
                    type="submit"
                  >
                    {formState === 'LOGIN' ? 'login' : 'Signup'}
                  </Button>
                  <button onClick={handleGoogleSignIn} className="bg-teal-500 flex justify-center items-center gap-4 w-full rounded-md py-4 font-medium text-white">
                    <FcGoogle className='w-10 h-10' />
                    <p className="text-center">Sign in with Google</p>
                  </button>
                  <p className="font-semibold text-md">
                   {formState === 'LOGIN' ? "Don't have an account?" : 'already have an account?'}
                    <button
                      onClick={toggleVariant}
                      className="underline cursor-pointer ml-1"
                    >
                      {formState === 'LOGIN' ? 'Create one' :  'login' }
                    </button>
                  </p>
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
