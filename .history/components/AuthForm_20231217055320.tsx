"use client";
// import getConfig from 'next/config';

import React, { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Image from "next/image";
import Input from "./Input";
import Button from "./Button";
import axios from "axios";
import SignUp from "./forms/signup";
import Login from "./forms/login";

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
  const [formState, setFormState] = useState<"LOGIN" | "SIGNUP">("SIGNUP");
  const [isLogin, setIsLogin] = useState("SIGNUP");
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    avatar: null as File | Blob | string | null,
  });

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
          handleLogin();
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
  // try {
  //   if(formState === 'SIGNUP'){
  //     const response = await axios.post(`http://localhost:4000/api/users/register`, form)
  //     console.log('response',response)
  //     router.push('/dashboard')
  //     }
  //     if(formState === 'LOGIN') {
  //       console.log('form...',form.email)
  //       // const response = await axios.post(`http://localhost:4000/api/users/login`, form)
  //       // console.log('response',response)
  //       // router.push('/dashboard')
  //     }
  // } catch (error) {
  //   console.log(error)
  // }
  //   console.log(form)

  const handleLogin = async () => {
    const userRegistrationResponse = await axios.post(
      "http://localhost:4000/api/users/login",
      form
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
  // console.log('value', value)
  const handleToggleForm = (newState: "LOGIN" | "SIGNUP") => {
    setFormState(newState);
  };
  return (
    <div>
      <div className="flex">
        <div className="bg-white flex flex-col flex-1 justify-center items-center">
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
        <div className="flex min-h-screen justify-center bg-[#F5E0B8] p-0 w-1/2">
          <div className="flex justify-center flex-col space-y-4">
            <div>
              <h1 className="text-4xl text-center font-bold text-[#008F97]">
                {formState === "SIGNUP" ? "Signup" : "Login"}
              </h1>
            </div>
            <div className="w-72 md:w-[420px] lg:w-[560px] flex-shrink-0 min-w-sm bg-base-100">
              {/* <form onSubmit={handleSubmit}> */}
             {
              formState === 'SIGNUP' ? <SignUp setFormState={setFormState}/> : <Login setFormState={setFormState}/>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
