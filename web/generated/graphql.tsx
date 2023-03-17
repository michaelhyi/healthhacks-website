import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Application = {
  __typename?: 'Application';
  background: Scalars['String'];
  city: Scalars['String'];
  createdAt: Scalars['String'];
  dietaryRestrictions: Scalars['String'];
  howHear: Scalars['String'];
  id: Scalars['Float'];
  inPerson: Scalars['String'];
  linkedIn: Scalars['String'];
  organization: Scalars['String'];
  other: Scalars['String'];
  phone: Scalars['String'];
  state: Scalars['String'];
  status: Scalars['String'];
  team: Scalars['String'];
  transportation: Scalars['String'];
  updatedAt: Scalars['String'];
  userId: Scalars['Float'];
  wholeEvent: Scalars['String'];
  whyUs: Scalars['String'];
};

export type Confirmation = {
  __typename?: 'Application';
  id: Scalars['Float'];
  inPerson: Scalars['String'];
  tracks1: Scalars['String'];
  tracks2: Scalars['String'];
  other: Scalars['String'];
  status: Scalars['String'];
  updatedAt: Scalars['String'];
  userId: Scalars['Float'];
};

export type Error = {
  __typename?: 'Error';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  deleteApplications: Scalars['Boolean'];
  deleteUsers: Scalars['Boolean'];
  forgotPassword: Response;
  login: UserResponse;
  readApplication: Application;
  readConfirmation: Confirmation;
  register: UserResponse;
  resendVerificationEmail: Scalars['Boolean'];
  submitApplication: Scalars['Boolean'];
  updateApplication: Scalars['Boolean'];
  submitConfirmation: Scalars['Boolean'];
  updateConfirmation: Scalars['Boolean'];
  updatePassword: Scalars['Boolean'];
  verifyUser: Response;
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationReadApplicationArgs = {
  userId: Scalars['Int'];
};


export type MutationRegisterArgs = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
};


export type MutationResendVerificationEmailArgs = {
  email: Scalars['String'];
  id: Scalars['Int'];
};


export type MutationSubmitApplicationArgs = {
  background: Scalars['String'];
  city: Scalars['String'];
  dietaryRestrictions: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  howHear: Scalars['String'];
  inPerson: Scalars['String'];
  lastName: Scalars['String'];
  linkedIn: Scalars['String'];
  organization: Scalars['String'];
  other: Scalars['String'];
  phone: Scalars['String'];
  state: Scalars['String'];
  team: Scalars['String'];
  transportation: Scalars['String'];
  userId: Scalars['Int'];
  wholeEvent: Scalars['String'];
  whyUs: Scalars['String'];
};


export type MutationUpdateApplicationArgs = {
  background: Scalars['String'];
  city: Scalars['String'];
  dietaryRestrictions: Scalars['String'];
  howHear: Scalars['String'];
  inPerson: Scalars['String'];
  linkedIn: Scalars['String'];
  organization: Scalars['String'];
  other: Scalars['String'];
  phone: Scalars['String'];
  state: Scalars['String'];
  team: Scalars['String'];
  transportation: Scalars['String'];
  userId: Scalars['Int'];
  wholeEvent: Scalars['String'];
  whyUs: Scalars['String'];
};


export type MutationUpdatePasswordArgs = {
  password: Scalars['String'];
  token: Scalars['String'];
};


export type MutationVerifyUserArgs = {
  token: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  readConfirmations: Array<Application>;
  readTokenValidity: Response;
  readUser: User;
  readUsers: Array<User>;
};


export type QueryReadTokenValidityArgs = {
  token: Scalars['String'];
};


export type QueryReadUserArgs = {
  id: Scalars['Int'];
};

