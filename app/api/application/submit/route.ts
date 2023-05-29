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

  let valid = true;

  Object.keys(body).forEach((key: string) => {
    if (key !== "other" && body[key as keyof typeof body].length === 0) {
      valid = false;
      return;
    }
  });

  if (!valid) return NextResponse.error();

  const application = await prisma.application.update({
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
      status: "Submitted",
    },
  });

  return NextResponse.json(application);
}
