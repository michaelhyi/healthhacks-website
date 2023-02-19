import { Arg, Int, Mutation, Query, Resolver } from "type-graphql";
import { getConnection } from "typeorm";
import { Application } from "../entities/Application";

@Resolver()
export class ApplicationResolver {
  @Mutation(() => Boolean)
  async updateApplication(
    @Arg("userId", () => Int) userId: number,
    @Arg("phone", () => String) phone: string,
    @Arg("organization", () => String)
    organization: string,
    @Arg("city", () => String) city: string,
    @Arg("state", () => String) state: string,
    @Arg("inPerson", () => String) inPerson: string,
    @Arg("wholeEvent", () => String) wholeEvent: string,
    @Arg("background", () => String) background: string,
    @Arg("whyUs", () => String) whyUs: string,
    @Arg("howHear", () => String) howHear: string,
    @Arg("team", () => String) team: string,
    @Arg("linkedIn", () => String) linkedIn: string,
    @Arg("dietaryRestrictions", () => String) dietaryRestrictions: string,
    @Arg("transportation", () => String) transportation: string,
    @Arg("other", () => String) other: string
  ): Promise<boolean> {
    await getConnection()
      .getRepository(Application)
      .createQueryBuilder()
      .update({
        phone,
        organization,
        city,
        state,
        inPerson,
        wholeEvent,
        background,
        whyUs,
        howHear,
        team,
        linkedIn,
        dietaryRestrictions,
        transportation,
        other,
      })
      .where({ userId })
      .returning("*")
      .execute();

    return true;
  }

  @Query(() => [Application])
  async readApplications(): Promise<Application[]> {
    const applications = await Application.find();
    return applications;
  }

  @Mutation(() => Application)
  async readApplication(
    @Arg("userId", () => Int) userId: number
  ): Promise<Application> {
    const application = await Application.findOne({ where: { userId } });
    return application!;
  }
}
