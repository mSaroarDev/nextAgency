import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    cookies().delete("token");
    return NextResponse.json({ msg: "logout success" });
  } catch (error) {
    return NextResponse.json({ msg: "logout failed" });
  }
}
