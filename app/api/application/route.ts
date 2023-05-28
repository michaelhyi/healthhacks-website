import { NextResponse } from "next/server";

import prisma from "@/app/libs/prismadb";

export async function POST(req: Request) {
  const body = await req.json();
  const { userId, form } = body;

  const data = {
    phone: form.phone,
    organization: form.organization,
    city: form.city,
    state: form.state,
    inPerson: form.inPerson,
    wholeEvent: form.wholeEvent,
    background: form.background,
    whyUs: form.whyUs,
    howHear: form.howHear,
    team: form.team,
    linkedIn: form.linkedIn,
    dietaryRestrictions: form.dietaryRestrictions,
    transportation: form.transportation,
    other: form.other,
  };

  let application = await prisma.application.findUnique({ where: { userId } });

  if (!application) {
    application = await prisma.application.create({
      data: {
        userId,
        ...form,
      },
    });
  } else {
    application = await prisma.application.update({
      where: { userId },
      data,
    });
  }

  return NextResponse.json(application);
}
