import { NextResponse } from "next/server";
import { VerifyToken } from "./JWTHelper";

export async function CheckCookieAuth(req) {
  try {
    let token = req.cookies.get("token");
    let payload = await VerifyToken(token["value"]);
    const requestHeaders = new Headers(req.headers);
    requestHeaders.set("id", payload["id"]);
    requestHeaders.set("email", payload["email"]);
    requestHeaders.set("username", payload["username"]);
    return NextResponse.next({
      request: { headers: requestHeaders },
    });
  } catch (e) {
    return NextResponse.redirect(new URL("/pages/login", req.url));
  }
}
