const Head = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-12">
      <img className="w-[30vw]" src="/health{hacks} - Website Header.PNG" />
      <div className="relative bottom-36 flex flex-col items-center">
        <div className="text-6xl font-semibold text-center w-[30vw]">
          Assembling the future innovators of medicine.
        </div>
        <div className="pt-8 font-medium text-2xl w-[20vw] text-center">{`health{hacks} invites the most empathy-driven and diverse creators to revolutionize healthcare for 48 hours`}</div>
        <div className="mt-4 hover:cursor-pointer duration-500 hover:opacity-50 text-black bg-white py-3 px-4 rounded-3xl">
          Start Now
        </div>
      </div>
    </div>
  );
};

export default Head;
