import Day from "./Day";
//@ts-ignore
import Fade from "react-reveal/Fade";
import { days } from "../data/days";

const Days = () => {
  return (
    <div
      id="explore"
      className="flex flex-col space-y-16 justify-center items-center sm:pt-24 2xl:pt-40"
    >
      <Fade delay={2250}>
        <div className="font-medium sm:text-2xl 2xl:text-3xl opacity-75 sm:pb-8 2xl:pb-24 text-[#ddd] text-center sm:px-4">{`EXPLORE THE HEALTH{HACKS} WAY`}</div>
      </Fade>
      {days.map((v, i) => (
        <div key={i}>
          <Fade delay={1000}>
            <Day embed={v.embed} id={v.id} title={v.title} desc={v.desc} />
          </Fade>
        </div>
      ))}
    </div>
  );
};

export default Days;
