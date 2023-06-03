import ContainerApp from "@/app/components/ContainerApp";
import { useRouter } from "next/router";

const Failure = () => {
  const router = useRouter();

  return (
    <ContainerApp>
      <div className="flex flex-col items-center md:pb-8 md:pt-8 xl:pt-16 sm:pt-16 w-screen h-[100%]">
        <div className="max-w-md align-middle">
          <h2 className="font-semibold text-4xl w-lg px-8 pt-8 text-left ">
            There was a problem submitting your confirmation! Please make sure
            that all payment information is valid.
          </h2>

          <button
            onClick={() => router.push("/confirm")}
            className="mx-8 mt-6 hover:cursor-pointer duration-500 hover:opacity-50 text-center bg-hh-purple text-white px-6 py-3 mb-8 w-auto rounded-xl text-sm font-medium"
            type="button"
          >
            Go Back to Confirmation
          </button>
        </div>
      </div>
    </ContainerApp>
  );
};

export default Failure;
