import React from "react";

interface Props {
  firstName: string;
  lastName: string;
  email: string;
}

const TeamProfile: React.FC<Props> = ({ firstName, lastName, email }) => {
  return (
    <div className="rounded-2xl border-2 border-dashed border-gray-400">
      <div className="text-xl">
        {firstName}&nbsp;
        {lastName}
      </div>
      <div>{email}</div>
    </div>
  );
};

export default TeamProfile;
