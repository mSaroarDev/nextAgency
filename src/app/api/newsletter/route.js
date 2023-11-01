import { NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function POST(req) {
  const formData = await req.json();
  try {
    if (formData.email === "") {
      return NextResponse.json({ msg: "failed" }, { status: 406 });
    } else {
      const email = await prisma.newletter.create({
        data: {
          email: formData.email,
        },
      });

      return NextResponse.json(
        { msg: "success", data: email },
        { status: 200 }
      );
    }
  } catch (error) {
    return NextResponse.json({ msg: "failed", data: "send failed" });
  }
}
