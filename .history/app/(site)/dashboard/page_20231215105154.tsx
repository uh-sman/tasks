// import React from 'react'
import React from "react"
import Sidebar from "./components/Sidebar"
import DashboardPage from "./components/dashboard"
interface DashboardProps {
    searchParams:{
        title:string
    },
    children:React.ReactNode,
}
export const revalidate = 0
const Dashboard = ({ children }: DashboardProps) => {
  return (
    <div>
    <Sidebar>
      hello
    </Sidebar>
      {/* {children} */}
    </div>
  )
}

export default Dashboard
