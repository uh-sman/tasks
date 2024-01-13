import { NextRequest, NextResponse } from "next/server";

export default async function GET(request: Request) {
    if (request.method !== 'GET') {
        return NextResponse.json({message: 'invalid method'}, {status: 405})
    }
    
    return NextResponse.json({ message: 'Hello from the discussion api'})
}