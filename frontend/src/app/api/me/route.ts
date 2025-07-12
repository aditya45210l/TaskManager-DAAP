import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

export const GET = async (req: NextRequest) => {
  try {
    const session = req.cookies.get("session")?.value;
    if (!session) {
      return NextResponse.json({
        status: 401,
        ok: false,
        message: "session not found!",
      });
    }
    const { payload } = await jwtVerify(
      session,
      new TextEncoder().encode(process.env.JWT_SECRET)
    );

    return NextResponse.json({ payload, status: 200, ok: true, error: false });
  } catch (e) {
    console.log(e);
    return NextResponse.json({
      status: 500,
      ok: false,
      error: true,
      messge: e,
    });
  }
};
