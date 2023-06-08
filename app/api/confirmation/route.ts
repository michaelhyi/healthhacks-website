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
  } = body;

  const confirmation = await prisma.confirmation.update({
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

  return NextResponse.json(confirmation);
}
