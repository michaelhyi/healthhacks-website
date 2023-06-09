import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { v4 } from "uuid";
import { applicationConfirmationHTML } from "../../../data/emails";

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
    other,
    ambassador,
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
        other,
        ambassador,
        status: "Submitted",
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
        other,
        ambassador,
        status: "Submitted",
      },
    });
  }

  const user = await prisma.user.findUnique({ where: { id: userId } });

  await prisma.submittedApplications.create({
    data: {
      userId,
      email: user?.email!,
      name: user?.name!,
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
      other,
      ambassador,
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
      text: "Thank you for applying to health{hacks}! We will get back to your shortly regarding the status of your application.",
      html: applicationConfirmationHTML,
      subject: "health{hacks} 2023 Application Confirmation",
    });
  }

  await prisma.payments.create({
    data: {
      userId,
      token: v4(),
    },
  });

  return NextResponse.json(application);
}
