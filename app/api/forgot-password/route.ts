import prisma from "@/app/libs/prismadb";
import * as EmailValidator from "email-validator";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
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

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL,
    to: user.email!,
    text: "Forget your password? Update it here:",
    html: forgotPaswordHTML(token),
    subject: "health{hacks} 2023 Password Change",
  });

  return NextResponse.json({ status: 200 });
}
