"use client";

import MultiSelect from "@/app/components/MultiSelect";
import { backgroundData } from "@/app/data/background";
import { dietary } from "@/app/data/dietary";
import { wherefrom } from "@/app/data/wherefrom";
import { whyhh } from "@/app/data/whyhh";
import { yesno } from "@/app/data/yesno";
import { Radio, RadioGroup, Spinner, useToast } from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useMemo, useState } from "react";
import { Autosave, useAutosave } from "react-autosave";
import { FieldValues, useForm } from "react-hook-form";
import ApplicationInput from "../components/ApplicationInput";
import ContainerApp from "../components/ContainerApp";
import DropDown from "../components/DropDown";
import { states } from "../data/states";
import { ApplicationType, UserType } from "../types";
import Link from "next/link";

interface Props {
  user?: UserType | null;
  application?: ApplicationType | null;
}

const ApplyComponent: React.FC<Props> = ({ application, user }) => {
  const toast = useToast();
  const router = useRouter();
  const status = useMemo(() => {
    return application?.status || "Pending";
  }, [application]);
  const [submitting, setSubmitting] = useState(false);

  const [form, setForm] = useState({
    phone: application?.phone || "",
    organization: application?.organization || "",
    city: application?.city || "",
    state: application?.state || "",
    inPerson: application?.inPerson || "",
    wholeEvent: application?.wholeEvent || "",
    background: application?.background || new Array(),
    whyUs: application?.whyUs || new Array(),
    howHear: application?.howHear || "",
    team: application?.team || "",
    linkedIn: application?.linkedIn || "",
    dietaryRestrictions: application?.dietaryRestrictions || "",
    other: application?.other || "",
    ambassador: application?.ambassador || "",
  });
  const [error, setError] = useState(new Array(14).fill(""));

  const { handleSubmit, setValue, watch } = useForm<FieldValues>({
    defaultValues: {
      phone: application?.phone || "",
      organization: application?.organization || "",
      city: application?.city || "",
      state: application?.state || "",
      inPerson: application?.inPerson || "",
      wholeEvent: application?.wholeEvent || "",
      background: application?.background || new Array(),
      whyUs: application?.whyUs || new Array(),
      howHear: application?.howHear || "",
      team: application?.team || "",
      linkedIn: application?.linkedIn || "",
      dietaryRestrictions: application?.dietaryRestrictions || "",
      other: application?.other || "",
      ambassador: application?.ambassador || "",
    },
  });

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  const onSubmit = useCallback(async () => {
    setSubmitting(true);

    let found = false;
    let errors: string[] = [];
    const data = {
      phone: watch("phone"),
      organization: watch("organization"),
      city: watch("city"),
      state: watch("state"),
      inPerson: watch("inPerson"),
      wholeEvent: watch("wholeEvent"),
      background: watch("background"),
      whyUs: watch("whyUs"),
      howHear: watch("howHear"),
      team: watch("team"),
      linkedIn: watch("linkedIn"),
      dietaryRestrictions: watch("dietaryRestrictions"),
      other: watch("other"),
      ambassador: watch("ambassador"),
    };

    Object.keys(data).forEach((v) => {
      if (v !== "other" && data[v as keyof typeof data].length === 0) {
        errors.push("This is a required field");
        found = true;
      } else {
        errors.push("");
      }
    });

    setError(errors);

    if (!found) {
      if (data.inPerson === "No") {
        toast({
          title: "Sorry, we hope to see you next time.",
          description:
            "We need all of our participants to be in-person. We currently do not have the bandwith to facilitate a hybrid event. If this is an error, please go back to fix your application!",
          status: "error",
          duration: 10000,
          isClosable: true,
        });
      } else if (data.wholeEvent === "No") {
        toast({
          title: "Are you sure?",
          description:
            "We prefer our participants to attend the whole event. We believe missing most of the event will be harder to be caught up with the fast pace of the event. If you must miss a couple of hours, please submit your application. Otherwise, we hope to see you next time!",
          status: "warning",
          duration: 10000,
          isClosable: true,
        });
      } else {
        await axios
          .post("/api/application/submit", {
            userId: user?.id,
            ...data,
          })
          .then(() => {
            toast({
              title: "Success!",
              description: `You have successfully submitted your application! We have sent an email to ${user?.email}. Please wait a couple of weeks to hear back from us regarding your application. In the meantime, follow us on social media!`,
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
    } else {
      toast({
        title: "Error!",
        description: "You must fill out all required fields!",
        status: "error",
        duration: 10000,
        isClosable: true,
      });
    }

    setSubmitting(false);
  }, [setSubmitting, watch, setError, toast, router]);

  const updateForm = useCallback(async () => {
    const data = {
      phone: watch("phone"),
      organization: watch("organization"),
      city: watch("city"),
      state: watch("state"),
      inPerson: watch("inPerson"),
      wholeEvent: watch("wholeEvent"),
      background: watch("background"),
      whyUs: watch("whyUs"),
      howHear: watch("howHear"),
      team: watch("team"),
      linkedIn: watch("linkedIn"),
      dietaryRestrictions: watch("dietaryRestrictions"),
      other: watch("other"),
      ambassador: watch("ambassador"),
    };

    let errors: string[] = [];

    Object.keys(data).forEach((v, i) => {
      if (
        v !== "other" &&
        data[v as keyof typeof data].length === 0 &&
        errors[i].length !== 0
      ) {
        errors.push("This is a required field");
      } else {
        errors.push("");
      }
    });

    setError(errors);

    await axios.post("/api/application", { userId: user?.id, ...data });
  }, [watch, toast]);

  useAutosave({ data: form, onSave: updateForm });

  return (
    <ContainerApp>
      <>
        <div className="flex flex-col items-center lg:pt-24 md:pt-12">
          <div className="lg:w-[50vw] md:w-[75vw] sm:w-[75vw]">
            <div className="font-semibold text-5xl">
              {status === "Submitted"
                ? "Thank you for applying to health{hacks},"
                : "Let's learn more about you,"}{" "}
              <span className="font-semibold text-5xl text-hh-purple">
                {" "}
                {user?.name}.{" "}
              </span>
            </div>
            {status === "Submitted" ? (
              <>
                <p className="font-base text-md text-[#b9b9b9] mt-2">
                  Your application was received and is currently under review by
                  our team. We will reach out via email when your application
                  decision is complete.
                </p>
              </>
            ) : (
              <>
                <p className="font-base text-md text-[#b9b9b9] mt-2">
                  Fill out this five minute application to attend our event in{" "}
                  <strong> Los Angeles on August 4 - 6th, 2023. </strong>{" "}
                </p>
                <p className="font-base text-md text-[#b9b9b9] mt-2">
                  {" "}
                  We are assembling leaders from a diverse group of backgrounds,
                  including healthcare, medicine, business, public policy, and
                  more! If you are interested in participating, please fill out
                  this application by{" "}
                  <strong> Thursday, August 3, 2023 (11:59 pm PT). </strong>
                  Thank you so much and hope to see you at the event!
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
                {/* PHONE NUMBER AND ORGANIZATION */}
                <div className="flex space-x-6">
                  <div className="w-[50vw]">
                    <ApplicationInput
                      // userId={user.id}
                      error={error[0]}
                      value={form.phone}
                      setValue={(value) => {
                        setForm({ ...form, phone: value });
                        setCustomValue("phone", value);
                      }}
                      label="Phone Number *"
                    />
                  </div>
                  <div className="w-[50vw]">
                    <ApplicationInput
                      // userId={user.id}
                      error={error[1]}
                      value={form.organization}
                      setValue={(value) => {
                        setForm({ ...form, organization: value });
                        setCustomValue("organization", value);
                      }}
                      label="University / Company *"
                    />
                  </div>
                </div>

                {/* CITY AND STATE */}
                <div className="flex space-x-6">
                  <div className="w-[50vw]">
                    <ApplicationInput
                      // userId={user.id}
                      error={error[2]}
                      value={form.city}
                      setValue={(value) => {
                        setForm({ ...form, city: value });
                        setCustomValue("city", value);
                      }}
                      label="City *"
                    />
                  </div>
                  <div className="w-[50vw]">
                    <DropDown
                      error={error[3]}
                      name="State *"
                      options={states}
                      value={form.state}
                      setValue={(v) => {
                        setForm({ ...form, state: v });
                        setCustomValue("state", v);
                      }}
                    />
                  </div>
                </div>

                {/* CAN YOU ATTEND EVENT */}
                <div className="flex space-x-6">
                  <div className="w-[50vw]">
                    <div
                      className={`mt-8 mb-2 lg:text-lg md:text-small font-semibold `}
                    >
                      Can you attend in-person? *
                    </div>
                    <RadioGroup
                      onChange={(v) => {
                        setForm({ ...form, inPerson: v });
                        setCustomValue("inPerson", v);
                      }}
                      value={form.inPerson}
                    >
                      <div className={`flex items-center space-x-4 `}>
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
                            setCustomValue("inPerson", "No");
                            toast({
                              title: "Sorry, we hope to see you next time.",
                              description:
                                "We need all of our participants to be in-person. We currently do not have the bandwith to facilitate a hybrid event. If this is an error, please go back to fix your application!",
                              status: "error",
                              duration: 10000,
                              isClosable: true,
                            });
                          }}
                        >
                          No
                        </Radio>
                      </div>
                    </RadioGroup>
                    {error[4] && error[4].length > 0 && (
                      <div className="mt-4 font-poppins font-semibold text-red-400 text-sm">
                        {error[4]}
                      </div>
                    )}
                  </div>
                  <div className="w-[50vw]">
                    <div
                      className={`mt-8 mb-2 lg:text-lg md:text-small font-semibold `}
                    >
                      Can you attend the whole event? *
                    </div>
                    <RadioGroup
                      onChange={(value) => {
                        setForm({ ...form, wholeEvent: value });
                        setCustomValue("wholeEvent", value);
                      }}
                      value={form.wholeEvent}
                    >
                      <div className={`flex items-center space-x-4 `}>
                        <Radio
                          value="Yes"
                          colorScheme="black"
                          onClick={() => {
                            setForm({ ...form, wholeEvent: "Yes" });
                            setCustomValue("wholeEvent", "Yes");
                          }}
                        >
                          Yes
                        </Radio>
                        <Radio
                          value="No"
                          colorScheme="black"
                          onClick={() => {
                            setForm({ ...form, wholeEvent: "Yes" });
                            setCustomValue("wholeEvent", "Yes");

                            toast({
                              title: "Are you sure?",
                              description:
                                "We prefer our participants to attend the whole event. We believe missing most of the event will be harder to be caught up with the fast pace of the event.               If you must miss a couple of hours, please submit your application. Otherwise, we hope to see you next time!",
                              status: "warning",
                              duration: 10000,
                              isClosable: true,
                            });
                          }}
                        >
                          No
                        </Radio>
                      </div>
                    </RadioGroup>
                    {error[5] && error[5].length > 0 && (
                      <div className="mt-4 font-poppins font-semibold text-red-400 text-sm">
                        {error[5]}
                      </div>
                    )}
                  </div>
                </div>

                {/* What is your background? */}
                <div>
                  <div>
                    <MultiSelect
                      error={error[6]}
                      name="What is your background? *"
                      options={backgroundData}
                      values={form.background}
                      setValues={(v) => {
                        if (form.background.includes(v)) {
                          setForm({
                            ...form,
                            background: form.background.filter((value) => {
                              if (value !== v) return value;
                            }),
                          });
                          setCustomValue(
                            "background",
                            form.background.filter((value) => {
                              if (value !== v) return value;
                            })
                          );
                        } else {
                          setForm({
                            ...form,
                            background: [...form.background, v],
                          });
                          setCustomValue("background", [...form.background, v]);
                        }
                      }}
                    />
                  </div>
                </div>

                {/* Why do you want to attend health{hacks} 2023? */}
                <div>
                  <div>
                    <MultiSelect
                      error={error[7]}
                      name="Why do you want to attend health{hacks} 2023? *"
                      options={whyhh}
                      values={form.whyUs}
                      setValues={(v) => {
                        if (form.whyUs.includes(v)) {
                          setForm({
                            ...form,
                            whyUs: form.whyUs.filter((value) => {
                              if (value !== v) return value;
                            }),
                          });
                          setCustomValue(
                            "whyUs",
                            form.whyUs.filter((value) => {
                              if (value !== v) return value;
                            })
                          );
                        } else {
                          setForm({
                            ...form,
                            whyUs: [...form.whyUs, v],
                          });
                          setCustomValue("whyUs", [...form.whyUs, v]);
                        }
                      }}
                    />
                  </div>
                </div>

                {/* How did you hear about health{hacks} */}
                <div>
                  <div>
                    <DropDown
                      error={error[8]}
                      name="How did you hear about health{hacks}? *"
                      options={wherefrom}
                      value={form.howHear}
                      setValue={(v) => {
                        setForm({ ...form, howHear: v });
                        setCustomValue("howHear", v);
                      }}
                    />
                  </div>
                </div>

                {/* Do you have a team yet? */}
                <div>
                  <div>
                    <DropDown
                      error={error[9]}
                      name="Do you have a team yet? *"
                      options={yesno}
                      value={form.team}
                      setValue={(v) => {
                        setForm({ ...form, team: v });
                        setCustomValue("team", v);
                      }}
                    />
                  </div>
                </div>

                {/* LinkedIn Profile */}
                <div>
                  <ApplicationInput
                    error={error[10]}
                    value={form.linkedIn}
                    setValue={(value) => {
                      setForm({ ...form, linkedIn: value });
                      setCustomValue("linkedIn", value);
                    }}
                    label="LinkedIn Profile *"
                  />
                </div>

                {/* Any Dietary Restrictions? */}
                <div>
                  <div>
                    <DropDown
                      error={error[11]}
                      name="Any dietary restrictions? *"
                      options={dietary}
                      value={form.dietaryRestrictions}
                      setValue={(v) => {
                        setForm({ ...form, dietaryRestrictions: v });
                        setCustomValue("dietaryRestrictions", v);
                      }}
                    />
                  </div>
                </div>
                {/* Anything Else? */}
                <div>
                  <p className="mt-8 mb-2 lg:text-lg md:text-small font-semibold">
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
                <div>
                  <p className="mt-8 mb-2 lg:text-lg md:text-small font-semibold">
                    {`Would you like to be a health{hacks} ambassador? *`}
                  </p>
                  <p className="font-base text-xs text-[#b9b9b9] flex flex-row">
                    Perks of becoming an ambassador are ...{" "}
                    <Link
                      href="/ambassador"
                      rel="noopener noreferrer"
                      target="_blank"
                      className="cursor-pointer underline duration-300 hover:opacity-75"
                    >
                      Read More
                    </Link>
                  </p>
                  <RadioGroup
                    onChange={(value) => {
                      setForm({
                        ...form,
                        ambassador: value,
                      });
                      setCustomValue("ambassador", value);
                    }}
                    value={form.ambassador}
                  >
                    <div className={`flex items-center space-x-4 mt-4`}>
                      <Radio
                        value="Yes"
                        colorScheme="black"
                        onClick={() => {
                          setForm({ ...form, ambassador: "Yes" });
                          setCustomValue("ambassador", "Yes");
                        }}
                      >
                        Yes
                      </Radio>
                      <Radio
                        value="No"
                        colorScheme="black"
                        onClick={() => {
                          setForm({ ...form, ambassador: "No" });
                          setCustomValue("ambassador", "No");
                        }}
                      >
                        No
                      </Radio>
                    </div>
                  </RadioGroup>
                  {error[13] && error[13].length > 0 && (
                    <div className="mt-4 font-poppins font-semibold text-red-400 text-sm">
                      {error[13]}
                    </div>
                  )}
                </div>
                <p className="font-base text-xs text-[#b9b9b9] mt-6">
                  An asterisk (*) denotes a required field. Please note that
                  this year we will be collecting a
                  <strong> $5 food voucher fee </strong>
                  when we send out registration confirmations in a couple of
                  weeks. If this will present a barrier, please let us know at
                  <a href="mailto: info@joinhealthhacks.com">
                    <u> info@joinhealthhacks.com </u>
                  </a>
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
                  {submitting ? <Spinner size="xs" /> : "Submit"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    </ContainerApp>
  );
};

export default ApplyComponent;
