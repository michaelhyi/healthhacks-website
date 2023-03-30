import Link from "next/link";
import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import { Icon } from "./Icon";

interface Props {
  role: string;
  location: string;
  page: string;
  icon_name: string;
}

const JobChunk: React.FC<Props> = ({
  role,
  location,
  page,
  icon_name,
}) => {

  return (
    <Link
      href={page}
    >
      <div className="rounded-lg border border-white hover:shadow hover:scale-[1.02] transform-gpu transition-transform duration-150">
        <div className="flex flex-row sm:space-x-0 xl:space-y-0 items-center justify-start p-4 h-full overflow-y-hidden gap-8">
          {/* Text */}
          <div className="p-[0px] ml-4"><Icon nameIcon={icon_name} propsIcon={{ size: 25, color: "#ccc" }} /></div>
          <div className="flex flex-col md:items-start text-left min-w-3/5">
            <div className="font-semibold text-sm lg:text-md text-white">
              {role}
            </div>
            <div className="font-light text-white text-xs md:text-sm mt-1">
              {location}
            </div>
            <Link
              href={page}
              className="mt-2 font-medium text-sm flex flex-row gap-x-1 items-center text-hh-purple hover:cursor-pointer duration-500 hover:opacity-70"
            >
              Read more <AiOutlineRight />
            </Link>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default JobChunk;
