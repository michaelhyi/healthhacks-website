import prisma from "@/app/libs/prismadb";
import sgMail from "@sendgrid/mail";
import { NextResponse } from "next/server";
import { rsvpConfirmationHTML } from "../../data/emails";

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

  await prisma.submittedConfirmations.create({
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

  const user = await prisma.user.findUnique({ where: { id: userId } });

  if (user) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

    const msg = {
      to: user.email!,
      from: process.env.SENDGRID_EMAIL!,
      subject: "health{hacks} 2023 RSVP Confirmation",
      html: rsvpConfirmationHTML,
    };

    sgMail.send(msg).catch((error: any) => {
      console.error(error);
    });
  }

  return NextResponse.json(confirmation);
}
