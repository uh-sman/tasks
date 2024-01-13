'use client'
import AuthForm from "@/components/AuthForm";

import React from "react";
import Sidebar from "./dashboard/components/Sidebar";
import { useRouter, usePathname } from "next/navigation";
// import Dashboard from "../../components/Dashboard";
// import Dashboard from "./dashboard/components/dashboard";
interface HomeProps {
  children: React.ReactNode
}
export default function Home({
  children
}: HomeProps, user = true) {
  const router = useRouter()
  const pathname = usePathname()
  if (!user && pathname.includes('/dashboard')) {
    pathname.replace('/', '')
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
