"use client";

import { Checkbox } from "@chakra-ui/react";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

interface Props {
  name: string;
  options: string[];
  values: string[];
  setValues: (v: string) => void;
  error: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
}

const MultiSelect: React.FC<Props> = ({
  name,
  options,
  values,
  setValues,
  error,
}) => {
  return (
    <div>
      <div className="flex">
        <div className="md:w-[100%] lg:w-[50vw]">
          <div
            className={`mt-8 mb-2 lg:text-lg md:text-small font-semibold ${
              error ? "text-red-400" : "text-white"
            }`}
          >
            {name}
          </div>
          <div
            className={`flex flex-col space-y-2 ${
              error ? "text-red-400" : "text-white"
            }`}
          >
            {options.map((v, i) => (
              <Checkbox
                isChecked={values.includes(v)}
                onChange={() => setValues(v)}
                key={i.toString()}
                colorScheme="purple"
                spacing="1rem"
              >
                {v}
              </Checkbox>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiSelect;
