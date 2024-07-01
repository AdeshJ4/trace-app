import { NextRequest, NextResponse } from "next/server";

interface Props {
    params: { id: number };
}

// visit : http://localhost:3000/api/users/1
export function GET(request: NextRequest, { params: { id } }: Props) {
    if (id > 10) {
        return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }
    
    return NextResponse.json({ id: 101, fname: 'Adesh' })
}


// visit : http://localhost:3000/api/users/1
// put -> replacing whole object
// patch -> replacing some properties
export async function PUT(request: NextRequest, { params: { id } }: { params: { id: number } }) {
    const body = await request.json();
    if (!body.name) return NextResponse.json({ error: "Name is required" }, { status: 400 });
    return NextResponse.json({id: 101, fname: body.name});
}