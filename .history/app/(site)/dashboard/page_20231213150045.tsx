// import React from 'react'
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
     <DashboardPage>
        <h1>
            hello john
        </h1>
     </DashboardPage>
    </div>
  )
}

export default Dashboard
