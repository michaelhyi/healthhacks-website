import { sponsors } from "../data/sponsors2023";

//@ts-ignore
import Fade from "react-reveal/Fade";

const Sponsors = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20 mx-4">
      <Fade up delay={500} distance="24px">
        <div className="font-medium text-md md:text-xl 2xl:text-2xl text-[#ccc]">
          {`HEALTH{HACKS} 2023 @ STANFORD`} IS BACKED BY
        </div>
      </Fade>
      <Fade up delay={500} distance="24px">
        <div className="infosys mt-6">
          <a
            href="https://www.infosys.com/"
            className="flex items-center justify-center"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/logos/Infosys.png"
              className={`hover:cursor-pointer duration-500 hover:opacity-75 filter brightness-0 invert sm:max-h-[35px] md:max-h-[60px]`}
            />
          </a>
        </div>
      </Fade>
      <div className="flex flex-row sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-4 sm:gap-4 md:gap-8 mt-6 justify-center items-center">
        {sponsors.map((v, i) => (
          <div key={i}>
            <Fade up delay={500 + 100 * i} distance="24px">
              <a
                href={v.href}
                className="max-h-[150px] flex items-center justify-center"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={v.src}
                  className={`hover:cursor-pointer duration-500 hover:opacity-75 filter brightness-0 invert sm:max-h-[25px] md:max-h-[35px]`}
                />
              </a>
            </Fade>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;