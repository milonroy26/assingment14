import { TokenCookie } from "@/app/utility/TokenCookie";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req, res){
    const jsonBody = await req.json();
    const cookieStore = cookies();
    const email = cookieStore.get("email");
    let VerifyCode = jsonBody["password"];

    if(VerifyCode === "1234"){
        let Cookie = await TokenCookie(email)
        return NextResponse.json(
            { status: true, message: "Request Succes" },
            { status: 200, headers: Cookie }
        );
    }
    else{
        return NextResponse.json({status: true, message: "Fail Request"})
    }
}

export async function GET(req, res){
    cookies().delete("token");
    return NextResponse.json({status: true, message: "Logout complete" })
}