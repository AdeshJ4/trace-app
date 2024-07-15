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
export async function PUT(request: NextRequest, { params }: Props) {
    const body = await request.json();
    const validation = schema.safeParse(body);
    if (!validation.success) return NextResponse.json({ error: validation.error.errors }, { status: 400 });

    const user = await prisma.user.findUnique({
        where: {
            id: Number(params.id)
        }
    });

    if (!user) return NextResponse.json({ error: "User does not exist." }, { status: 404 })

    const updatedUser = await prisma.user.update({
        where: { id: user.id },
        data: { name: body.email, email: body.email }
    });

    return NextResponse.json(updatedUser, { status: 200 });
}

// visit : http://localhost:3000/api/users/1
export async function DELETE(request: NextRequest, { params }: Props) {
    const user = await prisma.user.findUnique({
        where: {
            id: Number(params.id)
        }
    });
    if (!user) return NextResponse.json({ error: "User Does not exist" }, { status: 404 });

    const deletedUser = await prisma.user.delete({ where: { id: user.id } })
    return NextResponse.json(deletedUser, { status: 200 })
}