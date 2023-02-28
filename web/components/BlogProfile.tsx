import React from "react";

interface Props {
  author: string;
  affiliation: string;
  pfp: string;
}

const BlogProfile: React.FC<Props> = ({ author, affiliation, pfp }) => {
  return (
    <div className="flex flex-row items-center gap-x-2 mt-4">
      <div className="w-[30px] h-[30px]">
        <img src={pfp} alt={author} className="rounded-full" />
      </div>
      <div className="leading-tight text-xs font-thin text-[#555]">
        <b className="font-medium">{author}</b>
        <br /> {affiliation}
      </div>
    </div>
  );
};

export default BlogProfile;
