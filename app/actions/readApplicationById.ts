import prisma from "@/app/libs/prismadb";

interface IParams {
  userId?: string;
}

export default async function readApplicationById(params: IParams) {
  try {
    const { userId } = params;

    const application = await prisma.application.findUnique({
      where: {
        userId,
      },
    });

    if (!application) {
      return null;
    }

    return {
      ...application,
      createdAt: application.createdAt.toISOString(),
      updatedAt: application.updatedAt.toISOString(),
    };
  } catch (error: any) {
    throw new Error(error);
  }
}
