'use client'

import Button from "@/components/Button"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { useMemo } from "react"


interface DashboardPageProps {
  children:React.ReactNode,
}
const DashboardPage:React.FC<DashboardPageProps> = ({children}) => {
  const pathname = usePathname()
  const router = useRouter()
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
  ],[pathname])

  const handleClick = () => {
    // const {href} = routes
    router.replace(pathname)
  }
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
                        <Button handleClick={handleClick} className='text-left active:bg-white focus:bg-white text-[#118286] active:text-[#F48222] pl-[31px] py-[16px]' disabled={item.active} key={item.label} {...item}>
                          {item.label}
                        </Button>
                        </>
                      ))
                    }
                </div>
            </div>
            <div>
              {children}
            </div>
    </div>
  )
}

export default DashboardPage
