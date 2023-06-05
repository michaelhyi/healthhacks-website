import prisma from "@/app/libs/prismadb";
import sgMail from "@sendgrid/mail";
import * as EmailValidator from "email-validator";
import { NextResponse } from "next/server";
import { v4 } from "uuid";
import { forgotPaswordHTML } from "../../data/emails";

export async function POST(req: Request) {
  const body = await req.json();
  const { email } = body;

  const user = await prisma.user.findUnique({ where: { email } });

  if (!EmailValidator.validate(email) || !user) {
    return NextResponse.json({ error: "Invalid email." }, { status: 500 });
  }

  if (!user.password)
    return NextResponse.json(
      { error: "Your account is signed in using Google." },
      { status: 500 }
    );

  const token = v4();
  await prisma.user.update({
    where: { email },
    data: {
      forgotPasswordToken: token,
      forgotPasswordExpiration: (
        new Date().getTime() +
        1000 * 60 * 60 * 2
      ).toString(),
    },
  });

  sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY!);
  const msg = {
    to: email,
    from: process.env.NEXT_PUBLIC_SENDGRID_EMAIL!,
    subject: "health{hacks} 2023 Password Change",
    html: forgotPaswordHTML(token),
  };

  sgMail.send(msg);

  return NextResponse.json({ status: 200 });
}
