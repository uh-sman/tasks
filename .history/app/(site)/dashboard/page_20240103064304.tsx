// import React from 'react'
'use client'
import React from "react"
import Sidebar from "../../../components/Sidebar"
import DashboardPage from "./components/dashboard"
import { signOut, useSession } from "next-auth/react"
import { NextPageContext } from "next"
import { getServerSession } from "next-auth"
interface DashboardProps {
    searchParams:{
        title:string
    },
    children:React.ReactNode,
}
export const revalidate = 0

export async function getServerSideProps(context: any) {
  const session = await getServerSession(context)
  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false
      }
    }
  }
  return {
    props: {
      session
    }
  }
}
const Dashboard = () => {
  return (
    <div className="flex justify-between">
      <Sidebar />
      <button className="w-96 bg-teal-700" onClick={() => signOut({callbackUrl: '/auth'})}>
        Logout 
      </button>
    </div>
  )
}

export default Dashboard
