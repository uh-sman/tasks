'use client'
import { useEffect } from 'react';
import Sidebar from "@/components/Sidebar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router"; // Change from "next/navigation" to "next/router"
// import LoadingSpinner from "@/components/LoadingSpinner"; // You might want to display a loading spinner while checking the session

const Home = () => {
 const router = useRouter();
 const { data: session, status } = useSession(); // Use useSession hook from next-auth/react

 useEffect(() => {
    // if (status === "loading") {
    //   return <LoadingSpinner />; // Display a loading spinner while checking the session
    // }

    if (!session) {
      router.push('/auth');
    }
 }, [session, status, router]);

//  if (status === "loading") {
//     return <LoadingSpinner />;
//  }

 if (!session) {
    return null; // Or any other logic for when the session is not available
 }

 return (
    <div>
      <Sidebar>
        {/* Content when the session is valid */}
      </Sidebar>
    </div>
 )
}

export default Home;








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