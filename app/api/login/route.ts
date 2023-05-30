import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";

export async function POST(req: Request) {
  const body = await req.json();
  const { email } = body;

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) return NextResponse.error();

  return NextResponse.json(user);
}
