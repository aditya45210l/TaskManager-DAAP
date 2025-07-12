import { NextResponse } from "next/server";
import { generateNonce } from "siwe";

export const GET = async () => {
  const nonce = generateNonce();
  console.log("nonce was generated!");
  return new NextResponse(nonce, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
};
