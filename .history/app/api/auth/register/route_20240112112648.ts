import { NextResponse } from "next/server";
import bcrypt from 'bcrypt'
import prismadb from '@/lib/prismadb'
export async function POST(request: Request) {
    const body = await request.json()

    try {
        const { username, password, email } = body;
        const existingUser = await prismadb.user.findUnique({
            where: {
                email
            }
        })
        if (existingUser) {
            return NextResponse.json({message: 'User already exits'},{status: 422})
        }
        
        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await prismadb.user.create({
            data: {
                username,
                email,
                password
            }
        })
        return NextResponse.json(user, {status: 201})
    } catch (error) {
        console.log(error)
        return NextResponse.json(error)
    }
}