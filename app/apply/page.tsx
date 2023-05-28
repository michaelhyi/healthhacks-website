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
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import readApplicationById from "../actions/readApplicationById";
import readUser from "../actions/readUser";
import ApplicationInput from "../components/ApplicationInput";
import ContainerApp from "../components/ContainerApp";
import DropDown from "../components/DropDown";
import { states } from "../data/states";

const Apply = async () => {
  const router = useRouter();
  const toast = useToast();
  const user = await readUser();
  const application = await readApplicationById({ userId: user?.id });
  const [submitting, setSubmitting] = useState(false);

  const status = useMemo(() => {
    return application?.status || "pending";
  }, [application]);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FieldValues>({
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
      transportation: application?.transportation || "",
      other: application?.other || "",
    },
  });

  const phone = watch("phone");
  const organization = watch("organization");
  const city = watch("city");
  const state = watch("state");
  const inPerson = watch("inPerson");
  const wholeEvent = watch("wholeEvent");
  const background = watch("background");
  const whyUs = watch("whyUs");
  const howHear = watch("howHear");
  const team = watch("team");
  const linkedIn = watch("linkedIn");
  const dietaryRestrictions = watch("dietaryRestrictions");
  const transportation = watch("transportation");
  const other = watch("other");

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setSubmitting(true);

    if (inPerson === "No") {
      //reject
    } else if (wholeEvent === "No") {
      // warning
    } else {
      const form = {
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
        transportation: watch("transportation"),
        other: watch("other"),
      };

      await axios
        .post("/api/application/submit", { userId: user?.id, form })
        .then(() => {
          //success
        });
    }
    setSubmitting(false);
  };

  const updateForm = useCallback(async () => {
    const form = {
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
      transportation: watch("transportation"),
      other: watch("other"),
    };

    await axios.post("/api/application/", { userId: user?.id, form });
  }, [watch]);

  useAutosave({ data: watch(), onSave: updateForm });

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
                {user!.name}.{" "}
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
                  Fill out this five minute application to attend our event at{" "}
                  <strong>
                    {" "}
                    Stanford University on April 14 - 16th, 2023.{" "}
                  </strong>{" "}
                </p>
                <p className="font-base text-md text-[#b9b9b9] mt-2">
                  {" "}
                  We are assembling leaders from a diverse group of backgrounds,
                  including healthcare, medicine, business, public policy, and
                  more! If you are interested in participating, please fill out
                  this application by{" "}
                  <strong> Thursday, March 24, 2023 (11:59 pm PT). </strong>
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
                      id="phone"
                      disabled={submitting}
                      required
                      register={register}
                      errors={errors}
                      value={phone}
                      label="Phone Number"
                    />
                  </div>
                  <div className="w-[50vw]">
                    <ApplicationInput
                      id="organization"
                      disabled={submitting}
                      required
                      register={register}
                      errors={errors}
                      value={organization}
                      label="University / Company"
                    />
                  </div>
                </div>

                {/* CITY AND STATE */}
                <div className="flex space-x-6">
                  <div className="w-[50vw]">
                    <ApplicationInput
                      id="city"
                      disabled={submitting}
                      required
                      register={register}
                      errors={errors}
                      value={city}
                      label="City"
                    />
                  </div>
                  <div className="w-[50vw]">
                    <DropDown
                      error={errors["state"]}
                      name="State"
                      options={states}
                      value={state}
                      setValue={(v) => setCustomValue("state", v)}
                    />
                  </div>
                </div>

                {/* CAN YOU ATTEND EVENT */}
                <div className="flex space-x-6">
                  <div className="w-[50vw]">
                    <div
                      className={`mt-8 mb-2 lg:text-lg md:text-small font-semibold ${
                        errors["inPerson"] ? "text-red-400" : "text-white"
                      }`}
                    >
                      Can you attend in-person?
                    </div>
                    <RadioGroup
                      onChange={(v) => setCustomValue("inPerson", v)}
                      value={inPerson}
                    >
                      <div
                        className={`flex items-center space-x-4 ${
                          errors["inPerson"] ? "text-red-400" : "text-white"
                        }`}
                      >
                        <Radio
                          value="Yes"
                          colorScheme="black"
                          onClick={() => setCustomValue("inPerson", "Yes")}
                        >
                          Yes
                        </Radio>
                        <Radio
                          value="No"
                          colorScheme="black"
                          onClick={() => {
                            setCustomValue("inPerson", "Yes");
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
                  </div>
                  <div className="w-[50vw]">
                    <div
                      className={`mt-8 mb-2 lg:text-lg md:text-small font-semibold ${
                        errors["wholeEvent"] ? "text-red-400" : "text-white"
                      }`}
                    >
                      Can you attend the whole event?
                    </div>
                    <RadioGroup
                      onChange={(value) => setCustomValue("wholeEvent", value)}
                      value={wholeEvent}
                    >
                      <div
                        className={`flex items-center space-x-4 ${
                          errors["wholeEvent"] ? "text-red-400" : "text-white"
                        }`}
                      >
                        <Radio
                          value="Yes"
                          colorScheme="black"
                          onClick={() => setCustomValue("wholeEvent", "Yes")}
                        >
                          Yes
                        </Radio>
                        <Radio
                          value="No"
                          colorScheme="black"
                          onClick={() => {
                            setCustomValue("wholeEvent", "No");

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
                  </div>
                </div>

                {/* What is your background? */}
                <div>
                  <div>
                    <MultiSelect
                      error={errors["background"]}
                      name="What is your background?"
                      options={backgroundData}
                      values={background}
                      setValues={(v) => {
                        if (background.includes(v)) {
                          setCustomValue(
                            "background",
                            background.filter((value: string) => {
                              if (value !== v) return value;
                            })
                          );
                        } else {
                          setCustomValue("background", [...background, v]);
                        }
                      }}
                    />
                  </div>
                </div>

                {/* Why do you want to attend health{hacks} 2023? */}
                <div>
                  <div>
                    <MultiSelect
                      error={errors["whyUs"]}
                      name="Why do you want to attend health{hacks} 2023?"
                      options={whyhh}
                      values={whyUs}
                      setValues={(v) => {
                        if (whyUs.includes(v)) {
                          setCustomValue(
                            "whyUs",
                            whyUs.filter((value: string) => {
                              if (value !== v) return value;
                            })
                          );
                        } else {
                          setCustomValue("whyUs", [...whyUs, v]);
                        }
                      }}
                    />
                  </div>
                </div>

                {/* How did you hear about health{hacks} */}
                <div>
                  <div>
                    <DropDown
                      error={errors["howHear"]}
                      name="How did you hear about health{hacks}"
                      options={wherefrom}
                      value={howHear}
                      setValue={(v) => setCustomValue("howHear", v)}
                    />
                  </div>
                </div>

                {/* Do you have a team yet? */}
                <div>
                  <div>
                    <DropDown
                      error={errors["team"]}
                      name="Do you have a team yet?"
                      options={yesno}
                      value={team}
                      setValue={(v) => setCustomValue("team", v)}
                    />
                  </div>
                </div>

                {/* LinkedIn Profile */}
                <div>
                  <ApplicationInput
                    id="linkedin"
                    disabled={submitting}
                    required
                    register={register}
                    errors={errors}
                    value={linkedIn}
                    label="LinkedIn Profile"
                  />
                </div>

                {/* Any Dietary Restrictions? */}
                <div>
                  <div>
                    <DropDown
                      error={errors["dietaryRestrictions"]}
                      name="Any dietary restrictions?"
                      options={dietary}
                      value={dietaryRestrictions}
                      setValue={(v) => setCustomValue("dietaryRestrictions", v)}
                    />
                  </div>
                </div>

                {/* Do you need transporation to Stanford? */}
                <div>
                  <div>
                    <DropDown
                      error={errors["transporation"]}
                      name="Do you need transporation to Stanford?"
                      options={yesno}
                      value={transportation}
                      setValue={(v) => setCustomValue("transportation", v)}
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
                    id="other"
                    disabled={submitting}
                    required
                    register={register}
                    errors={errors}
                    value={other}
                    label="Other"
                  />
                </div>

                <p className="font-base text-xs text-[#b9b9b9] mt-6">
                  {" "}
                  Please note that this year we will be collecting a{" "}
                  <strong> $5 food voucher fee </strong>
                  when we send out registration confirmations in a couple of
                  weeks. If this will present a barrier, please let us know at
                  <a href="mailto: info@joinhealthhacks.com">
                    {" "}
                    <u> info@joinhealthhacks.com </u>{" "}
                  </a>
                </p>
                <Autosave data={watch()} onSave={updateForm} />
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

export default Apply;
