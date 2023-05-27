"use client";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface Props {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const Input: React.FC<Props> = ({
  id,
  label,
  type = "text",
  disabled,
  register,
  required,
  errors,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label
        className={`mt-4 mb-2 ${errors[id] ? "text-red-400" : "text-white"}`}
      >
        {label}
      </label>
      <input
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder=" "
        type={type}
        className={`w-full bg-black border-[0.5px] ${
          errors[id] ? "border-red-400" : "border-white"
        } py-2 rounded-xl px-4 text-white`}
      />
    </div>
  );
};

export default Input;
