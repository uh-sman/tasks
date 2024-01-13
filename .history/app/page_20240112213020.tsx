'use client'
// import { useParams } from 'next/navigation'
import { useRouter, useParams, usePathname } from 'next/navigation'
import Discussions from './(components)/Discussion/Discussions'

export default function Home() {
  const params = useParams<{ tag: string; item: string }>()
  console.log(params)
  // const router = useRouter()
  // const params = router.
  // const { tag, item } = router.query
  // console.log(tag, item)
  // console.log(params)
  return (
    <div>
      <Discussions />
    </div>
  )
}
