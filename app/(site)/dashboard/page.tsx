'use client'
import { useEffect } from "react"
import { SessionProvider, signOut, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { FaPowerOff } from 'react-icons/fa'
import Search from "./components/Search"
import ListingComponent from "./components/ListingComponent"

function Dashboard () {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'loading') return // Do nothing while loading
    if (!session) router.push('/auth')
  }, [session, status, router])

  return session ? <div>
    <h1 className="flex gap-4">
      Welcome   
      <small>{
        session?.user?.email
      }</small>
    </h1>
    <h2>{session?.user?.name}</h2>
    {/* <Search /> */}
    <ListingComponent />
    <button className="bg-teal-400 rounded-full p-3 text-white" onClick={() => signOut({ callbackUrl: '/auth' })}>
      <FaPowerOff />
      Logout
      </button>
  </div> : null
}

export default function DashboardProvider ()  {
  return (
    <SessionProvider>
      <Dashboard />
    </SessionProvider>
  )
}