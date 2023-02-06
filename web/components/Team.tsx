import { team } from "../data/team";
//@ts-ignore
import Fade from "react-reveal/Fade";

const Team = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Fade up delay={250} distance="24px">
        <div className="pt-32 font-semibold text-3xl bg-clip-text text-transparent bg-gradient-to-r to-[#00B59D] from-[#CB47F4] ">
          Meet the {`health{hacks}`} Team
        </div>
      </Fade>
      <div className="grid grid-cols-5 gap-6 mt-12 justify-center items-center">
        {team.map((v, i) => (
          <Fade up delay={500 + 100 * i} distance="24px">
            <div
              className={`flex flex-col text-center items-center ${
                i === 5 ? "col-start-2" : ""
              }`}
            >
              <img src={v.pfp} className="w-[5vw] rounded-full mb-4" />
              <div className="font-bold">{v.name}</div>
              <div>{v.position}</div>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default Team;
