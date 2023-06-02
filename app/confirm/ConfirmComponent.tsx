"use client";

import { tracks } from "@/app/data/tracks";
import { Radio, RadioGroup, Spinner, useToast } from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useMemo, useState } from "react";
import { Autosave, useAutosave } from "react-autosave";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import ApplicationInput from "../components/ApplicationInput";
import ContainerApp from "../components/ContainerApp";
import DropDown from "../components/DropDown";
import { ConfirmationType, UserType } from "../types";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

interface Props {
  user: UserType | null;
  confirmation: ConfirmationType | null;
}

const ConfirmComponent: React.FC<Props> = ({ user, confirmation }) => {
  const toast = useToast();
  const router = useRouter();
  const status = useMemo(() => {
    return confirmation?.status || "Pending";
  }, [confirmation]);
  const [submitting, setSubmitting] = useState(false);

  const { handleSubmit, setValue, watch } = useForm<FieldValues>({
    defaultValues: {
      inPerson: confirmation?.inPerson || "",
      firstTrack: confirmation?.firstTrack || "",
      secondTrack: confirmation?.secondTrack || "",
      liabilitySignature: confirmation?.liabilitySignature || "",
      liabilityDate: confirmation?.liabilityDate || new Date(),
      other: confirmation?.other || "",
      paid: confirmation?.paid,
    },
  });

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  const [form, setForm] = useState({
    inPerson: confirmation?.inPerson || "",
    firstTrack: confirmation?.firstTrack || "",
    secondTrack: confirmation?.secondTrack || "",
    liabilitySignature: confirmation?.liabilitySignature || "",
    liabilityDate: confirmation?.liabilityDate || new Date(),
    other: confirmation?.other || "",
    paid: confirmation?.paid,
  });
  const [error, setError] = useState(new Array(5).fill(""));

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setSubmitting(true);

    let found = false;
    let errors: string[] = [];

    Object.keys(data).forEach((v) => {
      if (
        v !== "other" &&
        v !== "paid" &&
        data[v as keyof typeof data].length == 0
      ) {
        errors.push("This is a required field");
        found = true;
      } else {
        errors.push("");
      }
    });

    setError(errors);

    if (!found) {
      //redirect to checkout
      await axios
        .post("/api/confirmation/submit", { userId: user?.id, ...data })
        .then(() => {
          toast({
            title: "Thanks for your confirmation!",
            description: `We have sent an email to ${user?.email}. See you in a couple of weeks, and we can't wait for you to come to our event. In the meantime, follow us on social media!            `,
            status: "success",
            duration: 10000,
            isClosable: true,
          });

          router.refresh();
        })
        .catch(() => {
          toast({
            title: "Error!",
            description: "There was a problem submitting your application!",
            status: "error",
            duration: 10000,
            isClosable: true,
          });
        })
        .finally(() => setSubmitting(false));
    }
    setSubmitting(false);
  };

  const updateForm = useCallback(async () => {
    const data = {
      inPerson: watch("inPerson"),
      firstTrack: watch("firstTrack"),
      secondTrack: watch("secondTrack"),
      liabilitySignature: watch("liabilitySignature"),
      liabilityDate: watch("liabilityDate"),
      other: watch("other"),
      paid: watch("paid"),
    };

    toast({ title: "Saving...", isClosable: true, duration: 2000 });

    await axios
      .post("/api/confirmation", { userId: user?.id, ...data })
      .then(() => {
        toast({
          title: "Saved!",
          status: "success",
          isClosable: true,
          duration: 2000,
        });
      });
  }, [watch, toast]);

  useAutosave({ data: form, onSave: updateForm });

  return (
    <ContainerApp>
      <>
        <div className="flex flex-col items-center lg:pt-24 md:pt-12">
          <div className="lg:w-[50vw] md:w-[75vw] sm:w-[75vw]">
            <div className="font-semibold text-5xl">
              {status === "Submitted"
                ? "Thank you for confirming to attend health{hacks},"
                : "Welcome to health{hacks} 2023,"}{" "}
              <span className="font-semibold text-5xl text-hh-purple">
                {" "}
                {user ? user!.name : ""}.{" "}
              </span>
            </div>
            {status === "Submitted" ? (
              <>
                <p className="font-base text-md text-[#b9b9b9] mt-2">
                  We have confirmed your spot to our event and please email{" "}
                  <a href="mailto:info@joinhealthhacks.com">
                    info@joinhealthhacks.com
                  </a>{" "}
                  if you have any additional questions.
                </p>
              </>
            ) : (
              <>
                <p className="font-base text-md text-[#b9b9b9] mt-2">
                  To confirm your spot at our event, please fill out this quick
                  confirmation form to attend our event at{" "}
                  <strong>
                    {" "}
                    Stanford University on April 14 - 16th, 2023.{" "}
                  </strong>{" "}
                </p>
              </>
            )}
            <div
              className={`${
                status === "Submitted"
                  ? "hover:cursor-not-allowed"
                  : "hover:cursor-default"
              }`}
            >
              {" "}
              <form
                className={`${
                  status === "Submitted"
                    ? "pointer-events-none"
                    : "pointer-events-auto"
                }`}
              >
                <div className="font-semibold text-4xl mt-12">
                  <u>General Information</u>
                </div>

                {/* CAN YOU ATTEND EVENT */}
                <div className="flex space-x-6">
                  <div className="w-[50vw]">
                    <div
                      className={`mt-8 mb-2 lg:text-lg md:text-small font-semibold ${
                        error[0].length > 0 ? "text-red-400" : "text-white"
                      }`}
                    >
                      Can you still attend our event on April 14 - 16, 2023?
                    </div>
                    <RadioGroup
                      onChange={(v) => {
                        setForm({ ...form, inPerson: v });
                        setCustomValue("inPerson", v);
                      }}
                      value={form.inPerson}
                    >
                      <div
                        className={`flex items-center space-x-4 ${
                          error[0].length > 0 ? "text-red-400" : "text-white"
                        }`}
                      >
                        <Radio
                          value="Yes"
                          colorScheme="black"
                          onClick={() => {
                            setForm({ ...form, inPerson: "Yes" });
                            setCustomValue("inPerson", "Yes");
                          }}
                        >
                          Yes
                        </Radio>
                        <Radio
                          value="No"
                          colorScheme="black"
                          onClick={() => {
                            setForm({ ...form, inPerson: "No" });
                            setCustomValue("inPerson", "no");
                          }}
                        >
                          No
                        </Radio>
                      </div>
                    </RadioGroup>
                    {error[0] && error[0].length > 0 && (
                      <div className="mt-4 font-poppins font-semibold text-red-400 text-sm">
                        {error[0]}
                      </div>
                    )}
                  </div>
                </div>

                <p className="mt-8 mb-2 lg:text-lg md:text-small font-semibold">
                  {`health{hacks}`} each year has three flagship tracks for our
                  participants to join:{" "}
                </p>
                <ol className="font-base text-md text-[#b9b9b9]">
                  <li className="pt-2">
                    <b>Diagnostic Medicine:</b>With the advancement of data
                    analytics and bioinformatics, there is growing potential for
                    innovating cost-effective, accurate diagnostic tools for
                    studying and treating health conditions. This track will
                    focus on the design and refinement of reliable, personalized
                    diagnostic technologies, equitable access and regulation of
                    resources, and integration of diagnostic medicine. This may
                    include wearable technologies, predictive software, and
                    early detection.
                  </li>
                  <li className="pt-2">
                    <b>Healthcare Automation:</b>In today’s healthcare industry,
                    limited resources is a prevalent issue. How can we alleviate
                    healthcare provider shortages, telecommunication
                    limitations, and healthcare data inconsistencies? To promote
                    an automated healthcare industry, this track aims to make
                    advancements in medical communication, applied robotics, and
                    hospital database management to streamline patient care and
                    physician practices.
                  </li>
                  <li className="pt-2">
                    <b>Population & Preventative Health:</b>While healthcare has
                    put much effort toward treating diseases, it is far more
                    resourceful to prevent them from developing in the first
                    place. This track will focus on improving population health
                    through preventative measures and proactive lifestyle
                    changes, such as exercise, healthy eating, adequate sleep,
                    stress management, and regular medical screenings, on both
                    individual and community levels.
                  </li>
                </ol>

                {/* What is your first track selection */}
                <div>
                  <div>
                    <DropDown
                      error={error[1]}
                      name="What is your first track choice?"
                      options={tracks}
                      value={form.firstTrack}
                      setValue={(v) => {
                        setForm({ ...form, firstTrack: v });
                        setCustomValue("firstTrack", v);
                      }}
                    />
                  </div>
                </div>

                {/* What is your second track selection */}
                <div>
                  <div>
                    {/* value = form["tracks2"] */}
                    <DropDown
                      error={error[2]}
                      name="What is your second track choice?"
                      options={tracks}
                      value={form.secondTrack}
                      setValue={(v) => {
                        setForm({ ...form, secondTrack: v });
                        setCustomValue("secondTrack", v);
                      }}
                    />
                  </div>
                </div>

                <p className="mt-8 font-base text-md text-[#b9b9b9]">
                  Teams will be formed and created during the event, so no need
                  to let us know about your team members at this time if you
                  already have a team!{" "}
                </p>

                <div className="font-semibold text-4xl mt-12">
                  <u>Liability and Photo Release Forms</u>
                </div>

                <p className="font-base text-md text-[#b9b9b9] mt-2">
                  {" "}
                  To confirm your spot as our participant, we require you to
                  sign our{" "}
                  <strong> liability and photo release agreement. </strong>
                  To read our liability and photo release agreement, please read
                  it{" "}
                  <a href="/liability-form" target="_blank" rel="noreferrer">
                    {" "}
                    <u> here.</u>{" "}
                  </a>
                </p>

                {/* Liability Form */}
                <div>
                  <ApplicationInput
                    error={error[3]}
                    value={form.liabilitySignature}
                    setValue={(value) => {
                      setForm({ ...form, liabilitySignature: value });
                      setCustomValue("liabilitySignature", value);
                    }}
                    label="Please write your full name as your signature to confirm your acceptance of our liability and photo release waiver."
                  />
                </div>

                {/* Liability Form Date*/}
                <div>
                  <div
                    className={`mt-8 mb-2 lg:text-lg md:text-small font-semibold `}
                  >
                    Please include the date of you signing this form.
                  </div>
                  <DatePicker
                    className="w-full bg-[#202020] border-[1px] py-2 rounded-xl px-4"
                    selected={form.liabilityDate}
                    onChange={(date) => {
                      setForm({ ...form, liabilityDate: date! });
                      setCustomValue("liabilityDate", date);
                    }}
                  />
                </div>

                {/* Anything Else? */}
                <div>
                  <p className="mt-8 -mb-6 lg:text-lg md:text-small font-semibold">
                    Anything else you want to tell us?
                  </p>
                  <ApplicationInput
                    textarea
                    placeholder="We love to hear your thoughts, questions, concerns, and more about our event"
                    value={form.other}
                    setValue={(value) => {
                      setForm({ ...form, other: value });
                      setCustomValue("other", value);
                    }}
                  />
                </div>
                <div className="font-semibold text-4xl mt-12">
                  <u>Food Voucher</u>
                </div>

                <p className="font-base text-md text-[#b9b9b9] mt-2">
                  {" "}
                  To confirm your spot as our participant, we will be collecting
                  a <strong> $5 food voucher fee </strong> prior to our event.
                  Please checkout here:
                </p>
                <Autosave data={form} onSave={updateForm} />
              </form>
              <div className="flex items-center space-x-6 pt-8 pb-24">
                <button
                  onClick={(e) => handleSubmit(onSubmit)(e)}
                  className={`hover:cursor-pointer duration-500 hover:opacity-50 text-center bg-hh-purple text-white px-6 py-3 w-auto rounded-xl text-sm font-medium ${
                    status === "Submitted"
                      ? "pointer-events-none"
                      : "pointer-events-auto"
                  }`}
                >
                  {submitting ? <Spinner size="xs" /> : "Pay"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    </ContainerApp>
  );
};

export default ConfirmComponent;
