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
        <div className="font-semibold sm:text-xl 2xl:text-3xl opacity-75 sm:pb-8 2xl:pb-24">{`EXPLORE THE HEALTH{HACKS} WAY`}</div>
      </Fade>
      {days.map((v, i) => (
        <Fade key={i} delay={1000}>
          <Day id={v.id} title={v.title} desc={v.desc} />
        </Fade>
      ))}
    </div>
  );
};

export default Days;
