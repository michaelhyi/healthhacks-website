import Day from "./Day";
//@ts-ignore
import Fade from "react-reveal/Fade";
import { days } from "../data/days";


const Days = () => {
  return (
    <div
      id="explore"
      className="flex flex-col justify-center items-center"
    >
      <Fade delay={250}>
        <div className="font-medium  text-lg md:text-xl 2xl:text-2xl opacity-75 text-[#ccc] text-center mt-16 mb-0 md:mb-8">{`EXPLORE THE HEALTH{HACKS} WAY`}</div>
      </Fade>
      {days.map((v, i) => (
        <div className="my-0" key={i}>
          <Fade delay={250}>
            <Day id={v.id} title={v.title} desc={v.desc} icon_name={v.icon_name} />
          </Fade>
        </div>
      ))}
    </div>
  );
};

export default Days;
