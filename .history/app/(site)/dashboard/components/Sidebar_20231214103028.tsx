'use client'
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
interface SidebarProps {
  children: React.ReactNode;
}
const Sidebar = ({ children }: SidebarProps) => {
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
      ],[pathname])
  return (
    <div className={twMerge(`flex h-full`)}>
        <div className="hidden md:flex flex-col h-full">
        {
                      routes.map((item: string) => (
                        <>
                      <button>
                        {item.label}
                      </button>
                        </>
                      ))
                    }
        </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
