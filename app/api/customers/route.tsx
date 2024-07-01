import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
    return NextResponse.json([
        { id: 101, name: 'Adesh' },
        { id: 102, name: 'Akshay' },
    ])
}