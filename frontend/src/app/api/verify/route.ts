import { SignJWT } from "jose";
import { NextRequest, NextResponse } from "next/server";
import { SiweMessage } from "siwe";

export const POST = async (req: NextRequest) => {
   const { message, signature } = await req.json();
  try {
      const singMessage = new SiweMessage(message);
      const result = await singMessage.verify({ signature });

      if (result.success) {
        const wrapJwt = await new SignJWT({ address: result.data.address })
          .setExpirationTime("12h")
          .setProtectedHeader({ alg: "HS256" })
          .sign(new TextEncoder().encode(process.env.JWT_SECRET));

        const response = NextResponse.json({
          status: 200,
          ok: true,
          message: "success",
        });
        response.cookies.set("session", wrapJwt, {
          httpOnly: true,
          secure: false,
          sameSite: "lax",
          maxAge: 60 * 60 * 12,
          path: "/",
          expires: new Date(Date.now() + 60 * 60 * 12),

        });

        return response;
      }

  } catch (e) {
    console.log(e);
    return new NextResponse("getting error!", { status: 500 });
  }
};
