import { format } from "date-fns";
import { Arg, Int, Mutation, Query, Resolver } from "type-graphql";
import { getConnection } from "typeorm";
import { Application } from "../entities/Application";
import appendApplicationSpreadsheet from "../utils/appendApplicationSpreadsheet";
import { applicationConfirmationHTML } from "../utils/emails";

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
    @Arg("phone", () => String) phone: string,
    @Arg("organization", () => String)
    organization: string,
    @Arg("city", () => String) city: string,
    @Arg("state", () => String) state: string,
    @Arg("inPerson", () => String) inPerson: string,
    @Arg("wholeEvent", () => String) wholeEvent: string,
    @Arg("background", () => [String]) background: string[],
    @Arg("whyUs", () => [String]) whyUs: string[],
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
        status: "Submitted",
        phone: phone,
        organization: organization,
        city: city,
        state: state,
        inPerson: inPerson,
        wholeEvent: wholeEvent,
        background: background,
        whyUs: whyUs,
        howHear: howHear,
        team: team,
        linkedIn: linkedIn,
        dietaryRestrictions: dietaryRestrictions,
        transportation: transportation,
        other: other,
      })
      .where({ userId })
      .returning("*")
      .execute();

    const newRow = {
      Timestamp: format(new Date(), "Pp"),
      FirstName: firstName,
      LastName: lastName,
      Email: email,
      Phone: phone,
      Organization: organization,
      City: city,
      State: state,
      InPerson: inPerson,
      WholeEvent: wholeEvent,
      Background: background.toString(),
      WhyUs: whyUs.toString(),
      HowHear: howHear,
      Team: team,
      LinkedIn: linkedIn,
      DietaryRestrictions: dietaryRestrictions,
      Transportation: transportation,
      Other: other,
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
    @Arg("phone", () => String) phone: string,
    @Arg("organization", () => String)
    organization: string,
    @Arg("city", () => String) city: string,
    @Arg("state", () => String) state: string,
    @Arg("inPerson", () => String) inPerson: string,
    @Arg("wholeEvent", () => String) wholeEvent: string,
    @Arg("background", () => [String]) background: string[],
    @Arg("whyUs", () => [String]) whyUs: string[],
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
