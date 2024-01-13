import { NextPageContext } from "next";
import { getServerSession } from "next-auth";
import { getSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

export async function getServerSideProps(context: NextPageContext) {
  const session = getSession(context);
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
