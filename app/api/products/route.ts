import { NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";


// Get All Products
// visit : http://localhost:3000/api/products
export async function GET (request: NextResponse){
    const products = await prisma.product.findMany();
    return NextResponse.json(products);
}

// Create Product
// visit : http://localhost:3000/api/products
export async function POST(request: NextResponse){
    const body = await request.json();
    const validation = schema.safeParse(body);
    if(!validation.success) return NextResponse.json({error: validation.error.errors}, {status: 400});

    const product = await prisma.product.findFirst({
      where: {
        name: body.name,
      },
    });

    if(product) return NextResponse.json({error: "Product already exists"}, {status: 400});

    const newProduct = await prisma.product.create({
        data: {
            name: body.name,
            price: body.price
        }
    })

    return NextResponse.json(newProduct, { status: 201});
}
