import { NextRequest, NextResponse } from "next/server";

interface Props {
    params: { id: number }
}
export function GET(request: NextRequest, { params: { id } }: Props) {
    return NextResponse.json({ id: 101, fname: "MOsh Hamedani" })
}