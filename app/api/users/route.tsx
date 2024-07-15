import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import schema from "./schema";

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
    const validation = schema.safeParse(body);
    if (!validation.success) {
        return NextResponse.json(validation.error.errors, { status: 400 })
    }

    const user = await prisma.user.findUnique({
      where: {
        email: body.email,
      },
    });

    if (user) return NextResponse.json({ error: "User already exists" }, { status: 400 });
    
    const newUser = await prisma.user.create({
        data: {
            name: body.name,
            email: body.email
        }
    })

    // validate request
    return NextResponse.json(newUser, { status: 201 });
}