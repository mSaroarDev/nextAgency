import { NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function POST(req) {
  const formData = await req.json();
  try {
    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.massage === ""
    ) {
      return NextResponse.json({ msg: "failed" }, { status: 406 });
    } else {
      const data = await prisma.contact_form.create({
        data: formData,
      });
      return NextResponse.json({ msg: "success", data: data }, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json({ msg: "failed", data: error }, { status: 500 });
  }
}
