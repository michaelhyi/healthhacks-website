import {
  Checkbox,
  CheckboxGroup
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";

interface Props {
  name: string;
  options: string[];
}

const MultiSelect: React.FC<Props> = ({ name, options }) => {
  const [selectedState, setSelectedState] = useState("");

  return (
    <div>
      <div className="flex">
        <div className="md:w-[100%] lg:w-[50vw]">
          <div className={`mt-8 mb-2 lg:text-lg md:text-small font-semibold`}>{name}</div>
          <div className="flex flex-col space-y-2">
            {options.map((v, i) => (
              <Checkbox
                key={i.toString()}
                onClick={() => setSelectedState(v)}
                colorScheme='black'
                spacing='1rem'
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
