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
      <Menu matchWidth={true} closeOnBlur={true}>
        <MenuButton as={Button} border='1px' color="black" bg="#202020" opacity='95%' w='100%' borderColor="white" borderRadius='0.75rem' minH='42px' _hover={{ opacity: '75%' }} _expanded={{ bg: "#202020" }}>
          <div className="flex items-center justify-between">
            <div className="text-white">{selectedState.length > 0 ? selectedState : "Select"}</div>
            <AiFillCaretDown color="white"/>
          </div>
        </MenuButton>
        <MenuList
          color="black"
          overflowY={"scroll"}
          overflow="auto"
          zIndex="dropdown"
          maxHeight="200px"
          bg="#F5F5F5FF"
          backdropBlur='2px'
          borderRadius='0.75rem'
          border='1px'
        >
          {options.map((v, i) => (
            <MenuItem
              key={i.toString()}
              onClick={() => setSelectedState(v)}
              backdropBlur='2px'
              bg="#00000000"
              _hover={{ bg: "#00000011" }}
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
