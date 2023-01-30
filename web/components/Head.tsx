import Link from "next/link";
import { AiOutlineRight } from "react-icons/ai";
//@ts-ignore
import Fade from "react-reveal/Fade";

const Head = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-12">
      <Fade delay={1000} up distance="25px">
        <div className="relative">
          <img className="w-[30vw]" src="/health{hacks} - Website Header.PNG" />
          <div className="absolute bottom-6 text-7xl font-bold text-center w-[30vw]">
            Assembling the future innovators of medicine.
          </div>
        </div>
      </Fade>
      <div className="flex flex-col items-center">
        <Fade delay={1250} up distance="25px">
          <div className="pt-8 font-medium text-2xl w-[20vw] text-center text-[#aaa]">{`health{hacks} invites the most empathy-driven and diverse creators to revolutionize healthcare for 48 hours`}</div>
        </Fade>
        <Link href="/register">
          <div className="hover:cursor-pointer duration-500 hover:opacity-50">
            <Fade delay={1500} up distance="25px">
              <div className="mt-12 flex space-x-1 items-center justify-center text-black bg-white py-3 px-6 rounded-3xl">
                <div className="font-semibold">Start Now</div>
                <div className="opacity-75">
                  <AiOutlineRight size={15} />
                </div>
              </div>
            </Fade>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Head;
