import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prisma from "@/app/libs/prismadb";

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, password } = body;

  let emailExists = await prisma.user.findUnique({ where: { email } });

  if (emailExists)
    return NextResponse.json(
      { error: "Email already in use." },
      { status: 500 }
    );

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      verified: false,
    },
  });

  return NextResponse.json(user);
}
