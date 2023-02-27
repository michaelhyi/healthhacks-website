import { useRouter } from "next/router";
import Logo from "./Logo";

const NavbarApp = () => {
  const router = useRouter();

  return (
    <div className="flex sm:h-[256px sm:flex-col sm:space-y-12 md:space-y-0 md:flex-row items-center p-8 w-full sticky top-0 z-50 bg-black">
      <Logo />
    </div>
  );
};

export default NavbarApp;
