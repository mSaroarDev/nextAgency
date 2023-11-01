import prisma from "@/lib/db";
import { SetCookie } from "@/utils/SetCookie";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const formData = await req.json();

    const isUser = await prisma.user.findUnique({
      where: {
        email: formData.email,
      },
    });

    if (!isUser) {
      // console.log("no user");
      return NextResponse.json(
        { msg: "failed", data: "no user found" },
        { status: 401 }
      );
    } else if (isUser && isUser.password !== formData.password) {
      return NextResponse.json(
        { msg: "failed", data: "invalid credentials" },
        { status: 401 }
      );
    } else if (isUser && isUser.password === formData.password) {
      // console.log(isUser);
      const cookie = await SetCookie(isUser.id, isUser.username, isUser.email);
      return NextResponse.json(
        { msg: "success", data: "login success" },
        { status: 200, headers: cookie }
      );
    }
    return NextResponse.json({ msg: "success", data: isUser });
  } catch (error) {
    return NextResponse.json(
      { msg: "failed", data: "login faiiled" },
      { status: 500 }
    );
  }
}
