// import React from 'react'
'use client'
import React, { useEffect } from "react"
import Sidebar from "../../../components/Sidebar"
import DashboardPage from "./components/dashboard"
import { SessionProvider, signOut, useSession } from "next-auth/react"
import { NextPageContext } from "next"
import { getServerSession } from "next-auth"
import { useRouter } from "next/navigation"
interface DashboardProps {
    searchParams:{
        title:string
    },
    children:React.ReactNode,
}
export const revalidate = 0


const Dashboard = () => {
  const router = useRouter()
  const { data: session } = useSession()
  useEffect(() => {
    if (!session) {
      router.push('/auth')
    }
  },[session, router])
  if (!session) {
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

const DashboardProvider = () => {
  <SessionProvider>
    <Dashboard />
  </SessionProvider>
}

export default DashboardProvider
