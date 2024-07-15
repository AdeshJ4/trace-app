import { NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";

interface Props {
    params: { id: string }
}

// Single Product
// visit : http://localhost:3000/api/products/1
export async function GET(request: NextResponse, { params: { id } }: Props) {
    const product = await prisma.product.findUnique({
        where: {
            id: Number(id)
        }
    })

    if(!product) return NextResponse.json({error: "Product Not Found"}, {status: 404});

    return NextResponse.json(product, {status: 200});
}

// Update Product
// visit : http://localhost:3000/api/products/1
export async function PUT(request: NextResponse, { params: { id } }: Props) {
    const body = await request.json();

    const product  = await prisma.product.findUnique({
        where: {id: Number(id)}
    })
    
    if(!product) return NextResponse.json({error: "Product Not Found"}, {status: 404});

    const validate = schema.safeParse(body);
    if (!validate.success) return NextResponse.json({ error: validate.error.errors }, { status: 400 });
    
    const updatedProduct = await prisma.product.update({
        where: { id: product.id},
        data: {
            name: body.name,
            price: body.price
        }
    })

    return NextResponse.json(updatedProduct, {status: 200});
}


// Delete Product
// visit : http://localhost:3000/api/products/1
export async function DELETE(request: NextResponse, {params: {id}}: Props){
    const product = await prisma.product.findUnique({
        where: {
            id: Number(id)
        }
    })

    if(!product) return NextResponse.json({error: "Product Does not found"}, {status: 200});
    const deletedProduct = await prisma.product.delete({
        where: {
            id: Number(id)
        }
    })

    return NextResponse.json( deletedProduct, { status: 200 })
}