import { NextRequest, NextResponse } from "next/server";


/* 
although we don't use request parameter at this point, if you remove it then next js will cache the response and next time when
you make the req you will get cache result. so write request.
*/

// visit : http://localhost:3000/api/users
export function GET(request: NextRequest) {
    return NextResponse.json([
        { id: 101, name: 'Adesh' },
        { id: 102, name: 'Akshay' },
    ])
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