import prisma from "@/app/libs/prismadb";

interface IParams {
  userId?: string;
}

export default async function readAmbassador(params: IParams) {
  try {
    const { userId } = params;

    const application = await prisma.submittedApplications.findUnique({
      where: { userId },
    });

    if (application?.ambassador === "Yes") return true;
    return false;
  } catch (error: any) {
    throw new Error(error);
  }
}
