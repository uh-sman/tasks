'use client'
import Button from "@/components/Button";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useMemo } from "react";
import { twMerge } from "tailwind-merge";
interface SidebarProps {
  children: React.ReactNode;
}
const Sidebar = ({ children }: SidebarProps) => {
    const pathname = usePathname()
    const router = useRouter()
    const routes = useMemo(() => [
        {
          label:'Listings',
          active: pathname !== '/create-listing',
          href: '/listing'
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

      const handleClick = () => {
        router.push('')
      }
  return (
    <div className={twMerge(`flex h-full`)}>

<div className='lg:w-[315px] w-[200px] h-full min-h-screen fixed top-0 left-0 bg-[#F5E0B8]'>
                <div className='flex flex-col '>
                    <div className='py-4'>
                        <Image src='/images/logo_1.png' width="50" height='50' alt="Logo" className='bg-[#F5E0B8] w-1/2 h-1/2 mx-auto' />
                        <Image src='/images/logo-slogan.png' alt="Logo" width="50" height='50' className='bg-[#F5E0B8] mx-auto mt-1' />
                    </div>

                    {
                      routes.map((item) => (
                        <>
                      <Button className='text-left active:bg-white focus:bg-white text-[#118286] active:text-[#F48222] pl-[31px] py-[16px]' disabled={item.active} key={item.label} ref={item.href} {...item}>
                          {item.label}
                        </Button>
                        </>
                      ))
                    }
                </div>
            </div>
        {/* <div className="hidden md:flex flex-col h-full">
        {
                      routes.map((item: any) => (
                        <>
                      <button onClick={() => router.push(item.href)}>
                        {item.label}
                      </button>
                        </>
                      ))
                    }
        </div> */}

      <main>{children}</main>
    </div>
  );
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