import React from "react";

interface Props {
  label: string;
}

const Input: React.FC<Props> = ({ label }) => {
  return (
    <div>
      <div className="mt-4 mb-2">{label}</div>
      <input className="w-full bg-black border-[0.5px] border-white py-2 rounded-xl px-4" />
    </div>
  );
};

export default Input;
