import moment from "moment";
import { Arg, Int, Mutation, Query, Resolver } from "type-graphql";
import { getConnection } from "typeorm";
import { Application } from "../entities/Application";
import { User } from "../entities/User";
import appendApplicationSpreadsheet from "../utils/appendApplicationSpreadsheet";
import { applicationConfirmationHTML } from "../utils/emails";
import { Form } from "../utils/types";

const sgMail = require("@sendgrid/mail");

@Resolver()
export class ApplicationResolver {
  @Mutation(() => Boolean)
  async deleteApplications() {
    await Application.delete({});
    return true;
  }

  @Mutation(() => Boolean)
  async submitApplication(
    @Arg("userId", () => Int) userId: number,
    @Arg("firstName", () => String) firstName: string,
    @Arg("lastName", () => String) lastName: string,
    @Arg("email", () => String) email: string,
    @Arg("form", () => Form) form: Form
  ): Promise<boolean> {
    await getConnection()
      .getRepository(Application)
      .createQueryBuilder()
      .update({
        status: "Submitted",
        phone: form.phone,
        organization: form.organization,
        city: form.city,
        state: form.state,
        inPerson: form.inPerson,
        wholeEvent: form.wholeEvent,
        background: form.background,
        whyUs: form.whyUs,
        howHear: form.howHear,
        team: form.team,
        linkedIn: form.linkedIn,
        dietaryRestrictions: form.dietaryRestrictions,
        transportation: form.transportation,
        other: form.other,
      })
      .where({ userId })
      .returning("*")
      .execute();

    await getConnection()
      .getRepository(User)
      .createQueryBuilder()
      .update({
        status: "applied"
      })
      .where({ userId })
      .returning("*")
      .execute();

    const newRow = {
      Timestamp: moment().format("MMMM Do YYYY, h:mm:ss a"),
      FirstName: firstName,
      LastName: lastName,
      Email: email,
      Phone: form.phone,
      Organization: form.organization,
      City: form.city,
      State: form.state,
      InPerson: form.inPerson,
      WholeEvent: form.wholeEvent,
      Background: form.background.toString(),
      WhyUs: form.whyUs.toString(),
      HowHear: form.howHear,
      Team: form.team,
      LinkedIn: form.linkedIn,
      DietaryRestrictions: form.dietaryRestrictions,
      Transportation: form.transportation,
      Other: form.other,
    };

    await appendApplicationSpreadsheet(newRow);

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: email,
      from: process.env.SENDGRID_EMAIL,
      subject: "health{hacks} 2023 Application Confirmation",
      html: applicationConfirmationHTML,
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
  async updateApplication(
    @Arg("userId", () => Int) userId: number,
    @Arg("form", () => Form) form: Form
  ): Promise<boolean> {
    await getConnection()
      .getRepository(Application)
      .createQueryBuilder()
      .update({
        phone: form.phone,
        organization: form.organization,
        city: form.city,
        state: form.state,
        inPerson: form.inPerson,
        wholeEvent: form.wholeEvent,
        background: form.background,
        whyUs: form.whyUs,
        howHear: form.howHear,
        team: form.team,
        linkedIn: form.linkedIn,
        dietaryRestrictions: form.dietaryRestrictions,
        transportation: form.transportation,
        other: form.other,
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
