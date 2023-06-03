import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

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

  // if (user) {
  //   sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

  //   const msg = {
  //     to: user.email!,
  //     from: process.env.SENDGRID_EMAIL!,
  //     subject: "health{hacks} 2023 Application Confirmation",
  //     html: applicationConfirmationHTML,
  //   };

  //   sgMail.send(msg).catch((error: any) => {
  //     console.error(error);
  //   });
  // }

  return NextResponse.json(confirmation);
}
