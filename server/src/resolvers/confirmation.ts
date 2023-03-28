import moment from "moment";
import { Arg, Int, Mutation, Query, Resolver } from "type-graphql";
import { getConnection } from "typeorm";
import { Confirmation } from "../entities/Confirmation";
import { User } from "../entities/User";
import appendConfirmationSpreadsheet from "../utils/appendConfirmationSpreadsheet";
import { attendeeConfirmationHTML } from "../utils/emails";
import { CForm } from "../utils/types";

const sgMail = require("@sendgrid/mail");

@Resolver()
export class ConfirmationResolver {
  @Mutation(() => Boolean)
  async deleteConfirmations() {
    await Confirmation.delete({});
    return true;
  }

  @Mutation(() => Boolean)
  async submitConfirmation(
    @Arg("userId", () => Int) userId: number,
    @Arg("firstName", () => String) firstName: string,
    @Arg("lastName", () => String) lastName: string,
    @Arg("email", () => String) email: string,
    @Arg("cform", () => CForm) cform: CForm,
  ): Promise<boolean> {
    await getConnection()
      .getRepository(Confirmation)
      .createQueryBuilder()
      .update({
        // status: "Submitted",
        inPerson: cform.inPerson,
        tracks1: cform.tracks1,
        tracks2: cform.tracks2,
        liability: cform.liability,
        liabilityDate: cform.liabilityDate,
        other: cform.other,
        paid: cform.paid,
      })
      .where({ userId })
      .returning("*")
      .execute();

    await getConnection()
      .getRepository(User)
      .createQueryBuilder()
      .update({
        status: "not-paid"
      })
      .where({ userId })
      .returning("*")
      .execute();

    const newRow = {
      Timestamp: moment().format("MMMM Do YYYY, h:mm:ss a"),
      FirstName: firstName,
      LastName: lastName,
      Email: email,
      InPerson: cform.inPerson,
      Tracks1: cform.tracks1,
      Tracks2: cform.tracks2,
      Liability: cform.liability,
      LiabilityDate: cform.liabilityDate,
      Other: cform.other,
      Paid: cform.paid,
    };

    await appendConfirmationSpreadsheet(newRow);

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: email,
      from: process.env.SENDGRID_EMAIL,
      subject: "health{hacks} 2023 Attendee Confirmation",
      html: attendeeConfirmationHTML,
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

  @Mutation(() => Boolean)
  async updateConfirmation(
    @Arg("userId", () => Int) userId: number,
    @Arg("cform", () => CForm) cform: CForm
  ): Promise<boolean> {
    await getConnection()
      .getRepository(Confirmation)
      .createQueryBuilder()
      .update({
        inPerson: cform.inPerson,
        tracks1: cform.tracks1,
        tracks2: cform.tracks2,
        liability: cform.liability,
        liabilityDate: cform.liabilityDate,
        other: cform.other,
        paid: cform.paid,
      })
      .where({ userId })
      .returning("*")
      .execute();

    return true;
  }

  @Query(() => [Confirmation])
  async readConfirmations(): Promise<Confirmation[]> {
    const confirmations = await Confirmation.find();
    return confirmations;
  }

  @Mutation(() => Confirmation)
  async readConfirmation(
    @Arg("userId", () => Int) userId: number
  ): Promise<Confirmation> {
    const confirmation = await Confirmation.findOne({ where: { userId } });
    return confirmation!;
  }
}
