import prisma from "@/app/libs/prismadb";

export default async function readTokenValidity({ token }: { token?: string }) {
  const user = await prisma.user.findFirst({
    where: { forgotPasswordToken: token },
  });

  const date = new Date().getTime();
  const expiration = parseInt(user?.forgotPasswordExpiration!);

  if (!user) {
    return {
      success: false,
      error: "Invalid token.",
    };
  }

  if (date > expiration) {
    return {
      success: false,
      error: "Token expired.",
    };
  }

  return {
    success: true,
    email: user.email,
  };
}
