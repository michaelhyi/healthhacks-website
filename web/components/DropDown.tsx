import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import { AiFillCaretDown } from "react-icons/ai";
import React from "react";
import { useState } from "react";

interface Props {
  name: string;
  options: string[];
}

const DropDown: React.FC<Props> = ({ name, options }) => {
  const [selectedState, setSelectedState] = useState("");

  return (
    <div>
      <div className={`mt-8 mb-2 lg:text-lg md:text-small font-semibold`}> {name} </div>
      <Menu matchWidth={true}>
        <MenuButton as={Button} color="black" bg="white" w='100%' >
          <div className="flex items-center justify-between">
            <div>{selectedState.length > 0 ? selectedState : "Select"}</div>
            <AiFillCaretDown />
          </div>
        </MenuButton>
        <MenuList
          color="black"
          overflowY={"scroll"}
          overflow="auto"
          zIndex="dropdown"
          maxHeight="200px"
        >
          {options.map((v, i) => (
            <MenuItem
              key={i.toString()}
              onClick={() => setSelectedState(v)}
            >
              {v}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </div>
  );
};

export default DropDown;
