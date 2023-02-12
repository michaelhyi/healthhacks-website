import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useContext } from "react";
import { Link as SmoothLink } from "react-scroll";
import { AiFillCaretDown, AiOutlineRight } from "react-icons/ai";
import Context from "../utils/context";
import Logo from "./Logo";
import NavbarLink from "./NavbarLink";

const NavbarApp = () => {
  const { user, setUser } = useContext(Context);
  const router = useRouter();

  return (
    <div className="flex sm:h-[256px sm:flex-col sm:space-y-12 md:space-y-0 md:flex-row items-center p-8 w-full sticky top-0 z-50 bg-black">
      <Logo />
    </div>
  );
};

export default NavbarApp;
