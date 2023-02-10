import { useRouter } from "next/router";
import { useContext } from "react";
import Container from "../../components/Container";
import Context from "../../utils/context";

const Disclaimer = () => {
  const router = useRouter();
  const { user } = useContext(Context);

  return (
    <Container>
      {user ? (
        <div>
          <div>disclaimer</div>
          <button
            onClick={() => router.push("/application/1")}
            className="mt-6 mb-24 hover:cursor-pointer duration-500 hover:opacity-50 text-center bg-blue-500 text-white px-6 py-4 rounded-xl text-sm font-bold"
          >
            Continue
          </button>
        </div>
      ) : (
        <div>You must be signed in</div>
      )}
    </Container>
  );
};

export default Disclaimer;
