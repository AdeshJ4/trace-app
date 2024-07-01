import { NextRequest, NextResponse } from "next/server";


/* 
although we don't use request parameter at this point, if you remove it then next js will cache the response and next time when
you make the req you will get cache result. so write request.
*/
export function GET(request: NextRequest) {
    return NextResponse.json([
        { id: 101, name: 'Adesh' },
        { id: 102, name: 'Akshay' },
    ])
}