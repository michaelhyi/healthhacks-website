import { User } from "@prisma/client";

export type UserType = Omit<User, "createdAt" | "updatedAt"> & {
  createdAt: string;
  updatedAt: string;
};

export type FormType = {
  phone: string;
  organization: string;
  city: string;
  state: string;
  inPerson: string;
  wholeEvent: string;
  background: string[];
  whyUs: string[];
  howHear: string;
  team: string;
  linkedIn: string;
  dietaryRestrictions: string;
  transportation: string;
  other: string;
};

export type ConfirmType = {
  inPerson: string;
  tracks1: string;
  tracks2: string;
  liability: string;
  liabilityDate: string;
  other: string;
  paid: string;
};

export type RowType = {
  Timestamp: string;
  FirstName: string;
  LastName: string;
  Email: string;
  Phone: string;
  Organization: string;
  City: string;
  State: string;
  InPerson: string;
  WholeEvent: string;
  Background: string;
  WhyUs: string;
  HowHear: string;
  Team: string;
  LinkedIn: string;
  DietaryRestrictions: string;
  Transportation: string;
  Other: string;
};
