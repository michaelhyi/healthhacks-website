import prisma from "@/app/libs/prismadb";

interface IParams {
  userId?: string;
}

export default async function readApplicationStatusById(params: IParams) {
  try {
    const { userId } = params;

    const application = await prisma.submittedApplications.findUnique({
      where: {
        userId,
      },
    });

    if (!application) {
      return false;
    }

    return application.whitelisted;
  } catch (error: any) {
    throw new Error(error);
  }
}
