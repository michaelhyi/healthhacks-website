//@ts-ignore
import Fade from "react-reveal/Fade";

const Headquarters = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <Fade delay={500}>
        <div className="flex flex-col items-center justify-center text-center border-y-[0.5px] border-white border-opacity-25 mt-32 bg-gradient-to-r from-[#FF7448] to-[#6248FF] p-1 rounded-xl sm:h-[512px] sm:w-[384px] md:h-[384px] md:w-[512px] xl:h-[512px] xl:w-[1024px]">
          <div className="h-full w-full flex flex-col items-center justify-center bg-black rounded-xl">
            <div className="font-semibold sm:text-xl md:text-2xl xl:text-3xl opacity-50">
              Headquarters:
            </div>
            <div className="mt-4 font-semibold sm:text-2xl md:text-4xl xl:text-5xl">
              Stanford University
            </div>
            <div className="flex sm:flex-col sm:space-x-0 md:flex-row items-center md:space-x-12 xl:space-x-16 mt-12 ">
              <div className="flex flex-col space-y-2 text-center sm:pb-8 md:pb-0">
                <div className="font-semibold sm:text-4xl md:text-6xl">38</div>
                <div className="font-medium opacity-50 sm:text-base md:text-lg">
                  TEAM MEMBERS
                </div>
              </div>
              <div className="border-l-2 border-white sm:h-[100px] md:h-[125px] opacity-50" />
              <div className="flex flex-col space-y-2 text-center sm:pt-8 md:pt-0">
                <div className="font-semibold sm:text-4xl md:text-6xl">
                  2020
                </div>
                <div className="font-medium opacity-50 sm:text-base md:text-lg">
                  FOUNDED
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Headquarters;
