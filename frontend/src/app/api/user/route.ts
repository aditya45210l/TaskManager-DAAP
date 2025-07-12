import axios from "axios";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    console.log("i am user api!");
    const session = (await headers()).get("session") as string;
    console.log("session from user api : ", session);
    const { data } = await axios("http://localhost:5000/api/v1/user/", {
      headers: {
        // cookies: session,
      },
    });
    console.log("Response:", await data);

    return NextResponse.json({ status: 200, data: data });
  } catch (e) {
    console.log(e);
  }
};
