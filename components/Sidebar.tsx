'use client'
import Button from "@/components/Button";
import Image from "next/image";
import { usePathname, useRouter, useParams } from "next/navigation";
import { useMemo, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import useFetchForm from "@/hooks/useFetchForm";
import AuthForm from "@/components/AuthForm";
// interface SidebarProps {
//   children: React.ReactNode;
// }
const Sidebar = () => {
    const pathname = usePathname()
    const router = useRouter()
    const [ open, setOpen ]= useState(false)
    // const { onClose,onOpen, isOpen } = useFetchForm()
    // const onChange = (open:boolean) => {
    //   if (!open) {
    //     onClose()
    //   }
    // }
    const routes = useMemo(() => [
        {
          label:'Listings',
          active: pathname !== '/create-listing',
          href: '/dashboard'
        },
        {
          label:'Create-Listing',
          active: pathname === '/create-listing',
          href: '/create-listing'
        },
        {
          label:'CreateAdmin',
          active: pathname === '/create-admin',
          href: '/create-admin'
        },
        {
          label:'Payment',
          active: pathname === '/payment',
          href: '/payment'
        },
      ],[pathname])

      // useEffect(() => {
      //   setOpen(true)
      // }, [])
      const handleClick = () => {
        router.push('')
      }
  return (
    <div className={twMerge(`flex h-full`)}>

    <div className='lg:w-[315px] w-[200px] h-full min-h-screen fixed top-0 left-0 bg-[#F5E0B8]'>
                    <div className='flex flex-col '>
                        <div className='py-4'>
                            <Image src='/images/logo-transparent.png' width={250} height={250} alt="Logo" className='bg-[#F5E0B8] mx-auto' />
                            <Image src='/images/logo-slogan.png' alt="Logo" width="50" height='50' className='bg-[#F5E0B8] mx-auto mt-1' />
                        </div>
    
                        {
                          routes.map((item) => (
                            <>
                          <Button className='text-left active:bg-white focus:bg-white text-[#118286] active:text-[#F48222] pl-[31px] py-[16px]' disabled={item.active} key={item.label} href={item.href} >
                              {item.label}
                            </Button>
                            </>
                          ))
                        }
                    </div>
                </div>
                {/* <main>
                  {children}
                </main> */}
          {/* <main>{children}</main> */}
        </div>)
    // open ? (
    //   <AuthForm/>
    // ) : (
  // )
};

export default Sidebar;

{/* <div className='lg:w-[315px] w-[200px] h-full min-h-screen fixed top-0 left-0 bg-[#F5E0B8]'>
                <div className='flex flex-col '>
                    <div className='py-4'>
                        <Image src='/images/logo_1.png' width="50" height='50' alt="Logo" className='bg-[#F5E0B8] w-1/2 h-1/2 mx-auto' />
                        <Image src='/images/logo-slogan.png' alt="Logo" width="50" height='50' className='bg-[#F5E0B8] mx-auto mt-1' />
                    </div>

                    {
                      routes.map((item) => (
                        <>
                        <Button active={item.active} label={item.label} href={item.href} className='text-left active:bg-white focus:bg-white text-[#118286] active:text-[#F48222] pl-[31px] py-[16px]' disabled={item.active} key={item.label} {...item}>
                          {item.label}
                        </Button>
                        </>
                      ))
                    }
                </div>
            </div> */}