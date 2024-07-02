import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

interface Props {
    params: { id: number };
}

// visit : http://localhost:3000/api/users/1
export function GET(request: NextRequest, { params: { id } }: Props) {
    if (id > 10) {
        return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }
    
    return NextResponse.json({ id: 101, fname: 'Adesh' }, { status: 200 })
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