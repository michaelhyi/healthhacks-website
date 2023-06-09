import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
import { rsvpConfirmationHTML } from "../../data/emails";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const body = await req.json();
  const {
    userId,
    inPerson,
    firstTrack,
    secondTrack,
    liabilitySignature,
    liabilityDate,
    other,
    paid,
    token,
  } = body;

  await prisma.payments.update({
    where: {
      token,
    },
    data: {
      paid: true,
    },
  });

  //submit confirmation

  const confirmation = await prisma.confirmation.update({
    where: { userId },
    data: {
      inPerson,
      firstTrack,
      secondTrack,
      liabilitySignature,
      liabilityDate,
      other,
      paid,
      status: "Submitted",
    },
  });

  const user = await prisma.user.findUnique({ where: { id: userId } });

  await prisma.submittedConfirmations.create({
    data: {
      userId,
      name: user?.name!,
      email: user?.email!,
      inPerson,
      firstTrack,
      secondTrack,
      liabilitySignature,
      liabilityDate,
      other,
      paid,
    },
  });

  if (user) {
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
      text: "Thank you for your RSVP to health{hacks}! Please look out for any emails as the event approaches, and be sure to keep up with our social media!",
      html: rsvpConfirmationHTML,
      subject: "health{hacks} 2023 RSVP Confirmation",
    });
  }

  return NextResponse.json(confirmation);
}
