import React from "react";
import Link from "next/link";
import { Icon } from "./Icon";
import { AiOutlineRight } from "react-icons/ai";
import BlogProfile from "./BlogProfile";

interface Props {
  category: string;
  date: string;
  author: string;
  affiliation: string;
  pfp: string;
  image: string;
  title: string;
  desc: string;
  page: string;
  color: string;
}

const BlogChunk: React.FC<Props> = ({ category, date, author, affiliation, pfp, image, title, desc, page, color }) => {
  const textColor = (color) === "white" ? "text-white" : "text-black"
  
  return (
    <div className="flex flex-col sm:space-x-0 md:flex-row xl:space-y-0 items-center justify-between p-6 h-full overflow-y-hidden">
      {/* Text */}
      <div className="flex flex-col md:items-start text-left min-w-3/5">
        <div className="font-semibold text-xs lg:text-md mr-0 md:mr-8 text-hh-purple lg:mr-16">{category}</div>
        <div className="font-light text-black text-[8px] lg:text-[10px]">{date}</div>
        <div className="font-semibold text-black lg:text-[1.5rem] md:text-xl text-lg leading-tight mt-2">{title}</div>
        {/* Paragraph */}
        <div className="invisible md:visible h-0 md:h-auto">
          <BlogProfile author={author} affiliation={affiliation} pfp={pfp} />
        </div>
        <div className="font-light text-black sm:text-[9pt] lg:text-[10pt] md:w-7/8 lg:w-[300px] xl:w-[380px] h-[90px] lg:h-[100px] mt-4 leading-tight overflow-hidden overflow-ellipsis h-full text-left lg:text-justify mr-4">
          {desc}
        </div>
        <Link href={page} className="mt-2 font-medium text-sm flex flex-row gap-x-1 items-center text-hh-purple hover:cursor-pointer duration-500 hover:opacity-70">
          Read more <AiOutlineRight />
        </Link>
      </div>
      <img src={image} alt={title} className="relative w-2/5 mr-4 h-0 md:h-auto" />
    </div>
  );
};

export default BlogChunk;
