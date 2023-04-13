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

export type TeamType = {
  Timestamp: string;
  firstNameOne: string;
  lastNameOne: string;
  emailOne: string;
  firstNameTwo: string;
  lastNameTwo: string;
  emailTwo: string;
  firstNameThree: string;
  lastNameThree: string;
  emailThree: string;
  firstNameFour: string;
  lastNameFour: string;
  emailFour: string;
};

export type Project = {
  Timestamp: string;
  Email: string;
  googleDriveLink: string;
  presentationName: string;
  Description: string;
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

export type UserType = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  verified: string;
  status: string;
};

export type AmbassadorApplicationType = {
  firstName: string;
  lastName: string;
  email: string;
  organization: string;
  background: string;
  why: string;
  experience: string;
  linkedin: string;
  howHear: string;
  other: string;
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

export type AmbassadorRowType = {
  email: string;
  submitTime: string;
  firstName: string;
  lastName: string;
  organization: string;
  background: string;
  experience: string;
  why: string;
  linkedin: string;
  howHear: string;
  other: string;
};
