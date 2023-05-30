import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  const body = await req.json();
  const { token, password } = body;

  const user = await prisma.user.findFirst({
    where: { forgotPasswordToken: token },
  });
  const hashedPassword = await bcrypt.hash(password, 12);

  if (!user) return NextResponse.error();

  await prisma.user.update({
    where: { id: user.id },
    data: {
      password: hashedPassword,
    },
  });

  return NextResponse.json({ status: 200 });
}
