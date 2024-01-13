import { NextResponse } from "next/server";
import bcrypt from 'bcrypt'
import prismadb from '@/lib/prismadb'
export async function POST(request: Request) {
    try {
        if (request.method !== 'POST') {
            return NextResponse.json({message: 'request not allowed'}, {status: 405})
        }
        const body = await request.json()
        const { username, password, email } = body;
        return NextResponse.json(data = {
            username: username,
            password: password,
            email: email
        })
    //     const existingUser = await prismadb.user.findUnique({
    //         where: {
    //             email
    //         }
    //     })
    //     if (existingUser) {
    //         return NextResponse.json({message: 'User already exits'},{status: 422})
    //     }
        
    //    else{ 
    //     const hashedPassword = await bcrypt.hash(password, 12)

    //     const user = await prismadb.user.create({
    //         data: {
    //             username: username,
    //             email: email,
    //             password: hashedPassword
    //         }
    //     })
    //     return NextResponse.json({ 
    //         id: user.id, 
    //         username: user.username, 
    //         email: user.email 
    //       }, {status: 201})
    // }
    } catch (error) {
        console.log(error)
        return NextResponse.json(error)
    }
}