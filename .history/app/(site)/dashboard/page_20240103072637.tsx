// import React from 'react'
// 'use client'
import React, { useEffect } from "react"
import Sidebar from "../../../components/Sidebar"
import DashboardPage from "./components/dashboard"
import { SessionProvider, signOut, useSession } from "next-auth/react"
import { NextPageContext } from "next"
import { useRouter } from "next/router"
import { getServerSession } from "next-auth"
// import { useRouter } from "next/navigation"
import { authOptions } from "@/pages/api/auth/[...nextauth]"
interface DashboardProps {
    searchParams:{
        title:string
    },
    children:React.ReactNode,
}
// export const revalidate = 0


const Dashboard = async () => {
  const router = useRouter()
  const  session = await getServerSession(authOptions)
  // useEffect(() => {
  //   if (!session) {
  //     router.push('/auth')
  //   }
  // },[session, router])
  if (!session) {
    // signOut({callbackUrl: '/auth'})
    router.push('/auth')
    return null
  }
  return (
    <div className="flex justify-between">
      <Sidebar />
   <button className="w-96 bg-teal-700" onClick={() => signOut({callbackUrl: '/auth'})}>
        Logout 
      </button>
    </div>
  )
}

// const DashboardProvider = () => {
//   <SessionProvider>
//     <Dashboard />
//   </SessionProvider>
// }

// export default DashboardProvider
export default Dashboard
