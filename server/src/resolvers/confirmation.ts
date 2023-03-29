import moment from "moment";
import { Arg, Int, Mutation, Query, Resolver } from "type-graphql";
import { getConnection } from "typeorm";
import { User } from "../entities/User";
import appendConfirmationSpreadsheet from "../utils/appendConfirmationSpreadsheet";
import { attendeeConfirmationHTML } from "../utils/emails";
import { CForm } from "../utils/types";
import updatePaid from "../utils/updatePaid";

const sgMail = require("@sendgrid/mail");

@Resolver()
export class ConfirmationResolver {

  @Mutation(() => Boolean)
  async submitConfirmation(
    @Arg("userId", () => Int) userId: number,
    @Arg("firstName", () => String) firstName: string,
    @Arg("lastName", () => String) lastName: string,
    @Arg("email", () => String) email: string,
    @Arg("inPerson", () => String) inPerson: string,
    @Arg("liability", () => String) liability: string,
    @Arg("liabilityDate", () => String) liabilityDate: string,
    @Arg("other", () => String) other: string,
    @Arg("paid", () => String) paid: string,
    @Arg("tracks1", () => String) tracks1: string,
    @Arg("tracks2", () => String) tracks2: string,
  ): Promise<boolean> {
    const newRow = {
      Timestamp: moment().format("MMMM Do YYYY, h:mm:ss a"),
      FirstName: firstName,
      LastName: lastName,
      Email: email,
      InPerson: inPerson,
      Tracks1: tracks1,
      Tracks2: tracks2,
      Liability: liability,
      LiabilityDate: liabilityDate,
      Other: other,
      Paid: paid,
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
  async updatePayment(
    @Arg("email", () => String) email: string,
    @Arg("paid", () => Boolean) paid: boolean
  ): Promise<boolean> {
    if (paid) {
      try {
        await updatePaid(email, paid)

        await getConnection()
          .getRepository(User)
          .createQueryBuilder()
          .update({
            status: "paid",
          })
          .where({ email })
          .returning("*")
          .execute();

        return true;
      } catch(error) {
        console.error("Error updating payment status:", error);
        return false;
      }
    }
    return false;
  }
  

  @Mutation(() => Boolean)
  async setUserPaidPending(
    @Arg("userId", () => String) email: string
  ): Promise<Boolean> {
    await getConnection()
        .getRepository(User)
        .createQueryBuilder()
        .update({
          status: "pending",
        })
        .where({ email })
        .returning("*")
        .execute();

    return true;
  }
}
