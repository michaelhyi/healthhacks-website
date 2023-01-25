const Navbar = () => {
  return (
    <div className="flex items-center p-8 w-full sticky top-0 z-50 bg-black ">
      <div className="flex items-center space-x-1">
        <img src="/Official Logo.JPEG" className="h-[50px] w-[50px]" />
        <div className="font-semibold text-xl">{`health{hacks}`}</div>
      </div>
      <div className="absolute left-0 right-0 justify-center mx-auto flex items-center space-x-4">
        <div className="opacity-50 hover:cursor-pointer duration-500 hover:opacity-100">
          Explore
        </div>
        <div className="opacity-50 hover:cursor-pointer duration-500 hover:opacity-100">
          Team
        </div>
        <div className="opacity-50 hover:cursor-pointer duration-500 hover:opacity-100">
          Blog
        </div>
      </div>
      <div className="flex items-center space-x-4 absolute right-8 ">
        <div>Login</div>
        <div className="hover:cursor-pointer duration-500 hover:opacity-50 text-black bg-white py-3 px-4 rounded-3xl">
          Start Now
        </div>
      </div>
    </div>
  );
};

export default Navbar;
