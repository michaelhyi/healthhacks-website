import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { userId } = body;

  const payment = await prisma.payments.findUnique({
    where: { userId: userId },
  });

  return NextResponse.json(payment?.token);
}
