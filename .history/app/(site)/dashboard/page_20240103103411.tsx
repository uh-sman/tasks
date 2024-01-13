'use client'
import { Session } from "next-auth"
import { SessionProvider, useSession } from "next-auth/react"

 function Dashboard () {
  const { data: session } = useSession()
  console.log(session)
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