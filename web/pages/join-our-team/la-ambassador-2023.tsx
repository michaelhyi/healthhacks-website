import { Spinner, useToast } from "@chakra-ui/react";
import { withUrqlClient } from "next-urql";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ApplicationInput from "../../components/ApplicationInput";
import ContainerApp from "../../components/ContainerApp";
import DropDown from "../../components/DropDown";
import { useSubmitConfirmationMutation } from "../../generated/graphql";
import { createUrqlClient } from "../../utils/createUrqlClient";
import { AmbassadorApplicationType } from "../../utils/types";
import { wherefrom } from "../../data/wherefrom";
import { GoogleSpreadsheet } from "google-spreadsheet";


const SPREADSHEET_ID = process.env.NEXT_PUBLIC_2023_AMBASSADOR_SPREADSHEET_ID;
const SHEET_ID = process.env.NEXT_PUBLIC_2023_AMBASSADOR_SHEET_ID;
const GOOGLE_CLIENT_EMAIL = process.env.NEXT_PUBLIC_GOOGLE_AMBASSADOR_CLIENT_EMAIL;
const GOOGLE_SERVICE_PRIVATE_KEY = process.env.NEXT_PUBLIC_GOOGLE_AMBASSADOR_SERVICE_PRIVATE_KEY;

