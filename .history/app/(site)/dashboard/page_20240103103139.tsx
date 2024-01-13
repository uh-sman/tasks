import { Session } from "next-auth"
import { useSession } from "next-auth/react"

export default function Dashboard () {
  const { data } = useSession()
  console.log(data)
  return (
    <div>
      Hello
    </div>
  )
}