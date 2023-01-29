import React, { Dispatch, SetStateAction } from "react";

interface Props {
  label: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  error: string;
}

const Input: React.FC<Props> = ({ label, value, setValue, error }) => {
  return (
    <div>
      <div
        className={`mt-4 mb-2 ${
          error.length > 0 ? "text-red-400" : "text-white"
        }`}
      >
        {label}
      </div>
      <input
        type={`${label === "Password" ? "password" : ""}`}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={`w-full bg-black border-[0.5px] ${
          error.length > 0 ? "border-red-400" : "border-white"
        } py-2 rounded-xl px-4`}
      />
      <div className="mt-4 font-poppins font-semibold text-red-400 text-sm">
        {error}
      </div>
    </div>
  );
};

export default Input;
