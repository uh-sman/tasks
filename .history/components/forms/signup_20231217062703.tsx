import React, { useState } from "react";
import Input from "../Input";
import { useParams, useRouter } from "next/navigation";
import Button from "../Button";
import axios from "axios";

interface SignUpProps {
    setFormState: any,
}
interface UserRegistration {
  name: string;
  email: string;
  password: string;
  avatar: File | Blob | string | null;
}
const SignUp:React.FC<SignUpProps> = ({
    setFormState
}) => {
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
  const router = useRouter();
  const params = useParams();
  const [isLoading, setIsLoading] = useState(false);
//   const [formState, setFormState] = useState<"LOGIN" | "SIGNUP">("SIGNUP");
//   const [isLogin, setIsLogin] = useState("SIGNUP");
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
        await handleSignUp()

        // if (formState === "SIGNUP") {
         
        //   // Handle the response or update the state as needed
        // }
        // if (formState === "LOGIN") {
        //   handleLogin();
        //   // const userRegistrationResponse = await axios.post('http://localhost:4000/api/users/login', form);
        //   // console.log('User registration response:', userRegistrationResponse.data);
        //   // router.push(`/dashboard/${userRegistrationResponse.data.userId}`)
        //   // Handle the response or update the state as needed
        // }
      } catch (error) {
        console.error("Error:", error);
        // Handle errors here if needed
      }
    }
    // ...
  };

  const handleSignUp = async () => {
    const userRegistrationResponse = await axios.post(
        "http://localhost:4000/api/users/register",
        form
      );
      console.log(
        "User registration response:",
        userRegistrationResponse.data
      );
      router.push(`/dashboard/${userRegistrationResponse.data.userId}`);
  }
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createPost();
  };
  return (
    <form onSubmit={handleSubmit}>
    <div className="form-control space-y-10">
      <Input
        onChange={(value) => handleChange(value, null, "name")}
        id="name"
        className="block outline-none w-full rounded-md border-none py-[12px] pl-7 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
        placeholder="name"
        type="text"
      />
      <Input
        onChange={(value) => handleChange(value, null, "email")}
        id="name"
        className="block outline-none w-full rounded-md border-none py-[12px] pl-7 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
        placeholder="name"
        type="text"
      />
      <Input
        onChange={(value) => handleChange(value, null, "password")}
        id="name"
        className="block outline-none w-full rounded-md border-none py-[12px] pl-7 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
        placeholder="name"
        type="text"
      />
      <Input
        // @ts-ignore
        onChange={(value, file: File | null) =>
          handleChange(value, file, "avatar")
        }
        id="avatar"
        className="block outline-none w-full rounded-md border-none py-[12px] pl-7 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
        placeholder="avatar"
        type="file"
      />
      <Button
        className="bg-teal-500 w-full rounded-md py-4 font-medium text-white"
        disabled={isLoading}
        type="submit"
      >
        Signup
      </Button>
      <p className="font-semibold text-md">
      already have an account?
        <button
        onClick={() => setFormState('LOGIN')}
          className="underline cursor-pointer"
        >
         login
        </button>
      </p>
    </div>
    </form>
  );
};

export default SignUp;
