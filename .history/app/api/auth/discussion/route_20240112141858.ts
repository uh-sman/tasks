import { NextResponse } from "next/server";
import prismadb from '@/lib/prismadb'
export async function POST(request: Request) {
    if(request.method !== 'POST') return NextResponse.json({message: 'invalid method'} , { status: 405 })
    
    const body = await request.json()
    const { title, description, reply } = body
    return ({
        title,
        description,
        reply
    })
}