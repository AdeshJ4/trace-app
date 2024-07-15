import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

/* 
although we don't use request parameter at this point, if you remove it then next js will cache the response and next time when
you make the req you will get cache result. so write request.
*/

// Get All Users
// visit : http://localhost:3000/api/users
export async function GET(request: NextRequest) {
    const users = await prisma.user.findMany();
    return NextResponse.json(users);
}


// visit : http://localhost:3000/api/users
export async function POST(request: NextRequest) {
    const body = await request.json();
    // validate request
    if (!body.name) return NextResponse.json({ error: 'Name is required' }, { status: 400 });
    if (!body.age) return NextResponse.json({ error: 'Age is required' }, { status: 400 });
    if (!body.email) return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    return NextResponse.json({ ...body }, { status: 201 });
}