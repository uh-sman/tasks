import React, { useState } from "react";
import Input from "../Input";
import { useParams, useRouter } from "next/navigation";
import Button from "../Button";

// interface SignUpProps {
//     formState: string,
//     handleChange: (value:string | null) => void
// }
interface UserRegistration {
  name: string;
  email: string;
  password: string;
  avatar: File | Blob | string | null;
}
const Login = () => {
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
  return (
    <form>
        <div className="form-control space-y-10">
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
      <Button
        className="bg-teal-500 w-full rounded-md py-4 font-medium text-white"
        disabled={isLoading}
        type="submit"
      >
        Signup
      </Button>
      <p className="font-semibold text-md">
      Don`t have an account?
        <button
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
