//@ts-ignore
import Fade from "react-reveal/Fade";

const Headquarters = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <Fade delay={2000}>
        <div className="flex flex-col items-center justify-center text-center border-y-[0.5px] border-white border-opacity-25 mt-32 bg-gradient-to-r from-[#FF7448] to-[#6248FF] p-1 rounded-xl">
          <div className="h-full w-full flex flex-col items-center justify-center py-16 px-64 bg-black rounded-xl">
            <div className="font-semibold text-3xl opacity-50">
              Headquarters:
            </div>
            <div className="mt-4 font-semibold text-5xl">
              Stanford University
            </div>
            <div className="flex items-center space-x-16 mt-12 ">
              <div className="flex flex-col space-y-2 text-center">
                <div className="font-semibold text-6xl">38</div>
                <div className="font-medium opacity-50 text-lg">
                  TEAM MEMBERS
                </div>
              </div>
              <div className="border-l-2 border-white h-[125px] opacity-50" />
              <div className="flex flex-col space-y-2 text-center">
                <div className="font-semibold text-6xl">2020</div>
                <div className="font-medium opacity-50 text-lg">FOUNDED</div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Headquarters;
