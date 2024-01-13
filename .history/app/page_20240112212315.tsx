'use client'
import { useParams } from 'next/navigation'
import Discussions from './(components)/Discussion/Discussions'

export default function Home() {
  const params = useParams<{ tag: string; item: string }>()
  console.log(params)
  return (
    <div>
      <Discussions />
    </div>
  )
}
