import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { TiDelete } from "react-icons/ti";
import { UserType } from "../utils/types";

interface Props {
  user: {
    firstName: string;
    lastName: string;
    email: string;
  };
  currentUser: UserType;
  profiles: {
    firstName: string;
    lastName: string;
    email: string;
  }[];
  setProfiles: React.Dispatch<
    React.SetStateAction<
      | {
        firstName: string;
        lastName: string;
        email: string;
      }[]
      | null
    >
  >;
}

const TeamProfile: React.FC<Props> = ({
  user,
  currentUser,
  profiles,
  setProfiles,
}) => {
  const handleDelete = () => {
    setProfiles(profiles.filter((v) => v.email !== user.email));
  };

  return (
    <div className="relative">
      <div className="rounded-2xl border-2 border-dashed border-gray-400 p-4 w-inherit">
        <div className="flex space-x-4">
          <BsFillPersonFill size={75} className="min-w-[75px]" />
          <div className="flex flex-col justify-center ">
            <div className="text-lg lg:text-2xl font-bold">
              {user.firstName}&nbsp;
              {user.lastName}
            </div>
            <div className="text-xs lg:text-base text-[#b9b9b9]">{user.email}</div>
          </div>
        </div>
        {user.email !== currentUser.email && (
          <button
            onClick={handleDelete}
            className="duration-500 hover:opacity-80 absolute -top-[12px] -right-[12px]"
          >
            <TiDelete size={30} />
          </button>
        )}
      </div>
    </div>
  );
};

export default TeamProfile;
