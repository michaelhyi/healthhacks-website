import { Arg, Int, Mutation, Query, Resolver } from "type-graphql";
import { getConnection } from "typeorm";
import { Application } from "../entities/Application";

@Resolver()
export class ApplicationResolver {
  @Mutation(() => Boolean)
  async updateApplication(
    @Arg("userId", () => Int) userId: number,
    @Arg("item", () => String) item: string,
    @Arg("firstName", () => String, { nullable: true }) firstName?: string,
    @Arg("middleName", () => String, { nullable: true }) middleName?: string,
    @Arg("lastName", () => String, { nullable: true }) lastName?: string,
    @Arg("phone", () => String, { nullable: true }) phone?: string,
    @Arg("organization", () => String, { nullable: true })
    organization?: string,
    @Arg("city", () => String, { nullable: true }) city?: string,
    @Arg("state", () => String, { nullable: true }) state?: string,
    @Arg("inPerson", () => String, { nullable: true }) inPerson?: string,
    @Arg("wholeEvent", () => String, { nullable: true }) wholeEvent?: string
  ): Promise<boolean> {
    switch (item) {
      case "firstName":
        await getConnection()
          .getRepository(Application)
          .createQueryBuilder()
          .update({ firstName })
          .where({ userId })
          .returning("*")
          .execute();
        break;
      case "middleName":
        await getConnection()
          .getRepository(Application)
          .createQueryBuilder()
          .update({ middleName })
          .where({ userId })
          .returning("*")
          .execute();
        break;
      case "lastName":
        await getConnection()
          .getRepository(Application)
          .createQueryBuilder()
          .update({ lastName })
          .where({ userId })
          .returning("*")
          .execute();
        break;
      case "phone":
        await getConnection()
          .getRepository(Application)
          .createQueryBuilder()
          .update({ phone })
          .where({ userId })
          .returning("*")
          .execute();
        break;
      case "organization":
        await getConnection()
          .getRepository(Application)
          .createQueryBuilder()
          .update({ organization })
          .where({ userId })
          .returning("*")
          .execute();
        break;
      case "city":
        await getConnection()
          .getRepository(Application)
          .createQueryBuilder()
          .update({ city })
          .where({ userId })
          .returning("*")
          .execute();
        break;
      case "state":
        await getConnection()
          .getRepository(Application)
          .createQueryBuilder()
          .update({ state })
          .where({ userId })
          .returning("*")
          .execute();
        break;
      case "inPerson":
        await getConnection()
          .getRepository(Application)
          .createQueryBuilder()
          .update({ inPerson })
          .where({ userId })
          .returning("*")
          .execute();
        break;
      case "wholeEvent":
        await getConnection()
          .getRepository(Application)
          .createQueryBuilder()
          .update({ wholeEvent })
          .where({ userId })
          .returning("*")
          .execute();
        break;
    }

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
