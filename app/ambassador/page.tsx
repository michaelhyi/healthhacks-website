import ContainerApp from "../components/ContainerApp";

const Ambassador = () => {
  return (
    <ContainerApp>
      <>
        <div className="flex flex-col items-center lg:pt-24 md:pt-12">
          <div className="lg:w-[50vw] md:w-[75vw] sm:w-[75vw]">
            <div className="font-semibold text-5xl">
              Los Angeles University Student Ambassador
            </div>
            <p className="font-base text-md text-[#b9b9b9] mt-2">
              As a {`health{hacks}`} 2023 LA University Student Ambassador, you
              will be part of a community of undergraduate and graduate students
              in the greater Los Angeles area who will publicize different
              initiatives of {`health{hacks}`} and leverage our brand. You will
              work closely with the Marketing Committee to promote
              {`health{hacks}`} events and opportunities on your college campus
              and beyond.
              <br />
              <br />
              The ideal candidate will be an enthusiastic, self-motivated
              individual with excellent communication skills and a passion for
              promoting health innovation.
              <br />
              <br />
            </p>

            <div>
              <b>Responsibilities:</b>
              <ul className="list-disc list-outside md:pl-12 sm:pl-6">
                <li className="pl-2">
                  {" "}
                  Participate in the {`health{hacks}`} 2023 LA Ambassadorship
                  Program via Slack channels and email communication
                </li>
                <li className="pl-2">
                  {" "}
                  Promote {`health{hacks}`} events and initiatives on your
                  college campus and beyond
                </li>
                <li className="pl-2">
                  {" "}
                  Attend bi-monthly meetings to stay updated on planning process
                </li>
                <li className="pl-2"> Use word-of-mouth to publicize events</li>
                <li className="pl-2">
                  {" "}
                  Post flyers on school campuses and submit potential ideas for
                  the event via a form
                </li>
                <li className="pl-2">
                  {" "}
                  Repost, like, and comment on graphics on social media
                </li>
                <li className="pl-2">
                  {" "}
                  Maintain a commitment of 1 hour per week
                </li>
                <li className="pl-2">
                  {" "}
                  Help to recruit more diverse participants for{" "}
                  {`health{hacks}`} events
                </li>
                <li className="pl-2">
                  {" "}
                  Provide feedback on the event and suggest ideas for future
                  events
                </li>
              </ul>
              <br />
              <b>Requirements</b>
              <ul className="list-disc list-outside md:pl-12 sm:pl-6">
                <li className="pl-2">
                  {" "}
                  Currently enrolled in an undergraduate or graduate program in
                  the greater Los Angeles area
                </li>
                <li className="pl-2">
                  {" "}
                  Majoring in CS, engineering, business, economics, pre-med,
                  public health, medical students, or related fields
                </li>
                <li className="pl-2">
                  {" "}
                  Excellent communication and interpersonal skills
                </li>
                <li className="pl-2">
                  {" "}
                  Strong organizational and time-management skills
                </li>
                <li className="pl-2">
                  {" "}
                  Passion for promoting health innovation
                </li>
              </ul>
              <br />
              <b>Benefits</b>
              <ul className="list-disc list-outside md:pl-12 sm:pl-6">
                <li className="pl-2">
                  {" "}
                  Attendance at private {`health{hacks}`}events with corporate
                  sponsors (e.g., networking dinners, meet and greets with
                  sponsors/investors, private receptions)
                </li>
                <li className="pl-2">
                  {" "}
                  $50 gift card following 50 signups attained (given a
                  promotional code to share with audience)
                </li>
                <li className="pl-2">
                  {" "}
                  Free and guaranteed participation, food, and merch at our LA
                  event
                </li>
                <li className="pl-2">
                  {" "}
                  Featured on social media and blog pages
                </li>
              </ul>
              <br />
              <b>To Apply</b>
              <ul className="list-disc list-outside md:pl-12 sm:pl-6">
                <li className="pl-2">
                  {" "}
                  Applications will open Tuesday, March 27 and the deadline to
                  apply for the ambassadorship program will be Friday, June 9.
                </li>
                <li className="pl-2">
                  {" "}
                  Ambassadors will be accepted on a rolling basis, but are
                  encouraged to apply early.
                </li>
                <li className="pl-2">
                  {" "}
                  Applicants will be screened by the {`health{hacks}`} executive
                  team based on the information provided in the form. You will
                  be contacted via email regarding the status of your
                  application with 2 weeks of your submission.
                </li>
              </ul>
              <br />
            </div>

            <br />
            <p className="font-base text-md text-[#b9b9b9]">
              Please email{" "}
              <a href="mailto:info@joinhealthhacks.com">
                <u>info@joinhealthhacks.com</u>
              </a>{" "}
              if you have any additional questions.
            </p>
          </div>
        </div>
      </>
    </ContainerApp>
  );
};

export default Ambassador;
