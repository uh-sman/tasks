// import React from 'react'
// 'use client'
import React, { useEffect } from "react"
import Sidebar from "../../../components/Sidebar"
import DashboardPage from "./components/dashboard"
import { SessionProvider, signOut, useSession } from "next-auth/react"

// import { useRouter } from "next/router"
import { getServerSession } from "next-auth"
import { redirect, useRouter } from "next/navigation"
import { authOptions } from "@/pages/api/auth/[...nextauth]"


const Dashboard = async () => {
  // const router = useRouter()
  // const  { data: session } =  useSession()
  const session = await getServerSession(authOptions)
  // console.log('session:',session)
  try {
    if (!session) {
      redirect('/auth')
    }
  } catch (error) {
    console.log(`Error: ${error}`)
  }

  return (
    <SessionProvider>
      <div className="flex justify-between">
      <Sidebar />
  <button className="w-96 bg-teal-700" onClick={() => signOut({callbackUrl: '/auth'})}>
        Logout 
      </button>
    </div>
    </SessionProvider>
  )
}

export default Dashboard
