// import React from 'react'
// 'use client'
import Sidebar from "../../../components/Sidebar"
import DashboardPage from "./components/dashboard"
import { signOut } from "next-auth/react"

// import { useRouter } from "next/router"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { authOptions } from "@/pages/api/auth/[...nextauth]"


const Dashboard = async () => {
  const session = await getServerSession(authOptions)
  try {
    if (!session) {
      redirect('/auth')
    }
  } catch (error) {
    console.log(`Error: ${error}`)
  }
  const handleSignOut = async () => {
   await signOut({callbackUrl:'/auth'})
  }

  return (
      <div className="flex justify-between">
      <Sidebar />
  <button className="w-96 bg-teal-700" >
        Logout 
      </button>
    </div>
  )
}

export default Dashboard
