import { NextPageContext } from "next";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { getSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

export async function getServerSideProps(context: any) {
//   const session = getSession(context);
const { data: session } = useSession(context)
  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}
const profile = () => {
    const router = useRouter()
  return <div>
    PROFILES FROM ME
  </div>;
};

export default profile;
