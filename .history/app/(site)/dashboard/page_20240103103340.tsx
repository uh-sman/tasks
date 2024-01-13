'use client'
import { Session } from "next-auth"
import { SessionProvider, useSession } from "next-auth/react"

 function Dashboard () {
  const { data } = useSession()
  console.log(data)
  return (
    <div>
      Hello
    </div>
  )
}

export default function DashboardProvider ()  {
  <SessionProvider>
    <Dashboard />
  </SessionProvider>
}