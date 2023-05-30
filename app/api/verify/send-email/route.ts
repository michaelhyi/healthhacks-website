import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import { v4 } from "uuid";
import sgMail from "@sendgrid/mail";
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

  sgMail.setApiKey(process.env.SENDGRID_API_KEY!);
  const msg = {
    to: email,
    from: process.env.SENDGRID_EMAIL!,
    subject: "health{hacks} 2023 Email Verification",
    html: verifyHTML(token),
  };

  sgMail.send(msg);

  return NextResponse.json({ status: 300 });
}
