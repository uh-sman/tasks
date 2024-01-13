'use client'
import { Session } from "next-auth"
import { SessionProvider, useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import { useRouter } from "next/navigation"

 async function Dashboard () {
  const { data: session } = await useSession()
  const router = useRouter()
  console.log(session)
  if (!session) {
    router.push('/auth')
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