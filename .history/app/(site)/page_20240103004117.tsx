'use client'
import Sidebar from "@/components/Sidebar";
import { useSession } from "next-auth/react";
import axios from "axios";

// async function isLoggedIn() {
//   try {
//     const response = await axios.get('/auth', {
//       withCredentials: true,
//     });
//     if (response.status === 200) {
//       return true;
//     }
//   } catch (error) {
//     console.log(error);
//   }
//   return false;
// }

async function isLoggedIn () {
  try {
    const session = useSession()
    if (!session) {
      return {
        redirect: {
          destination: '/auth',
          permanent: false
        }
      }
    }
    return {
      props : {
        user: session.data?.user
      }
    }
  } catch (error) {
    console.log(`Error ${error}`)
  }
}

// async function getServerSideProps(context: NextPageContext) {
//   const session = await getSession(context);
//   if(!session){
//     return {
//       redirect: {
//         destination: '/auth',
//         permanent: false,
//       }
//     }
//   }
//   return {
//     props : {}
//   }
// }
const Home = () => {
  // const router = useRouter()
  // const { data: user, status } = useCurrentUser(); // Assuming useCurrentUser handles user state
  // const router = useRouter();

  // useEffect(() => {
  //   async function checkLoginStatus() {
  //     const loggedIn = await isLoggedIn();
  //     if (!loggedIn || !user) {
  //       router.push('/auth'); // Redirect to login page if not logged in or error fetching user
  //     }
  //   }

  //   checkLoginStatus();
  // }, [user]);
  // if (!isLoggedIn) {
  //   router.push('/auth')
  // }
  return (
    <div>
      <Sidebar>

      </Sidebar>
        {/* <AuthForm /> */}
    </div>
  )
}

export default Home;
