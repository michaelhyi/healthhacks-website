import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { rsvpConfirmationHTML } from "../../../data/emails";

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
  } = body;

  let valid = true;

  Object.keys(body).forEach((key: string) => {
    if (key !== "other" && body[key as keyof typeof body].length == 0) {
      valid = false;
      return;
    }
  });

  if (!valid)
    return NextResponse.json(
      { error: "All required fields must be complete." },
      { status: 500 }
    );

  let confirmation = await prisma.confirmation.findUnique({
    where: { userId },
  });

  if (!confirmation) {
    confirmation = await prisma.confirmation.create({
      data: {
        userId,
        inPerson,
        firstTrack,
        secondTrack,
        liabilitySignature,
        liabilityDate,
        other,
        paid,
      },
    });
  } else {
    confirmation = await prisma.confirmation.update({
      where: { userId },
      data: {
        userId,
        inPerson,
        firstTrack,
        secondTrack,
        liabilitySignature,
        liabilityDate,
        other,
        paid,
      },
    });
  }

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
