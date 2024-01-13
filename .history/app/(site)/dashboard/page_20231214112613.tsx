// import React from 'react'
import React from "react"
import Sidebar from "./components/Sidebar"
import DashboardPage from "./components/dashboard"
// interface DashboardProps {
//     searchParams:{
//         title:string
//     }
// }
export const revalidate = 0
const Dashboard = () => {
  return (
    <div>
    <Sidebar>
      hello
      {/* {children} */}
    </Sidebar>
    </div>
  )
}

export default Dashboard
