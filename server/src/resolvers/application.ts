import { Arg, Int, Mutation, Query, Resolver } from "type-graphql";
import { getConnection } from "typeorm";
import { Application } from "../entities/Application";

@Resolver()
export class ApplicationResolver {
  @Mutation(() => Boolean)
  async updateApplication(
    @Arg("userId", () => Int) userId: number,
    @Arg("firstName", () => String) firstName: string,
    @Arg("middleName", () => String) middleName: string,
    @Arg("lastName", () => String) lastName: string,
    @Arg("phone", () => String) phone: string,
    @Arg("organization", () => String)
    organization: string,
    @Arg("city", () => String) city: string,
    @Arg("state", () => String) state: string,
    @Arg("inPerson", () => String) inPerson: string,
    @Arg("wholeEvent", () => String) wholeEvent: string
  ): Promise<boolean> {
    await getConnection()
      .getRepository(Application)
      .createQueryBuilder()
      .update({
        firstName,
        middleName,
        lastName,
        phone,
        organization,
        city,
        state,
        inPerson,
        wholeEvent,
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
