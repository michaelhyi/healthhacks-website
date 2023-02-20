import ContainerApp from "@/components/ContainerApp";
import { socials } from "@/data/socials";
import { useContext } from "react";

//@ts-ignore
import Fade from "react-reveal/Fade";
import Context from "../../utils/context";

const Success = () => {
  const { user } = useContext(Context);

  return (
    <ContainerApp>
      <Fade delay={500} up distance="24px">
        <div className="flex flex-col items-center md:pb-16 md:pt-8 xl:pt-0 sm:pt-0 w-screen">
          <img
            className="md:w-[275px] sm:w-[200px]"
            src="\circle1.png"
            alt="globe"
          />
          <div className="max-w-md">
            <h2 className="font-semibold text-4xl w-lg px-8 pt-8 text-center ">
              Thanks for applying!
            </h2>
            <p className="font-normal text-base px-8 pt-4  md:text-base  sm:text-sm text-hh-lightgray">
              We have sent an email to{" "}
              <span className="text-white">
                {" "}
                <strong>{user?.email}</strong>.{" "}
              </span>
            </p>
            <p className="font-normal text-base pl-8 pt-4  md:text-base sm:text-sm text-hh-lightgray">
              Please wait a couple of weeks to hear back from us regarding your
              application.
            </p>
            <p className="font-normal text-base px-8 pt-4  md:text-base sm:text-sm text-hh-lightgray">
              In the meantime, follow us on social media:
            </p>
            <div className="px-8 pt-6 items-center">
              <div className="flex flex-row flex-wrap justify-center">
                {socials.map((s, i) => (
                  <div key={i} className="px-4">
                    <Fade delay={500}>
                      <a href={s.href}>
                        <img
                          src={s.src}
                          alt={s.id}
                          className="w-12 hover:cursor-pointer sm:w-8 duration-500 hover:opacity-50 "
                        />
                      </a>
                    </Fade>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </ContainerApp>
  );
};

export default Success;
