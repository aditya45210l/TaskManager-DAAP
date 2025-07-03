import { NextRequest, NextResponse } from "next/server";

export const middleware = (req:NextRequest) =>{
    console.log("Middleware is running");
    const session = req.cookies.get("session")?.value;
    if(!session){
        return NextResponse.redirect(new URL("/", req.url));
    }
    return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*","/tasks/:path*"],
};
