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
  textarea?: boolean;
  value: string;
}

const ApplicationInput: React.FC<Props> = ({
  id,
  label,
  type = "text",
  disabled,
  required,
  register,
  errors,
  textarea,
  value,
}) => {
  return (
    <div>
      <div
        className={`mt-8 mb-2 lg:text-lg md:text-small font-semibold ${
          errors[id] ? "text-red-400" : "text-white"
        }`}
      >
        {label}
      </div>
      {textarea ? (
        <textarea
          id={id}
          {...register(id, { required })}
          disabled={disabled}
          placeholder=" "
          defaultValue={value}
          className={`w-full bg-[#202020] border-[0.5px] ${
            errors[id] ? "border-red-400" : "border-white"
          } py-2 rounded-xl px-4 min-h-[25vh]`}
        />
      ) : (
        <input
          id={id}
          {...register(id, { required })}
          type={type}
          disabled={disabled}
          placeholder=" "
          defaultValue={value}
          className={`w-full  bg-[#202020] border-[1px] ${
            errors[id] ? "border-red-400" : "border-white"
          } py-2 rounded-xl px-4`}
        />
      )}
    </div>
  );
};

export default ApplicationInput;
