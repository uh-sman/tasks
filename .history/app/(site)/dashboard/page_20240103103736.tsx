'use client'
import { Session } from "next-auth"
import { SessionProvider, useSession } from "next-auth/react"
import { redirect } from "next/navigation"

 function Dashboard () {
  const { data: session } = useSession()
  console.log(session)
  if (!session) {
    redirect('/auth')
  }
  else{
    return (
      <div>
        Hello
      </div>
    )
  }
}

export default function DashboardProvider ()  {
  <SessionProvider>
    <Dashboard />
  </SessionProvider>
}