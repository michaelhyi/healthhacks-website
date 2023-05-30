import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  const body = await req.json();
  const { email, password } = body;

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user)
    return NextResponse.json(
      { error: "User does not exist." },
      { status: 500 }
    );

  const isCorrectPassword = await bcrypt.compare(password, user.password!);

  if (!isCorrectPassword)
    return NextResponse.json(
      { error: "Password is incorrect." },
      { status: 500 }
    );

  return NextResponse.json(user);
}
