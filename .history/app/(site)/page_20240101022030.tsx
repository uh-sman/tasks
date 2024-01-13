'use client'
import AuthForm from "@/components/AuthForm";
import Sidebar from "@/components/Sidebar";
import { signOut } from 'next-auth/react'
import React from "react";
import { NextPageContext } from "next";
import axios from "axios";

async function isLoggedIn() {
  try {
    const response = await axios.get('/auth', {
      withCredentials: true,
    });
    if (response.status === 200) {
      return true;
    }
  } catch (error) {
    console.log(error);
  }
  return false;
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