export type Response = {
  __typename?: 'Response';
  email?: Maybe<Scalars['String']>;
  error?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  forgotPasswordExpiration: Scalars['String'];
  forgotPasswordToken: Scalars['String'];
  id: Scalars['Float'];
  lastName: Scalars['String'];
  updatedAt: Scalars['String'];
  verified: Scalars['Boolean'];
  verifyExpiration: Scalars['String'];
  verifyToken: Scalars['String'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  error?: Maybe<Error>;
  user?: Maybe<User>;
};

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ForgotPasswordMutation = { __typename?: 'Mutation', forgotPassword: { __typename?: 'Response', success: boolean, error?: string | null } };

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'UserResponse', user?: { __typename?: 'User', id: number, firstName: string, lastName: string, email: string, verified: boolean } | null, error?: { __typename?: 'Error', field: string, message: string } | null } };

export type ReadApplicationMutationVariables = Exact<{
  userId: Scalars['Int'];
}>;


export type ReadApplicationMutation = { __typename?: 'Mutation', readApplication: { __typename?: 'Application', id: number, userId: number, status: string, phone: string, organization: string, city: string, state: string, inPerson: string, wholeEvent: string, background: string, whyUs: string, howHear: string, team: string, linkedIn: string, dietaryRestrictions: string, transportation: string, other: string } };

export type ReadConfirmationMutationVariables = Exact<{
  userId: Scalars['Int'];
}>;


export type ReadConfirmationMutation = { __typename?: 'Mutation', readConfirmation: { __typename?: 'Confirmation', id: number, userId: number, status: string, inPerson: string, tracks1: string, tracks2: string, liability: string, liabilityDate: string, other: string } };


export type RegisterMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'UserResponse', user?: { __typename?: 'User', id: number, firstName: string, lastName: string, email: string } | null, error?: { __typename?: 'Error', field: string, message: string } | null } };

export type ResendVerificationEmailMutationVariables = Exact<{
  id: Scalars['Int'];
  email: Scalars['String'];
}>;


export type ResendVerificationEmailMutation = { __typename?: 'Mutation', resendVerificationEmail: boolean };

