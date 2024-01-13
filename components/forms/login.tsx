import React, { useState } from "react";
import Input from "../Input";
import { useParams, useRouter } from "next/navigation";
import Button from "../Button";
import axios from "axios";
import toast from "react-hot-toast";

interface LoginProps {
    setFormState: any,
    // handleChange: (value:string | null) => void
}
interface UserRegistration {
  name: string;
  email: string;
  password: string;
  avatar: File | Blob | string | null;
}
const Login:React.FC<LoginProps> = ({setFormState}) => {
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
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    avatar: null as File | Blob | string | null,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // createPost();
    handleLogin()

  };
  const handleLogin = async () => {
    setIsLoading(true)
    // let params = useParams()
    // /${userRegistrationResponse.data.userId}
    const userRegistrationResponse = await axios.post(
      "http://localhost:4000/api/users/login",
      form,
    );
    // params = userRegistrationResponse.data.userId
    console.log("User registration response:", userRegistrationResponse.data);
    setIsLoading(false)
    toast.success('login successful')
    router.push(`/dashboard?userId=${userRegistrationResponse.data.userId}`);
  };
//   const requestBody: UserRegistration = {
//     name: form.name,
//     email: form.email,
//     password: form.password,
//     avatar: form.avatar,
//   };
  return (
    <form onSubmit={handleSubmit}>
        <div className="form-control space-y-10">
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
      <Button
        className="bg-teal-500 w-full rounded-md py-4 font-medium text-white"
        disabled={isLoading}
        type="submit"
      >
        Login
      </Button>
      <p className="font-semibold text-md">
      Don`t have an account?
        <button
        onClick={() => setFormState('SIGNUP')}
          className="underline cursor-pointer"
        >
         signup
        </button>
      </p>
    </div>
    </form>
  );
};

export default Login;
