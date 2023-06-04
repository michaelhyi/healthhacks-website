"use client";

import { sponsors } from "../data/sponsors";

const Sponsors = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="pt-32 font-semibold sm:text-2xl md:text-3xl bg-clip-text text-transparent bg-gradient-to-r to-[#00B59D] from-[#CB47F4] ">
        We Have Been Backed By
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-2 md:gap-8 mt-12 justify-center items-center">
        {sponsors.map((v, i) => (
          <div key={i}>
            <a
              href={v.href}
              className={`w-[200px] h-[150px] flex items-center justify-center`}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={v.src}
                className={`hover:cursor-pointer duration-500 hover:opacity-75 filter brightness-0 invert`}
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
