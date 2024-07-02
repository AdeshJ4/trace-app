import { NextResponse } from "next/server";
import schema from "../schema";

interface Props {
    params: { id: number }
}

// visit : http://localhost:3000/api/products/1
export function GET(request: NextResponse, { params: { id } }: Props) {
    return NextResponse.json({ id, name: 'Milk', price: 3.5 });
}


// visit : http://localhost:3000/api/products/1
export async function PUT(request: NextResponse, { params: { id } }: Props) {
    // update logic
    const body = await request.json();
    // validate body
    const validate = schema.safeParse(body);
    if (!validate.success) return NextResponse.json({ error: validate.error.errors }, { status: 400 });
    return NextResponse.json({ id, name: 'Milk', price: 3.5 })
}

// visit : http://localhost:3000/api/products/1
export async function DELETE(request: NextResponse, {params: {id}}: Props){
    return NextResponse.json({ id, fname: 'Adesh' }, { status: 200 })
}