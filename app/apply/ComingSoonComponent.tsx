"use client";

import ContainerApp from "../components/ContainerApp";
import { socials } from "../data/socials";
import { UserType } from "../types";

interface Props {
  user?: UserType | null;
}

const ComingSoonComponent: React.FC<Props> = ({ user }) => {
  return (
    <ContainerApp>
      <div className="flex flex-col items-center md:pb-8 md:pt-8 xl:pt-16 sm:pt-16 w-screen h-[100%]">
        <div className="max-w-lg align-middle">
          <h2 className="font-semibold text-4xl w-lg px-8 pt-8 text-left ">
            Applications will open on June 9th! Stay tuned...
          </h2>
          <p className="font-normal text-base px-8 pt-6  md:text-base  sm:text-sm text-hh-lightgray">
            Please follow our social media to stay up to date with future
            events, and hope to see you next time!
          </p>
          <div className="px-8 pt-6 items-center">
            <div className="flex flex-row flex-wrap justify-center">
              {socials.map((s, i) => (
                <div key={i} className="px-4">
                  <a href={s.href} target="_blank" rel="noreferrer">
                    <img
                      src={s.src}
                      alt={s.id}
                      className="w-12 hover:cursor-pointer sm:w-8 duration-500 hover:opacity-50 "
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ContainerApp>
  );
};

export default ComingSoonComponent;
