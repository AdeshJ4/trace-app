import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";

interface Props {
    params: { id: string };
}

// get Single User
// visit : http://localhost:3000/api/users/1
export async function GET(request: NextRequest, { params }: Props) {
    const user = await prisma.user.findUnique({
        where: { id: Number(params.id) }
    })

    if (!user) {
        return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }
    return NextResponse.json(user)
}


// visit : http://localhost:3000/api/users/1
// put -> replacing whole object
// patch -> replacing some properties
export async function PUT(request: NextRequest, { params: { id } }: { params: { id: number } }) {
    const body = await request.json();
    const validation = schema.safeParse(body);
    if (!validation.success) return NextResponse.json({ error: validation.error.errors }, { status: 400 });
        return NextResponse.json({ id: 101, fname: body.name }, { status: 200 });
    }



// visit : http://localhost:3000/api/users/1
export async function DELETE(request: NextRequest, { params: { id } }: { params: { id: number } }) {
    return NextResponse.json({ id: 101, fname: 'Adesh' }, { status: 200 })
}