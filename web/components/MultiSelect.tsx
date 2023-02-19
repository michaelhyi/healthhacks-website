import { Checkbox } from "@chakra-ui/react";
import React from "react";

interface Props {
  name: string;
  options: string[];
  value: string;
  setValue: (v: string) => void;
}

const MultiSelect: React.FC<Props> = ({ name, options, value, setValue }) => {
  return (
    <div>
      <div className="flex">
        <div className="md:w-[100%] lg:w-[50vw]">
          <div className={`mt-8 mb-2 lg:text-lg md:text-small font-semibold`}>
            {name}
          </div>
          <div className="flex flex-col space-y-2">
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
        </div>
      </div>
    </div>
  );
};

export default MultiSelect;
