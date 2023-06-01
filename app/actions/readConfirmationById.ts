import prisma from "@/app/libs/prismadb";

interface IParams {
  userId?: string;
}

export default async function readConfirmationById(params: IParams) {
  try {
    const { userId } = params;

    const confirmation = await prisma.confirmation.findUnique({
      where: {
        userId,
      },
    });

    if (!confirmation) {
      return null;
    }

    return {
      ...confirmation,
      updatedAt: confirmation.updatedAt.toISOString(),
      createdAt: confirmation.createdAt.toISOString(),
    };
  } catch (error: any) {
    throw new Error(error);
  }
}
