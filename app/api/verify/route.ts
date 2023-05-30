import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { token } = body;

  const user = await prisma.user.findFirst({ where: { verifyToken: token } });
  const date = new Date().getTime();
  const expiration = parseInt(user?.verifyExpiration!);

  if (!user) {
    return NextResponse.json({ error: "Invalid token." }, { status: 500 });
  }

  if (!user!.verified) {
    if (date > expiration) {
      return NextResponse.json({ error: "Token expired." }, { status: 500 });
    } else {
      const response = await prisma.user.update({
        where: { id: user.id },
        data: { verified: true },
      });

      return NextResponse.json(response);
    }
  }

  return NextResponse.json(
    { error: "User already verified." },
    { status: 500 }
  );
}
