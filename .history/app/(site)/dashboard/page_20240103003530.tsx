// import React from 'react'
'use client'
import React from "react"
import Sidebar from "../../../components/Sidebar"
import DashboardPage from "./components/dashboard"
import { signOut } from "next-auth/react"
interface DashboardProps {
    searchParams:{
        title:string
    },
    children:React.ReactNode,
}
export const revalidate = 0
const Dashboard = () => {
  return (
    <div className="flex justify-between">
      <Sidebar />
      <button className="w-96 bg-teal-700" onClick={() => signOut({callbackUrl: '/auth'})}>
        Logout 
      </button>

      {/* <DashboardPage>
        <div className="flex w-full">
          <div className="bg-red-500 w-20 h-full"></div>
        </div>
      </DashboardPage>
      <DashboardPage>
        <div className="flex w-full">
          <div className="bg-red-500 w-20 h-full"></div>
        </div>
      </DashboardPage> */}
      {/* hello */}
      {/* <Sidebar>
        helooo
      </Sidebar> */}
    {/* <Sidebar>
      hello
    </Sidebar> */}
      {/* {children} */}
    </div>
  )
}

export default Dashboard