import { useRouter } from 'next/router'
import Discussions from './components/Discussion/Discussions'

export default function Home() {
  const router = useRouter()
  const { tag, item } = router.query
  console.log(tag, item)
  return (
    <div>
      <Discussions />
    </div>
  )
}