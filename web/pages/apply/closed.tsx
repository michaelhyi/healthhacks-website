import ContainerApp from "../../components/ContainerApp";
import { socials } from "../../data/socials";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

//@ts-ignore
import Fade from "react-reveal/Fade";

// This page is for when we close applications for each event

const Closed = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await localStorage.getItem("user");
      if (response) {
        setUser(JSON.parse(response));
        setFetching(false);
      } else {
        router.push("/login");
        return;
      }
    })();
  }, [router.query]);

  if (fetching) {
    return (
      <ContainerApp>
        <></>
      </ContainerApp>
    );
  }

  return (
    <ContainerApp>
      <Fade delay={500} up distance="24px">
        <div className="flex flex-col items-center md:pb-8 md:pt-8 xl:pt-16 sm:pt-16 w-screen h-[100%]">
          <div className="max-w-md align-middle">
            <h2 className="font-semibold text-4xl w-lg px-8 pt-8 text-left ">
              We have closed our applications.
            </h2>
            <p className="font-normal text-base px-8 pt-6  md:text-base  sm:text-sm text-hh-lightgray">
              Please follow our social media to stay up to date with future events, and hope to see you next time!
            </p>
            <div className="px-8 pt-6 items-center">
              <div className="flex flex-row flex-wrap justify-center">
                {socials.map((s, i) => (
                  <div key={i} className="px-4">
                    <Fade delay={500}>
                      <a href={s.href} target="_blank" rel="noreferrer">
                        <img
                          src={s.src}
                          alt={s.id}
                          className="w-12 hover:cursor-pointer sm:w-8 duration-500 hover:opacity-50 "
                        />
                      </a>
                    </Fade>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </ContainerApp>
  );
};

export default Closed;
