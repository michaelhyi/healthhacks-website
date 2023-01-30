import argon2 from "argon2";
import { Arg, Int, Mutation, Query, Resolver } from "type-graphql";
import { User } from "../entities/User";
import { UserResponse } from "../utils/types";

@Resolver()
export class UserResolver {
  @Mutation(() => Boolean)
  async deleteUsers() {
    await User.delete({});
    return true;
  }

  @Query(() => User)
  async readUser(@Arg("id", () => Int) id: number): Promise<User> {
    const user = await User.findOne({ where: { id } });
    return user!;
  }

  @Query(() => [User])
  async readUsers(): Promise<User[]> {
    const users = await User.find();
    return users;
  }

  @Mutation(() => UserResponse)
  async register(
    @Arg("email") email: string,
    @Arg("password") password: string,
    @Arg("firstName") firstName: string,
    @Arg("lastName") lastName: string
  ): Promise<UserResponse> {
    //some sort of email validity checker
    if (!email.includes("@")) {
      return {
        error: {
          field: "Email",
          message: "Invalid email.",
        },
      };
    }
    if (password.length <= 2) {
      return {
        error: {
          field: "Password",
          message: "Password must be greater than 2 characters.",
        },
      };
    }
    if (firstName.length === 0) {
      return {
        error: {
          field: "First Name",
          message: "You must enter a first name.",
        },
      };
    }

    if (lastName.length === 0) {
      return {
        error: {
          field: "Last Name",
          message: "You must enter a last name.",
        },
      };
    }

    let user;
    try {
      user = await User.create({
        email,
        password: await argon2.hash(password),
        firstName,
        lastName,
      }).save();
    } catch (e) {
      if (
        e.detail.includes("already exists") ||
        e.detail.includes("duplicate key")
      ) {
        return {
          error: {
            field: "Email",
            message: "Email already exists.",
          },
        };
      }
    }

    return { user };
  }

  @Mutation(() => UserResponse)
  async login(
    @Arg("email") email: string,
    @Arg("password") password: string
  ): Promise<UserResponse> {
    if (!email.includes("@")) {
      return {
        error: {
          field: "Email",
          message: "Invalid email.",
        },
      };
    }

    const user = await User.findOne({ where: { email } });
    if (!user) {
      return {
        error: { field: "Email", message: "Email does not exist." },
      };
    }

    const valid = await argon2.verify(user.password, password);
    if (!valid) {
      return {
        error: {
          field: "Password",
          message: "Incorrect password.",
        },
      };
    }

    return {
      user,
    };
  }
}
