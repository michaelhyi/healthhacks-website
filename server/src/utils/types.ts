import { Field, ObjectType } from "type-graphql";
import { User } from "../entities/User";

@ObjectType()
export class Response {
  @Field()
  success: boolean;

  @Field({ nullable: true })
  error?: string;
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

export type FormType = {
  phone: string;
  organization: string;
  city: string;
  state: string;
  inPerson: string;
  wholeEvent: string;
  background: string;
  whyUs: string;
  howHear: string;
  team: string;
  linkedIn: string;
  dietaryRestrictions: string;
  transportation: string;
  other: string;
};

export type UserType = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
};
