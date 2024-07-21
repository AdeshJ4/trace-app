import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

// http:localhost:3000/api/auth/token
export async function GET (request: NextRequest){
    const token = await getToken({ req: request });
    return NextResponse.json(token);
}

// output: 
// {
//     "name": "Adesh Jadhav",
//     "email": "jadhavadesh13061@gmail.com",
//     "picture": "https://lh3.googleusercontent.com/a/ACg8ocJiYz3rh_eaPcH8QYb1Olv1SAHLeFvip06INsnoLANabHPnspQr=s96-c",
//     "sub": "101018900633966527239",
//     "iat": 1721572543,
//     "exp": 1724164543,
//     "jti": "60ca29ac-36df-4d8a-992b-11cc0fa1d77e"
// }