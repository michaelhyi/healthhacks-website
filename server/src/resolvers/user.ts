import argon2 from "argon2";
import * as EmailValidator from "email-validator";
import { Arg, Int, Mutation, Query, Resolver } from "type-graphql";
import { getConnection } from "typeorm";
import { v4 } from "uuid";
import { Application } from "../entities/Application";
import { User } from "../entities/User";
import { verifyHTML } from "../utils/emails";
import { UserResponse, Response } from "../utils/types";

const sgMail = require("@sendgrid/mail");

@Resolver()
export class UserResolver {
  @Mutation(() => Response)
  async forgotPassword(@Arg("email") email: string): Promise<Response> {
    const user = await User.findOne({ where: { email } });

    if (!EmailValidator.validate(email) || !user) {
      return {
        success: false,
        error: "Invalid Email",
      };
    }

    const token = v4();
    await getConnection()
      .getRepository(User)
      .createQueryBuilder()
      .update({
        forgotPasswordToken: token,
        forgotPasswordExpiration: (
          new Date().getTime() +
          1000 * 60 * 60 * 24 * 2
        ).toString(),
      })
      .where({ id: user.id })
      .returning("*")
      .execute();

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: email,
      from: process.env.SENDGRID_EMAIL,
      subject: "health{hacks} 2023 Password Change",
      // html: verifyHTML(token),
    };

    sgMail
      .send(msg)
      .then(() => {
        console.log("Email sent");
      })
      .catch((error: any) => {
        console.error(error);
      });

    return {
      success: true,
    };
  }

  @Mutation(() => Response)
  async verifyUser(@Arg("token") token: string): Promise<Response> {
    const user = await User.findOne({ where: { verifyToken: token } });
    const date = new Date().getTime();
    const expiration = parseInt(user?.verifyExpiration!);

    if (!user) {
      return {
        success: false,
        error: "Invalid token.",
      };
    }

    if (!user!.verified) {
      if (date > expiration) {
        return {
          success: false,
          error: "Token expired.",
        };
      } else {
        await getConnection()
          .getRepository(User)
          .createQueryBuilder()
          .update({
            verified: true,
          })
          .where({ id: user!.id })
          .returning("*")
          .execute();
        return {
          success: true,
        };
      }
    }

    return {
      success: false,
      error: "User already verified.",
    };
  }

  @Mutation(() => Boolean)
  async deleteUsers() {
    await User.delete({});
    return true;
  }

  @Mutation(() => Boolean)
  async resendVerificationEmail(
    @Arg("id", () => Int) id: number,
    @Arg("email") email: string
  ): Promise<Boolean> {
    const token = v4();

    await getConnection()
      .getRepository(User)
      .createQueryBuilder()
      .update({
        verifyToken: token,
        verifyExpiration: (
          new Date().getTime() +
          1000 * 60 * 60 * 24 * 2
        ).toString(),
      })
      .where({ id })
      .returning("*")
      .execute();

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: email,
      from: process.env.SENDGRID_EMAIL,
      subject: "health{hacks} 2023 Email Verification",
      html: verifyHTML(token),
    };

    sgMail
      .send(msg)
      .then(() => {
        console.log("Email sent");
      })
      .catch((error: any) => {
        console.error(error);
      });

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
    if (!EmailValidator.validate(email)) {
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
    const token = v4();

    try {
      user = await User.create({
        email,
        password: await argon2.hash(password),
        firstName,
        lastName,
        verifyToken: token,
        verifyExpiration: (
          new Date().getTime() +
          1000 * 60 * 60 * 24 * 2
        ).toString(),
      }).save();

      await Application.create({
        userId: user.id,
      }).save();

      sgMail.setApiKey(process.env.SENDGRID_API_KEY);
      const msg = {
        to: email,
        from: process.env.SENDGRID_EMAIL,
        subject: "health{hacks} 2023 Email Verification",
        html: verifyHTML(token),
      };

      sgMail
        .send(msg)
        .then(() => {
          console.log("Email sent");
        })
        .catch((error: any) => {
          console.error(error);
        });
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
