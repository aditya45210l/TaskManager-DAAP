import {  NextRequest, NextResponse } from "next/server";

export const GET = async (req:NextRequest) => {

  const cookies = req.cookies.get("session")?.value;
  if(!cookies){
    return NextResponse.json({
      status: 401,
      message: "session not found!",
      ok: false,
    });
  }
  const res = NextResponse.json({
    status: 201,
    message: "session was deleted!",
    ok: true,
  });
  res.cookies.delete("session");
  console.log("session was deleted!");
  return res;
   
};
