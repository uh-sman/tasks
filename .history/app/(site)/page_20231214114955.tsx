'use client'
import AuthForm from "@/components/AuthForm";

import React from "react";
import Sidebar from "./dashboard/components/Sidebar";
import { useRouter } from "next/navigation";
// import Dashboard from "../../components/Dashboard";
// import Dashboard from "./dashboard/components/dashboard";
interface HomeProps {
  children: React.ReactNode
}
export default function Home({
  children
}: HomeProps, user = false) {
  const router = useRouter()
  if (!user) {
    router.refresh()
  }
  return (
    <div>
     {
      user === true ? (  <Sidebar>
        {children}
       </Sidebar>) : (
        <AuthForm/>
       )
     }
   
    </div>
  )
}
