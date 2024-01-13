import AuthForm from "@/components/AuthForm";
import React from "react";
import Sidebar from "./dashboard/components/Sidebar";
// import Dashboard from "../../components/Dashboard";
// import Dashboard from "./dashboard/components/dashboard";
interface HomeProps {
  children: React.ReactNode
}
export default function Home({
  children
}: HomeProps) {
  return (
    <div>
     <AuthForm />
     <Sidebar>
      {children}
     </Sidebar>
    </div>
  )
}
