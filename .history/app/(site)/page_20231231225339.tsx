'use client'
import AuthForm from "@/components/AuthForm";
import Sidebar from "@/components/Sidebar";

import React from "react";


export async function handler (session:any) {
  if(!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false
      }
    }
  }
  return {
    props: {}
  }
}
const Home = () => {

  return (
    <div>
      <Sidebar>

      </Sidebar>
        {/* <AuthForm /> */}
    </div>
  )
}

export default Home;
