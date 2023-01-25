import React from "react";

interface Props {
  name: string;
  value: string;
}

const Stat: React.FC<Props> = ({ name, value }) => {
  return (
    <div className="flex flex-col space-y-2 text-center">
      <div className="font-semibold text-6xl">{value}</div>
      <div className="font-medium opacity-50 text-lg">{name}</div>
    </div>
  );
};

export default Stat;
