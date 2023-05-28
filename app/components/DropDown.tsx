"use client";

import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { AiFillCaretDown } from "react-icons/ai";

interface Props {
  name: string;
  options: string[];
  value: string;
  error: string;
  setValue: (v: string) => void;
}

const DropDown: React.FC<Props> = ({
  name,
  options,
  value,
  setValue,
  error,
}) => {
  return (
    <div>
      <div
        className={`mt-8 mb-2 lg:text-lg md:text-small font-semibold ${
          error.length > 0 ? "text-red-400" : "text-white"
        }`}
      >
        {" "}
        {name}{" "}
      </div>
      <Menu matchWidth={true} closeOnBlur={true}>
        <MenuButton
          as={Button}
          border="1px"
          color="black"
          bg="#202020"
          opacity="95%"
          w="100%"
          borderColor={`${error.length > 0 ? "#F87171" : "white"}`}
          borderRadius="0.75rem"
          minH="42px"
          _hover={{ opacity: "75%" }}
          _expanded={{ bg: "#202020" }}
        >
          <div className="flex items-center justify-between">
            <div
              className={`${error.length > 0 ? "text-red-400" : "text-white"}`}
            >
              {value.length > 0 ? value : "Select"}
            </div>
            <AiFillCaretDown color="white" />
          </div>
        </MenuButton>
        <MenuList
          color="black"
          overflowY={"scroll"}
          overflow="auto"
          zIndex="dropdown"
          maxHeight="200px"
          bg="#F5F5F5FF"
          backdropBlur="2px"
          borderRadius="0.75rem"
          border="1px"
        >
          {options.map((v, i) => (
            <MenuItem
              key={i.toString()}
              onClick={() => setValue(v)}
              backdropBlur="2px"
              bg="#00000000"
              _hover={{ bg: "#00000011" }}
            >
              {v}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
      {error && error.length > 0 && (
        <div className="mt-4 font-poppins font-semibold text-red-400 text-sm">
          {error}
        </div>
      )}
    </div>
  );
};

export default DropDown;
