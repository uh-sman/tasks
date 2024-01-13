'use client'

import Image from "next/image"

const DashboardPage = () => {
  return (
    <div>
      <div className='lg:w-[315px] w-[200px] h-full min-h-screen fixed top-0 left-0 bg-[#F5E0B8]'>
                <div className='flex flex-col '>
                    <div className='py-4'>
                        <Image src='/images/logo-transparent.png' sizes="45" alt="Logo" className='bg-[#F5E0B8] w-1/2 h-1/2 mx-auto' />
                        <Image src='logo-slogan.png' alt="Logo" sizes="45" className='bg-[#F5E0B8] mx-auto mt-1' />
                    </div>

                    {/* <Link to="/listing" className='text-left active:bg-white focus:bg-white text-[#118286] active:text-[#F48222] pl-[31px] py-[16px]'>Listings</Link>
                    <Link to="/create-listing" className='text-left active:bg-white focus:bg-white text-[#118286] active:text-[#F48222] pl-[31px] py-[16px]'>Create Listing</Link>
                    <Link to="/create-admin" className='text-left active:bg-white text-[#118286] active:text-[#F48222] pl-[31px] py-[16px] '>Create Admin</Link>
                    <Link to="/payment" className='text-left sm:text-base text-sm active:bg-white text-[#118286] active:text-[#F48222] pl-[31px] py-[16px]'>Payment</Link> */}

                </div>
            </div>
    </div>
  )
}

export default DashboardPage
