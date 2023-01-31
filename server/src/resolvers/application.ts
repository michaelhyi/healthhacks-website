import { Query, Resolver } from "type-graphql";
import { Application } from "../entities/Application";

@Resolver()
export class ApplicationResolver {
  @Query(() => [Application])
  async readApplications(): Promise<Application[]> {
    const applications = await Application.find();
    return applications;
  }
}
