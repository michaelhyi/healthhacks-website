import { Application, Confirmation, User } from "@prisma/client";

export type UserType = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerified"
> & {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
};

export type ApplicationType = Omit<
  Application,
  "createdAt" | "updatedAt" | "emailVerified"
> & {
  createdAt: string;
  updatedAt: string;
};

export type ConfirmationType = Omit<Confirmation, "createdAt" | "updatedAt"> & {
  createdAt: string;
  updatedAt: string;
};
