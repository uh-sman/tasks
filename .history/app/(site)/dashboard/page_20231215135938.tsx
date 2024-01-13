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
const Dashboard = ({children}: DashboardProps) => {
  return (
    <div>
      <DashboardPage>
        <div className="flex w-full">
          <Sidebar>hello</Sidebar>
        </div>
      </DashboardPage>
      {/* hello */}
      {/* <Sidebar>
        helooo
      </Sidebar> */}
    {/* <Sidebar>
      hello
    </Sidebar> */}
      {children}
    </div>
  )
}

export default Dashboard
