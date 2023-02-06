import { sponsors } from "../data/sponsors";
//@ts-ignore
import Fade from "react-reveal/Fade";

const Sponsors = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Fade up delay={2500} distance="24px">
        <div className="pt-32 font-semibold text-3xl bg-clip-text text-transparent bg-gradient-to-r to-[#00B59D] from-[#CB47F4] ">
          We Have Been Backed By
        </div>
      </Fade>
      <div className="grid grid-cols-4 gap-6 mt-12 justify-center items-center">
        {sponsors.map((v, i) => (
          <Fade up delay={500 + 100 * i} distance="24px">
            <a
              href={v.href}
              className={`w-[10vw] h-[10vh] flex items-center justify-center ${
                i === 16 && "col-start-2"
              }`}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={v.src}
                className={`hover:cursor-pointer duration-500 hover:opacity-50 h-[${v.height}vh] filter brightness-0 invert`}
              />
            </a>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
