import React from "react";
import { BsFillPersonFill } from "react-icons/bs";

interface Props {
  user: {
    firstName: string;
    lastName: string;
    email: string;
  };
}

const TeamProfile: React.FC<Props> = ({ user }) => {
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
        </div>
      </div>
    </div>
  );
};

export default TeamProfile;
