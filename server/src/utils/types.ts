import { Field, InputType, ObjectType } from "type-graphql";
import { User } from "../entities/User";

@ObjectType()
export class Response {
  @Field()
  success: boolean;

  @Field({ nullable: true })
  error?: string;

  @Field({ nullable: true })
  email?: string;

  @Field(() => User, { nullable: true })
  user?: User;
}

@ObjectType()
export class Error {
  @Field()
  field: string;

  @Field()
  message: string;
}

@ObjectType()
export class UserResponse {
  @Field(() => User, { nullable: true })
  user?: User;

  @Field(() => Error, { nullable: true })
  error?: Error;
}

@InputType()
export class Form {
  @Field()
  phone: string;

  @Field()
  organization: string;

  @Field()
  city: string;

  @Field()
  state: string;

  @Field()
  inPerson: string;

  @Field()
  wholeEvent: string;

  @Field(() => [String])
  background: string[];

  @Field(() => [String])
  whyUs: string[];

  @Field()
  howHear: string;

  @Field()
  team: string;

  @Field()
  linkedIn: string;

  @Field()
  dietaryRestrictions: string;

  @Field()
  transportation: string;

  @Field()
  other: string;
}

@InputType()
export class CForm {
  @Field()
  inPerson: string;

  @Field()
  tracks1: string;

  @Field()
  tracks2: string;

  @Field()
  liability: string;

  @Field()
  liabilityDate: string;

  @Field()
  other: string;

  @Field()
  paid: string;
}

export type UserType = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  status: string;
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

export type CRowType = {
  Timestamp: string;
  FirstName: string;
  LastName: string;
  Email: string;
  InPerson: string,
  Tracks1: string,
  Tracks2: string,
  Liability: string,
  LiabilityDate: string,
  Other: string,
  Paid: string,
};