export type SubmitApplicationMutationVariables = Exact<{
  userId: Scalars['Int'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  phone: Scalars['String'];
  organization: Scalars['String'];
  city: Scalars['String'];
  state: Scalars['String'];
  inPerson: Scalars['String'];
  wholeEvent: Scalars['String'];
  background: Scalars['String'];
  whyUs: Scalars['String'];
  howHear: Scalars['String'];
  team: Scalars['String'];
  linkedIn: Scalars['String'];
  dietaryRestrictions: Scalars['String'];
  transportation: Scalars['String'];
  other: Scalars['String'];
}>;


export type SubmitApplicationMutation = { __typename?: 'Mutation', submitApplication: boolean };

export type UpdateApplicationMutationVariables = Exact<{
  userId: Scalars['Int'];
  phone: Scalars['String'];
  organization: Scalars['String'];
  city: Scalars['String'];
  state: Scalars['String'];
  inPerson: Scalars['String'];
  wholeEvent: Scalars['String'];
  background: Scalars['String'];
  whyUs: Scalars['String'];
  howHear: Scalars['String'];
  team: Scalars['String'];
  linkedIn: Scalars['String'];
  dietaryRestrictions: Scalars['String'];
  transportation: Scalars['String'];
  other: Scalars['String'];
}>;


export type UpdateApplicationMutation = { __typename?: 'Mutation', updateApplication: boolean };

export type UpdatePasswordMutationVariables = Exact<{
  token: Scalars['String'];
  password: Scalars['String'];
}>;


export type SubmitConfirmationMutationVariables = Exact<{
  userId: Scalars['Int'];
  inPerson: Scalars['String'];
  tracks1: Scalars['String'];
  tracks2: Scalars['String'];  
  liability: Scalars['String'];
  liabilityDate: Scalars['String'];
  other: Scalars['String'];
}>;


export type SubmitConfirmationMutation = { __typename?: 'Mutation', submitApplication: boolean };


export type UpdateConfirmationMutationVariables = Exact<{
  userId: Scalars['Int'];
  inPerson: Scalars['String'];
  tracks1: Scalars['String'];
  tracks2: Scalars['String'];  
  liability: Scalars['String'];
  liabilityDate: Scalars['String'];
  other: Scalars['String'];
}>;

export type UpdateConfirmationMutation = { __typename?: 'Mutation', updateConfirmation: boolean };


export type UpdatePasswordMutation = { __typename?: 'Mutation', updatePassword: boolean };

export type VerifyUserMutationVariables = Exact<{
  token: Scalars['String'];
}>;


export type VerifyUserMutation = { __typename?: 'Mutation', verifyUser: { __typename?: 'Response', success: boolean, error?: string | null } };

export type ReadTokenValidityQueryVariables = Exact<{
  token: Scalars['String'];
}>;


export type ReadTokenValidityQuery = { __typename?: 'Query', readTokenValidity: { __typename?: 'Response', success: boolean, error?: string | null, email?: string | null } };

export type ReadUserQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type ReadUserQuery = { __typename?: 'Query', readUser: { __typename?: 'User', id: number, email: string, firstName: string, lastName: string, verified: boolean, verifyToken: string, verifyExpiration: string, forgotPasswordToken: string, forgotPasswordExpiration: string, createdAt: string, updatedAt: string } };


export const ForgotPasswordDocument = gql`
    mutation ForgotPassword($email: String!) {
  forgotPassword(email: $email) {
    success
    error
  }
}
    `;

export function useForgotPasswordMutation() {
  return Urql.useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(ForgotPasswordDocument);
};
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    user {
      id
      firstName
      lastName
      email
      verified
    }
    error {
      field
      message
    }
  }
}
    `;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
};
export const ReadApplicationDocument = gql`
    mutation ReadApplication($userId: Int!) {
  readApplication(userId: $userId) {
    id
    userId
    status
    phone
    organization
    city
    state
    inPerson
    wholeEvent
    background
    whyUs
    howHear
    team
    linkedIn
    dietaryRestrictions
    transportation
    other
  }
}
    `;

export function useReadApplicationMutation() {
  return Urql.useMutation<ReadApplicationMutation, ReadApplicationMutationVariables>(ReadApplicationDocument);
};
export const RegisterDocument = gql`
    mutation Register($email: String!, $password: String!, $firstName: String!, $lastName: String!) {
  register(
    firstName: $firstName
    lastName: $lastName
    email: $email
    password: $password
  ) {
    user {
      id
      firstName
      lastName
      email
    }
    error {
      field
      message
    }
  }
}
    `;
export const ReadConfirmationDocument = gql`
    mutation ReadConfirmation($userId: Int!) {
  readConfirmation(userId: $userId) {
    id
    userId
    status
    inPerson
    tracks1
    tracks2
    liability
    liabilityDate
    other
  }
}
    `;

export function useReadConfirmationMutation() {
  return Urql.useMutation<ReadConfirmationMutation, ReadConfirmationMutationVariables>(ReadConfirmationDocument);
};


export function useRegisterMutation() {
  return Urql.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument);
};
export const ResendVerificationEmailDocument = gql`
    mutation ResendVerificationEmail($id: Int!, $email: String!) {
  resendVerificationEmail(id: $id, email: $email)
}
    `;

export function useResendVerificationEmailMutation() {
  return Urql.useMutation<ResendVerificationEmailMutation, ResendVerificationEmailMutationVariables>(ResendVerificationEmailDocument);
};
export const SubmitApplicationDocument = gql`
    mutation SubmitApplication($userId: Int!, $firstName: String!, $lastName: String!, $email: String!, $phone: String!, $organization: String!, $city: String!, $state: String!, $inPerson: String!, $wholeEvent: String!, $background: String!, $whyUs: String!, $howHear: String!, $team: String!, $linkedIn: String!, $dietaryRestrictions: String!, $transportation: String!, $other: String!) {
  submitApplication(
    userId: $userId
    firstName: $firstName
    lastName: $lastName
    email: $email
    phone: $phone
    organization: $organization
    city: $city
    state: $state
    inPerson: $inPerson
    wholeEvent: $wholeEvent
    background: $background
    whyUs: $whyUs
    howHear: $howHear
    team: $team
    linkedIn: $linkedIn
    dietaryRestrictions: $dietaryRestrictions
    transportation: $transportation
    other: $other
  )
}
    `;

export function useSubmitApplicationMutation() {
  return Urql.useMutation<SubmitApplicationMutation, SubmitApplicationMutationVariables>(SubmitApplicationDocument);
};
export const UpdateApplicationDocument = gql`
    mutation UpdateApplication($userId: Int!, $phone: String!, $organization: String!, $city: String!, $state: String!, $inPerson: String!, $wholeEvent: String!, $background: String!, $whyUs: String!, $howHear: String!, $team: String!, $linkedIn: String!, $dietaryRestrictions: String!, $transportation: String!, $other: String!) {
  updateApplication(
    userId: $userId
    phone: $phone
    organization: $organization
    city: $city
    state: $state
    inPerson: $inPerson
    wholeEvent: $wholeEvent
    background: $background
    whyUs: $whyUs
    howHear: $howHear
    team: $team
    linkedIn: $linkedIn
    dietaryRestrictions: $dietaryRestrictions
    transportation: $transportation
    other: $other
  )
}
    `;

export function useUpdateApplicationMutation() {
  return Urql.useMutation<UpdateApplicationMutation, UpdateApplicationMutationVariables>(UpdateApplicationDocument);
};
export const UpdatePasswordDocument = gql`
    mutation UpdatePassword($token: String!, $password: String!) {
  updatePassword(token: $token, password: $password)
}
    `;
export const SubmitConfirmationDocument = gql`
    mutation SubmitConfirmation($userId: Int!, $inPerson: String!, $tracks1: String!, $tracks2: String!, $liability: String!, $liabilityDate: String!, $other: String!) {
  submitConfirmation(
    userId: $userId
    inPerson: $inPerson
    tracks1: $tracks1
    tracks2: $tracks2
    liability: $liability
    liabilityDate: $liabilityDate
    other: $other
  )
}
    `;

export function useSubmitConfirmationMutation() {
  return Urql.useMutation<SubmitConfirmationMutation, SubmitConfirmationMutationVariables>(SubmitConfirmationDocument);
};
export const UpdateConfirmationDocument = gql`
    mutation UpdateConfirmation($userId: Int!, $inPerson: String!, $tracks1: String!, $tracks2: String!, $liability: String!, $liabilityDate: String!, $other: String!) {
  updateConfirmation(
    userId: $userId
    inPerson: $inPerson
    tracks1: $tracks1
    tracks2: $tracks2
    liability: $liability
    liabilityDate: $liabilityDate
    other: $other
  )
}
    `;

export function useUpdateConfirmationMutation() {
  return Urql.useMutation<UpdateConfirmationMutation, UpdateConfirmationMutationVariables>(UpdateConfirmationDocument);
};

export function useUpdatePasswordMutation() {
  return Urql.useMutation<UpdatePasswordMutation, UpdatePasswordMutationVariables>(UpdatePasswordDocument);
};
export const VerifyUserDocument = gql`
    mutation VerifyUser($token: String!) {
  verifyUser(token: $token) {
    success
    error
  }
}
    `;

export function useVerifyUserMutation() {
  return Urql.useMutation<VerifyUserMutation, VerifyUserMutationVariables>(VerifyUserDocument);
};
export const ReadTokenValidityDocument = gql`
    query ReadTokenValidity($token: String!) {
  readTokenValidity(token: $token) {
    success
    error
    email
  }
}
    `;

export function useReadTokenValidityQuery(options: Omit<Urql.UseQueryArgs<ReadTokenValidityQueryVariables>, 'query'>) {
  return Urql.useQuery<ReadTokenValidityQuery, ReadTokenValidityQueryVariables>({ query: ReadTokenValidityDocument, ...options });
};
export const ReadUserDocument = gql`
    query ReadUser($id: Int!) {
  readUser(id: $id) {
    id
    email
    firstName
    lastName
    verified
    verifyToken
    verifyExpiration
    forgotPasswordToken
    forgotPasswordExpiration
    createdAt
    updatedAt
  }
}
    `;

export function useReadUserQuery(options: Omit<Urql.UseQueryArgs<ReadUserQueryVariables>, 'query'>) {
  return Urql.useQuery<ReadUserQuery, ReadUserQueryVariables>({ query: ReadUserDocument, ...options });
};