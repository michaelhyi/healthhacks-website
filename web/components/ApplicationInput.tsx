import React, { Dispatch, SetStateAction } from "react";

interface Props {
  label: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  error?: string;
  textarea?: boolean;
  userId: number;
}

const ApplicationInput: React.FC<Props> = ({
  label,
  value,
  setValue,
  error,
  textarea,
  userId,
}) => {
  return (
    <div>
      <div
        className={`mt-4 mb-2 ${
          error && error.length > 0 ? "text-red-400" : "text-white"
        }`}
      >
        {label}
      </div>
      {textarea ? (
        <textarea
          value={value}
          onChange={async (e) => {
            setValue(e.target.value);
          }}
          className={`w-full bg-black border-[0.5px] ${
            error && error.length > 0 ? "border-red-400" : "border-white"
          } py-2 rounded-xl px-4 min-h-[25vh]`}
        />
      ) : (
        <input
          type={`${label === "Password" ? "password" : ""}`}
          value={value}
          onChange={async (e) => {
            setValue(e.target.value);
          }}
          className={`w-full bg-black border-[0.5px] ${
            error && error.length > 0 ? "border-red-400" : "border-white"
          } py-2 rounded-xl px-4`}
        />
      )}

      {error && error.length > 0 && (
        <div className="mt-4 font-poppins font-semibold text-red-400 text-sm">
          {error}
        </div>
      )}
    </div>
  );
};

export default ApplicationInput;
