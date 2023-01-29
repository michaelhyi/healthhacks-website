import React, { Dispatch, SetStateAction } from "react";

interface Props {
  label: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

const Input: React.FC<Props> = ({ label, value, setValue }) => {
  return (
    <div>
      <div className="mt-4 mb-2">{label}</div>
      <input
        type={`${label === "Password" ? "password" : ""}`}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full bg-black border-[0.5px] border-white py-2 rounded-xl px-4"
      />
    </div>
  );
};

export default Input;
