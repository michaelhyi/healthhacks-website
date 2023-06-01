import { NextResponse } from "next/server";

import prisma from "@/app/libs/prismadb";

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

  return NextResponse.json(confirmation);
}
