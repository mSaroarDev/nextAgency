import { NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function DELETE(req) {
  const formData = await req.json();

  try {
    const data = await prisma.service.delete({
      where: {
        id: formData.id,
      },
    });

    return NextResponse.json({ msg: "success", data: data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ msg: "failed" }, { status: 500 });
  }
}
