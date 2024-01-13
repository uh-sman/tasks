import { getServerSession } from "next-auth/next";
import { authOptions } from "./auth/[...nextauth]";
import { NextApiRequest, NextApiResponse } from "next";
import { useRouter } from "next/navigation";

export default async (req:NextApiRequest, res:NextApiResponse) => {
    const session = await getServerSession(req)

    if(!session) {
        
    }
}