'use client'

import Button from "@/components/Button"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useMemo } from "react"

const DashboardPage = () => {
  const pathname = usePathname()
  const routes = useMemo(() => [
    {
      label:'Listings',
      active: pathname !== '/create-listing',
      href: '/'
    },
    {
      label:'Create-Listing',
      active: pathname === '/create-listing',
      href: '/create-listing'
    },
    {
      label:'createAdmin',
      active: pathname === '/create-admin',
      href: '/create-admin'
    },
    {
      label:'Payment',
      active: pathname === '/payment',
      href: '/payment'
    },
  ],[])
  return (
    <div>
      <div className='lg:w-[315px] w-[200px] h-full min-h-screen fixed top-0 left-0 bg-[#F5E0B8]'>
                <div className='flex flex-col '>
                    <div className='py-4'>
                        <Image src='/images/logo-transparent.png' width="45" height='45' alt="Logo" className='bg-[#F5E0B8] w-1/2 h-1/2 mx-auto' />
                        <Image src='/images/logo-slogan.png' alt="Logo" width="45" height='45' className='bg-[#F5E0B8] mx-auto mt-1' />
                    </div>

                    {
                      routes.map((item) => (
                        <>
                        <Button className="mt-4 font-bold text-lg" disabled={item.active} key={item.label} {...item}>
                          {item.label}
                        </Button>
                        </>
                      ))
                    }
                </div>
            </div>
    </div>
  )
}

export default DashboardPage