const LAAmbassador = () => {
  const toast = useToast();
  const router = useRouter();
  const [isExpanded, setIsExpanded] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [, submitConfirmation] = useSubmitConfirmationMutation();
  const [scrollPosition, setScrollPosition] = useState(0);

  const [teamForm, setTeamForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    organization: "",
    background: "",
    why: "",
    experience: "",
    linkedin: "",
    howHear: "",
    other: "",
  });
  const [error, setError] = useState(new Array(8).fill(""));

  // Functions allows the job description to be expanded even more
  const handleReadMore = () => {
    setScrollPosition(window.scrollY);
    setIsExpanded(true);
  };

  const handleReadLess = () => {
    setIsExpanded(false);
    window.scrollTo(0, scrollPosition);
  };

  // Function to handle submit of form
  const handleSubmit = async () => {
    setSubmitting(true);

    let found = false;
    let errors: string[] = [];

    Object.keys(teamForm).forEach((v) => {
      if (
        !(v === "other" ||
          v === "experience") &&
        teamForm[v as keyof AmbassadorApplicationType].length === 0
      ) {
        errors.push("This is a required field");
        found = true;
      } else {
        errors.push("");
      }
    });

    setError(errors);

    if (!found) {
      console.log(teamForm);

      const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

      try {
        await doc.useServiceAccountAuth({
          client_email: GOOGLE_CLIENT_EMAIL!,
          private_key: GOOGLE_SERVICE_PRIVATE_KEY!.replace(/\\n/g, "\n"),
        });
        await doc.loadInfo();
        console.log("test");

        const sheet = await doc.sheetsById[SHEET_ID!];

        await sheet.addRow(teamForm);

      } catch (e) {
        console.error("Error: ", e);
      };
    } else {
      toast({
        title: "Error!",
        description: "You must fill out all required fields!",
        status: "error",
        duration: 10000,
        isClosable: true,
      });
    }
    setSubmitting(false);
  };


  return (
    <ContainerApp>
      <>
        <div className="flex flex-col items-center lg:pt-24 md:pt-12">
          <div className="lg:w-[50vw] md:w-[75vw] sm:w-[75vw]">
            <div className="font-semibold text-5xl">
              Los Angeles University Student Ambassador
            </div>

            <p className="font-base text-md text-[#b9b9b9] mt-2">
              As a {`health{hacks}`} 2023 LA University Student Ambassador, you will be part of a community of undergraduate and graduate students in the greater Los Angeles area who will publicize different initiatives of {`health{hacks}`} and leverage our brand. You will work closely with the Marketing Committee to promote {`health{hacks}`} events and opportunities on your college campus and beyond.
              <br /><br />
              The ideal candidate will be an enthusiastic, self-motivated individual with excellent communication skills and a passion for promoting health innovation.
              <br /><br />
            </p>

            {isExpanded ? (
              <div>
                <b>Responsibilities:</b>
                <ul className="list-disc list-outside md:pl-12 sm:pl-6">
                  <li className="pl-2"> Participate in the {`health{hacks}`} 2023 LA Ambassadorship Program via Slack channels and email communication</li>
                  <li className="pl-2"> Promote {`health{hacks}`} events and initiatives on your college campus and beyond</li>
                  <li className="pl-2"> Attend bi-monthly meetings to stay updated on planning process</li>
                  <li className="pl-2"> Use word-of-mouth to publicize events</li>
                  <li className="pl-2"> Post flyers on school campuses and submit potential ideas for the event via a form</li>
                  <li className="pl-2"> Repost, like, and comment on graphics on social media</li>
                  <li className="pl-2"> Maintain a commitment of 1 hour per week</li>
                  <li className="pl-2"> Help to recruit more diverse participants for {`health{hacks}`} events</li>
                  <li className="pl-2"> Provide feedback on the event and suggest ideas for future events</li>
                </ul>
                <br />
                <b>Requirements</b>
                <ul className="list-disc list-outside md:pl-12 sm:pl-6">
                  <li className="pl-2"> Currently enrolled in an undergraduate or graduate program in the greater Los Angeles area</li>
                  <li className="pl-2"> Majoring in CS, engineering, business, economics, pre-med, public health, medical students, or related fields</li>
                  <li className="pl-2"> Excellent communication and interpersonal skills</li>
                  <li className="pl-2"> Strong organizational and time-management skills</li>
                  <li className="pl-2"> Passion for promoting health innovation</li>
                </ul>
                <br />
                <b>Benefits</b>
                <ul className="list-disc list-outside md:pl-12 sm:pl-6">
                  <li className="pl-2"> Attendance at private {`health{hacks}`}events with corporate sponsors (e.g., networking dinners, meet and greets with sponsors/investors, private receptions)</li>
                  <li className="pl-2"> $50 gift card following 50 signups attained (given a promotional code to share with audience)</li>
                  <li className="pl-2"> Free and guaranteed participation, food, and merch at our LA event</li>
                  <li className="pl-2"> Featured on social media and blog pages</li>
                </ul>
                <br />
                <b>To Apply</b>
                <ul className="list-disc list-outside md:pl-12 sm:pl-6">
                  <li className="pl-2"> Applications will open Tuesday, March 27 and the deadline to apply for the ambassadorship program will be Friday, June 9.</li>
                  <li className="pl-2"> Ambassadors will be accepted on a rolling basis, but are encouraged to apply early.</li>
                  <li className="pl-2"> Applicants will be screened by the {`health{hacks}`} executive team based on the information provided in the form. You will be contacted via email regarding the status of your application with 2 weeks of your submission.</li>
                </ul>
                <br />

                <button onClick={handleReadLess} className="hover:cursor-pointer duration-500 hover:opacity-50 text-center bg-hh-purple text-white px-6 py-3 w-auto rounded-xl text-sm font-medium">
                  Read less
                </button>
              </div>
            ) : (
              <>
                <button onClick={handleReadMore} className="hover:cursor-pointer duration-500 hover:opacity-50 text-center bg-hh-purple text-white px-6 py-3 w-auto rounded-xl text-sm font-medium">
                  Read more
                </button>
                <br />
              </>
            )
            }

            <br />
            <p className="font-base text-md text-[#b9b9b9]">
              Please email{" "}
              <a href="mailto:info@joinhealthhacks.com">
                <u>info@joinhealthhacks.com</u>
              </a>{" "}
              if you have any additional questions.
            </p>

            <div>
              <form>
                <div className="font-semibold text-4xl mt-12">
                  <u>General Information</u>
                </div>

                {/* NAME */}
                <div className="flex space-x-6">
                  <div className="w-[50vw]">
                    <ApplicationInput
                      error={error[0]}
                      value={teamForm.firstName}
                      setValue={(value) => setTeamForm({ ...teamForm, firstName: value })}
                      label="First Name"
                    />
                  </div>
                  <div className="w-[50vw]">
                    <ApplicationInput
                      error={error[1]}
                      value={teamForm.lastName}
                      setValue={(value) =>
                        setTeamForm({ ...teamForm, lastName: value })
                      }
                      label="Last Name"
                    />
                  </div>
                </div>

                {/* PHONE NUMBER AND ORGANIZATION */}
                <div className="flex space-x-6">
                  <div className="w-[50vw]">
                    <ApplicationInput
                      // userId={user.id}
                      error={error[2]}
                      value={teamForm.email}
                      setValue={(value) => setTeamForm({ ...teamForm, email: value })}
                      label="Email"
                    />
                  </div>
                  <div className="w-[50vw]">
                    <ApplicationInput
                      // userId={user.id}
                      error={error[3]}
                      value={teamForm.organization}
                      setValue={(value) =>
                        setTeamForm({ ...teamForm, organization: value })
                      }
                      label="University & Year"
                    />
                  </div>
                </div>


                <div className="font-semibold text-4xl mt-12">
                  <u>Short Answer Questions</u>
                </div>

                {/* Background */}
                <div>
                  <ApplicationInput
                    error={error[4]}
                    value={teamForm.background}
                    setValue={(value) => setTeamForm({ ...teamForm, background: value })}
                    label="What is your major / background?"
                  />
                </div>

                {/* Why */}
                <div>
                  <p className={`mt-8 -mb-6 lg:text-lg md:text-small font-semibold ${error[5].length > 0 ? "text-red-400" : "text-white"
                    }`}>
                    Why do you want to be an ambassador for {`health{hacks}`}? (Max 100 words)
                  </p>
                  <ApplicationInput
                    textarea
                    error={error[5]}
                    placeholder=""
                    value={teamForm.why}
                    setValue={(value) => setTeamForm({ ...teamForm, why: value })}
                  />
                </div>

                {/* Marketing? */}
                <div>
                  <p className="mt-8 -mb-6 lg:text-lg md:text-small font-semibold">
                    Do you have any experience with marketing/publicity? If yes, please explain more. (Max 100 words)
                  </p>
                  <ApplicationInput
                    textarea
                    placeholder=""
                    value={teamForm.experience}
                    setValue={(value) => setTeamForm({ ...teamForm, experience: value })}
                  />
                </div>


                <div className="font-semibold text-4xl mt-12">
                  <u>Miscellaneous</u>
                </div>

                {/* LinkedIn Profile */}
                <div>
                  <ApplicationInput
                    error={error[6]}
                    value={teamForm.linkedin}
                    setValue={(value) => setTeamForm({ ...teamForm, linkedin: value })}
                    label="LinkedIn Profile"
                  />
                </div>


                {/* How did you hear about health{hacks} */}
                <div>
                  <div>
                    <DropDown
                      error={error[7]}
                      name="How did you hear about health{hacks}"
                      options={wherefrom}
                      value={teamForm.howHear}
                      setValue={(v) => setTeamForm({ ...teamForm, howHear: v })}
                    />
                  </div>
                </div>

                {/* Anything Else? */}
                <div>
                  <p className="mt-8 -mb-6 lg:text-lg md:text-small font-semibold">
                    Anything else you want to tell us?
                  </p>
                  <ApplicationInput
                    textarea
                    placeholder="We love to hear your thoughts, questions, and more about this role"
                    value={teamForm.other}
                    setValue={(value) => setTeamForm({ ...teamForm, other: value })}
                  />
                </div>

              </form>
              <div className="flex items-center space-x-6 pt-8 pb-24">
                <button
                  onClick={handleSubmit}
                  className="hover:cursor-pointer duration-500 hover:opacity-50 text-center bg-hh-purple text-white px-6 py-3 w-auto rounded-xl text-sm font-medium"
                >
                  {submitting ? <Spinner size="xs" /> : "Apply"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    </ContainerApp>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(LAAmbassador);
