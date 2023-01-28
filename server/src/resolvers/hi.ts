import { Query, Resolver } from "type-graphql";

@Resolver()
export class HiResolver {
  @Query(() => String)
  hi() {
    return "hi";
  }
}
