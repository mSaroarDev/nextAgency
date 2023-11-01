import { NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function POST(req) {
  const formData = await req.json();

  try {
    if (!formData.title || !formData.text) {
      return NextResponse.json({ msg: "failed" }, { status: 406 });
    } else {
      const data = await prisma.service.create({
        data: {
          title: formData.title,
          text: formData.text,
          created_by: parseInt(formData.created_by),
        },
      });

      return NextResponse.json({ msg: "success", data: data }, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json({ msg: "failed" }, { status: 500 });
  }
}
