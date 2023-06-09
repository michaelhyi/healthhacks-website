import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { v4 } from "uuid";
import { verifyHTML } from "../../../data/emails";

export async function POST(req: Request) {
  const body = await req.json();
  const { id, email } = body;

  const token = v4();

  await prisma.user.update({
    where: { id },
    data: {
      verifyToken: token,
      verifyExpiration: (new Date().getTime() + 1000 * 60 * 60 * 2).toString(),
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
    to: email,
    text: "In order to start your health{hacks} application, you must verify your email.",
    html: verifyHTML(token),
    subject: "health{hacks} 2023 Email Verification",
  });

  return NextResponse.json({ status: 200 });
}
