import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const body = await request.json()

    const { username, password } = body;
    if (!username || !password) {
        return NextResponse.json({
            message: 'unauthorized'
        }, {status: 400})
    }
    else{return NextResponse.json({
        message:'success',
    }, {status: 200})}
}