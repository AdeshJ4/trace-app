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
