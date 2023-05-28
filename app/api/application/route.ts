import { NextResponse } from "next/server";

import prisma from "@/app/libs/prismadb";

export async function POST(req: Request) {
  const body = await req.json();
  const {
    userId,
    phone,
    organization,
    city,
    state,
    inPerson,
    wholeEvent,
    background,
    whyUs,
    howHear,
    team,
    linkedIn,
    dietaryRestrictions,
    transportation,
    other,
  } = body;

  let application = await prisma.application.findUnique({ where: { userId } });

  if (!application) {
    application = await prisma.application.create({
      data: {
        userId,
        phone,
        organization,
        city,
        state,
        inPerson,
        wholeEvent,
        background,
        whyUs,
        howHear,
        team,
        linkedIn,
        dietaryRestrictions,
        transportation,
        other,
      },
    });
  } else {
    application = await prisma.application.update({
      where: { userId },
      data: {
        phone,
        organization,
        city,
        state,
        inPerson,
        wholeEvent,
        background,
        whyUs,
        howHear,
        team,
        linkedIn,
        dietaryRestrictions,
        transportation,
        other,
      },
    });
  }

  return NextResponse.json(application);
}
