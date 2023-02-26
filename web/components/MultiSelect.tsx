import { Checkbox } from "@chakra-ui/react";
import React from "react";

interface Props {
  name: string;
  options: string[];
  value: string;
  setValue: (v: string) => void;
  error: string;
}

const MultiSelect: React.FC<Props> = ({
  name,
  options,
  value,
  setValue,
  error,
}) => {
  return (
    <div>
      <div className="flex">
        <div className="md:w-[100%] lg:w-[50vw]">
          <div
            className={`mt-8 mb-2 lg:text-lg md:text-small font-semibold ${
              error.length > 0 ? "text-red-400" : "text-white"
            }`}
          >
            {name}
          </div>
          <div
            className={`flex flex-col space-y-2 ${
              error.length > 0 ? "text-red-400" : "text-white"
            }`}
          >
            {options.map((v, i) => (
              <Checkbox
                isChecked={v === value}
                onChange={(e) => {
                  if (e.target.checked) {
                    setValue(v);
                  }
                }}
                key={i.toString()}
                colorScheme="purple"
                spacing="1rem"
              >
                {v}
              </Checkbox>
            ))}
          </div>
          {error && error.length > 0 && (
            <div className="mt-4 font-poppins font-semibold text-red-400 text-sm">
              {error}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MultiSelect;
