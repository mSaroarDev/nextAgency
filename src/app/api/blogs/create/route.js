import { NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function POST(req) {
  const formData = await req.json();

  const { title, short_des, description, featured_image } = formData;

  try {
    if (!title || !short_des || !description || !featured_image) {
      return NextResponse.json({ msg: "failed" }, { status: 406 });
    } else {
      const data = await prisma.blog.create({
        data: {
          title: title,
          short_des: short_des,
          description: description,
          featured_image: featured_image,
        },
      });

      return NextResponse.json({ msg: "success", data: data }, { status: 200 });
    }
  } catch (err) {
    return NextResponse.json({ msg: "failed", data: err }, { status: 500 });
  }
}
