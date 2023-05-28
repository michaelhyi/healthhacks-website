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
      include: {
        user: true,
      },
    });

    if (!application) {
      return null;
    }

    return {
      ...application,
      createdAt: application.createdAt.toISOString(),
      user: {
        ...application.user,
        createdAt: application.user.createdAt.toISOString(),
        updatedAt: application.user.updatedAt.toISOString(),
        emailVerified: application.user.emailVerified?.toString() || null,
      },
    };
  } catch (error: any) {
    throw new Error(error);
  }
}
