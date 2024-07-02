import { NextResponse } from "next/server";
import schema from "./schema";

export function GET (request: NextResponse){
    return NextResponse.json([
        {id: 1, name: 'Milk', price: 1.2},
        {id: 2, name: 'grocery', price: 2.2},
        {id: 3, name: 'fruits', price: 3.2},
    ])
}


export function POST(request: NextResponse){
    const body = request.json();
    const validation = schema.safeParse(body);
    if(!validation.success) return NextResponse.json({error: validation.error.errors}, {status: 400})
        return NextResponse.json({...body}, {status: 201})
}