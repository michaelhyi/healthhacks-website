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
    <div className="rounded-2xl border-2 border-dashed border-gray-400 p-4 w-[512px]">
      <div className="flex space-x-4">
        <BsFillPersonFill size={100} />
        <div>
          <div className="text-3xl font-bold">
            {user.firstName}&nbsp;
            {user.lastName}
          </div>
          <div>{user.email}</div>
          {user.email !== currentUser.email && (
            <button
              onClick={handleDelete}
              className="duration-500 hover:opacity-50"
            >
              <TiDelete size={25} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamProfile;
