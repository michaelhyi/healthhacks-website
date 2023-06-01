import { NextResponse } from "next/server";

import prisma from "@/app/libs/prismadb";
import { applicationConfirmationHTML } from "../../../data/emails";
import sgMail from "@sendgrid/mail";

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

  if (!valid)
    return NextResponse.json(
      { error: "All required fields must be complete." },
      { status: 500 }
    );

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

  await prisma.submittedApplications.create({
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

  const user = await prisma.user.findUnique({ where: { id: userId } });

  if (user) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

    const msg = {
      to: user.email!,
      from: process.env.SENDGRID_EMAIL!,
      subject: "health{hacks} 2023 Application Confirmation",
      html: applicationConfirmationHTML,
    };

    sgMail.send(msg).catch((error: any) => {
      console.error(error);
    });
  }

  return NextResponse.json(application);
}
