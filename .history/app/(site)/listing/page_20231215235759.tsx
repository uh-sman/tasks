import Sidebar from '@/components/Sidebar'
import React from 'react'
// import DashboardPage from '../dashboard/components/dashboard'
export const revalidate = 0
const Listings = () => {
  return (
    <div className='grid bg-white h-screen grid-cols-2'>
      <div className="bg-black h-full">
        hello
      </div>
      {/* <Sidebar /> */}
      <h1 className='text-center text-black'>HELOOO FROM LISING</h1>
      {/* <DashboardPage>
        <div className="bg-white h-screen text-center">
            HELLO
        </div>
      </DashboardPage> */}
    </div>
  )
}

export default Listings
