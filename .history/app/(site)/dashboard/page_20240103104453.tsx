'use client'
import { useEffect } from "react"
import { SessionProvider, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

function Dashboard () {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'loading') return // Do nothing while loading
    if (!session) router.push('/auth')
  }, [session, status, router])

  return session ? <div>
    <h1>
      Welcome
      {
        session?.user?.email
      }
    </h1>
  </div> : null
}

export default function DashboardProvider ()  {
  return (
    <SessionProvider>
      <Dashboard />
    </SessionProvider>
  )
}