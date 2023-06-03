"use client";

import ContainerApp from "@/app/components/ContainerApp";
import { socials } from "@/app/data/socials";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { UserType } from "../../types";

interface Props {
  user: UserType | null;
}

const SuccessComponent: React.FC<Props> = ({ user }) => {
  const params = useSearchParams();

  useEffect(() => {
    if (params) {
      (async () => {
        await axios.post("/api/payment", {
          userId: params.get("userId"),
          inPerson: params.get("inPerson"),
          firstTrack: params.get("firstTrack"),
          secondTrack: params.get("secondTrack"),
          liabilitySignature: params.get("liabilitySignature"),
          liabilityDate: JSON.parse(params.get("liabilityDate")!).date,
          other: params.get("other"),
          paid: params.get("paid"),
          token: params.get("token"),
        });
      })();
    }
  }, [params]);

  return (
    <ContainerApp>
      <div className="flex flex-col items-center md:pb-16 md:pt-8 xl:pt-0 sm:pt-0 w-screen">
        <img
          className="md:w-[275px] sm:w-[200px]"
          src="\circle1.png"
          alt="globe"
        />
        <div className="max-w-md">
          <h2 className="font-semibold text-4xl w-lg px-8 pt-8 text-center ">
            Thanks for your confirmation!
          </h2>
          <p className="font-normal text-base px-8 pt-4  md:text-base  sm:text-sm text-hh-lightgray">
            We have sent an email to{" "}
            <span className="text-white">
              {" "}
              <strong>{user?.email}</strong>.{" "}
            </span>
          </p>
          <p className="font-normal text-base pl-8 pt-4  md:text-base sm:text-sm text-hh-lightgray">
            See you in a couple of weeks, and we can&apos;t wait for you to come
            to our event
          </p>
          <p className="font-normal text-base px-8 pt-4  md:text-base sm:text-sm text-hh-lightgray">
            In the meantime, follow us on social media:
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

export default SuccessComponent;
