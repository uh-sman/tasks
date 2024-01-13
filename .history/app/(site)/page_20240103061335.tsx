// Import necessary modules
'use client'
import { useEffect } from 'react';
import Sidebar from "@/components/Sidebar";
import { useSession, SessionProvider } from "next-auth/react"; // Include SessionProvider
import { useRouter } from "next/navigation";
import { NextPageContext } from 'next';
// import LoadingSpinner from "@/components/LoadingSpinner";

const Home = () => {
  const router = useRouter();
  const { data: session, status } = useSession(); // Use useSession hook from next-auth/react

  useEffect(() => {
    // if (status === "loading") {
    //   return <p>loading</p>
    // }

    if (!session) {
      router.push('/auth');
    }
  }, [session, status, router]);

  if (status === "loading") {
    return <p>loading</p>;
  }

  if (!session) {
    return null; // Or any other logic for when the session is not available
  }

  return (
    <div>
      <Sidebar />
    </div>
  );
};

const HomeWithProvider = () => (
  <SessionProvider>
    <Home />
  </SessionProvider>
);

export default HomeWithProvider;







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