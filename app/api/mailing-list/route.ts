import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
import * as EmailValidator from "email-validator";

export async function POST(req: Request) {
  const body = await req.json();
  const { email } = body;

  if (!EmailValidator.validate(email))
    return NextResponse.json({ error: "Invalid email." }, { status: 500 });

  const exists = await prisma.mailingList.findUnique({ where: { email } });

  if (exists)
    return NextResponse.json(
      { error: "You have already added your email to the mailing list." },
      { status: 500 }
    );

  await prisma.mailingList.create({ data: { email } });
  return NextResponse.json({ status: 200 });
}
