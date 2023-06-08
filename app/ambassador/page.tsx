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
              work closely with the Marketing Committee to promote{" "}
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
                  Re-posting, liking, and commenting on graphics on social media
                </li>
                <li className="pl-2">
                  Using word-of-mouth to publicize events (eg. have at least 2
                  professors help publicize the event to their students)
                </li>
                <li className="pl-2">Posting fliers on school campuses</li>
                <li className="pl-2">Respond to monthly check-ins on slack</li>
                <li className="pl-2">
                  Leverage connections with potential sponsors (if interning at
                  a company)
                </li>
                <li className="pl-2"> Emailing potential participants</li>
              </ul>
              <br />
              <b>Benefits</b>
              <ul className="list-disc list-outside md:pl-12 sm:pl-6">
                <li className="pl-2">
                  Attendance at private {`health{hacks}`} events (eg. networking
                  dinners, meet and greets with the team, sponsors/investors,
                  and/or mentors/speakers/judges)
                </li>
                <li className="pl-2">
                  $50 gift card following 50 signups attained (given a
                  promotional code to share with audience)
                </li>
                <li className="pl-2">
                  Free and guaranteed participation, food, and merch at our LA
                  event
                </li>
              </ul>
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
