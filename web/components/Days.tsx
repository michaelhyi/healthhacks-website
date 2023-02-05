import Day from "./Day";
//@ts-ignore
import Fade from "react-reveal/Fade";
import { days } from "../data/days";

const Days = () => {
  return (
    <div
      id="explore"
      className="flex flex-col space-y-16 justify-center items-center pt-16"
    >
      <Fade delay={2250}>
        <div className="font-semibold text-xl opacity-75">{`EXPLORE THE HEALTH{HACKS} WAY`}</div>
      </Fade>
      {days.map((v, i) => (
        <Fade delay={1000}>
          <Day key={i} id={v.id} title={v.title} desc={v.desc} />
        </Fade>
      ))}
    </div>
  );
};

export default Days;
