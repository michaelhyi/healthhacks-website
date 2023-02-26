import MultiSelect from "@/components/MultiSelect";
import { background } from "@/data/background";
import { dietary } from "@/data/dietary";
import { wherefrom } from "@/data/wherefrom";
import { whyhh } from "@/data/whyhh";
import { yesno } from "@/data/yesno";
import { Radio, RadioGroup, Spinner, useToast } from "@chakra-ui/react";
import { withUrqlClient } from "next-urql";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { Autosave, useAutosave } from "react-autosave";
import ApplicationInput from "../../components/ApplicationInput";
import ContainerApp from "../../components/ContainerApp";
import DropDown from "../../components/DropDown";
import { states } from "../../data/states";
import {
  useReadApplicationMutation,
  useSubmitApplicationMutation,
  useUpdateApplicationMutation,
} from "../../generated/graphql";
import Context from "../../utils/context";
import { createUrqlClient } from "../../utils/createUrqlClient";
import { FormType } from "../../utils/types";

const Apply = () => {
  const toast = useToast();
  const router = useRouter();
  const { user } = useContext(Context);
  const [status, setStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [, readApplication] = useReadApplicationMutation();
  const [, updateApplication] = useUpdateApplicationMutation();
  const [, submitApplication] = useSubmitApplicationMutation();

  const [form, setForm] = useState({
    phone: "",
    organization: "",
    city: "",
    state: "",
    inPerson: "",
    wholeEvent: "",
    background: new Array(),
    whyUs: new Array(),
    howHear: "",
    team: "",
    linkedIn: "",
    dietaryRestrictions: "",
    transportation: "",
    other: "",
  });
  const [error, setError] = useState(new Array(13).fill(""));

  useEffect(() => {
    (async () => {
      if (user) {
        const response = await readApplication({ userId: user.id });

        setForm({
          phone: response.data?.readApplication.phone!,
          organization: response.data?.readApplication.organization!,
          city: response.data?.readApplication.city!,
          state: response.data?.readApplication.state!,
          inPerson: response.data?.readApplication.inPerson!,
          wholeEvent: response.data?.readApplication.wholeEvent!,
          background: response.data?.readApplication.background!,
          whyUs: response.data?.readApplication.whyUs!,
          howHear: response.data?.readApplication.howHear!,
          team: response.data?.readApplication.team!,
          linkedIn: response.data?.readApplication.linkedIn!,
          dietaryRestrictions:
            response.data?.readApplication.dietaryRestrictions!,
          transportation: response.data?.readApplication.transportation!,
          other: response.data?.readApplication.other!,
        });

        setStatus(response.data?.readApplication.status!);
      }
    })();
  }, [user]);

  const handleSubmit = async () => {
    setSubmitting(true);

    let found = false;
    let errors: string[] = [];

    Object.keys(form).forEach((v) => {
      if (v !== "other" && form[v as keyof FormType].length === 0) {
        errors.push("This is a required field");
        found = true;
      } else {
        errors.push("");
      }
    });

    setError(errors);

    if (!found) {
      if (form.inPerson === "No") {
        router.push("/apply/reject");
      } else if (form.wholeEvent === "No") {
        router.push({
          pathname: "/apply/warning",
          query: {
            user: JSON.stringify(user),
            form: JSON.stringify(form),
          },
        });
      } else {
        await submitApplication({
          userId: user!.id,
          firstName: user!.firstName,
          lastName: user!.lastName,
          email: user!.email,
          phone: form.phone,
          organization: form.organization,
          city: form.city,
          state: form.state,
          inPerson: form.inPerson,
          wholeEvent: form.wholeEvent,
          background: form.background,
          whyUs: form.whyUs,
          howHear: form.howHear,
          team: form.team,
          linkedIn: form.linkedIn,
          dietaryRestrictions: form.dietaryRestrictions,
          transportation: form.transportation,
          other: form.other,
        });
        router.push("/apply/success");
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
  };

  const updateForm = async () => {
    await updateApplication({
      userId: user!.id,
      phone: form.phone,
      organization: form.organization,
      city: form.city,
      state: form.state,
      inPerson: form.inPerson,
      wholeEvent: form.wholeEvent,
      background: form.background,
      whyUs: form.whyUs,
      howHear: form.howHear,
      team: form.team,
      linkedIn: form.linkedIn,
      dietaryRestrictions: form.dietaryRestrictions,
      transportation: form.transportation,
      other: form.other,
    });
  };

  useAutosave({ data: form, onSave: updateForm });

  if (!user) {
    return <div>You must be signed in</div>;
  }

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
                {user.firstName}.{" "}
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
                      // userId={user.id}
                      error={error[0]}
                      value={form.phone}
                      setValue={(value) => setForm({ ...form, phone: value })}
                      label="Phone Number"
                    />
                  </div>
                  <div className="w-[50vw]">
                    <ApplicationInput
                      // userId={user.id}
                      error={error[1]}
                      value={form.organization}
                      setValue={(value) =>
                        setForm({ ...form, organization: value })
                      }
                      label="University / Company"
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
                      setValue={(value) => setForm({ ...form, city: value })}
                      label="City"
                    />
                  </div>
                  <div className="w-[50vw]">
                    <DropDown
                      error={error[3]}
                      name="State"
                      options={states}
                      value={form.state}
                      setValue={(v) => setForm({ ...form, state: v })}
                    />
                  </div>
                </div>

                {/* CAN YOU ATTEND EVENT */}
                <div className="flex space-x-6">
                  <div className="w-[50vw]">
                    <div
                      className={`mt-8 mb-2 lg:text-lg md:text-small font-semibold ${
                        error[4].length > 0 ? "text-red-400" : "text-white"
                      }`}
                    >
                      Can you attend in-person?
                    </div>
                    <RadioGroup
                      onChange={(v) => setForm({ ...form, inPerson: v })}
                      value={form.inPerson}
                    >
                      <div
                        className={`flex items-center space-x-4 ${
                          error[4].length > 0 ? "text-red-400" : "text-white"
                        }`}
                      >
                        <Radio
                          value="Yes"
                          colorScheme="black"
                          onClick={() => setForm({ ...form, inPerson: "Yes" })}
                        >
                          Yes
                        </Radio>
                        <Radio
                          value="No"
                          colorScheme="black"
                          onClick={() => {
                            setForm({ ...form, inPerson: "No" });
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
                      className={`mt-8 mb-2 lg:text-lg md:text-small font-semibold ${
                        error[5].length > 0 ? "text-red-400" : "text-white"
                      }`}
                    >
                      Can you attend the whole event?
                    </div>
                    <RadioGroup
                      onChange={(value) =>
                        setForm({ ...form, wholeEvent: value })
                      }
                      value={form.wholeEvent}
                    >
                      <div
                        className={`flex items-center space-x-4 ${
                          error[5].length > 0 ? "text-red-400" : "text-white"
                        }`}
                      >
                        <Radio
                          value="Yes"
                          colorScheme="black"
                          onClick={() =>
                            setForm({ ...form, wholeEvent: "Yes" })
                          }
                        >
                          Yes
                        </Radio>
                        <Radio
                          value="No"
                          colorScheme="black"
                          onClick={() => {
                            setForm({ ...form, wholeEvent: "Yes" });
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
                      name="What is your background?"
                      options={background}
                      values={form.background}
                      setValues={(v) => {
                        if (form.background.includes(v)) {
                          setForm({
                            ...form,
                            background: form.background.filter((value) => {
                              if (value !== v) return value;
                            }),
                          });
                        } else {
                          setForm({
                            ...form,
                            background: [...form.background, v],
                          });
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
                      name="Why do you want to attend health{hacks} 2023?"
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
                        } else {
                          setForm({
                            ...form,
                            whyUs: [...form.whyUs, v],
                          });
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
                      name="How did you hear about health{hacks}"
                      options={wherefrom}
                      value={form.howHear}
                      setValue={(v) => setForm({ ...form, howHear: v })}
                    />
                  </div>
                </div>

                {/* Do you have a team yet? */}
                <div>
                  <div>
                    <DropDown
                      error={error[9]}
                      name="Do you have a team yet?"
                      options={yesno}
                      value={form.team}
                      setValue={(v) => setForm({ ...form, team: v })}
                    />
                  </div>
                </div>

                {/* LinkedIn Profile */}
                <div>
                  <ApplicationInput
                    error={error[10]}
                    value={form.linkedIn}
                    setValue={(value) => setForm({ ...form, linkedIn: value })}
                    label="LinkedIn Profile"
                  />
                </div>

                {/* Any Dietary Restrictions? */}
                <div>
                  <div>
                    <DropDown
                      error={error[11]}
                      name="Any dietary restrictions?"
                      options={dietary}
                      value={form.dietaryRestrictions}
                      setValue={(v) =>
                        setForm({ ...form, dietaryRestrictions: v })
                      }
                    />
                  </div>
                </div>

                {/* Do you need transporation to Stanford? */}
                <div>
                  <div>
                    <DropDown
                      error={error[12]}
                      name="Do you need transporation to Stanford?"
                      options={yesno}
                      value={form.transportation}
                      setValue={(v) => setForm({ ...form, transportation: v })}
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
                    setValue={(value) => setForm({ ...form, other: value })}
                  />
                  {/* <Textarea
                value={form.other}
                onInput={(e) => setForm({...form, other: e.target.value})}
                placeholder="We love to hear your thoughts, questions, concerns, and more about our event"
                textColor="white"
                size="sm"
                border="1px"
                borderRadius="0.75rem"
                _expanded={{ outline: "0px" }}
              /> */}
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
                <Autosave data={form} onSave={updateForm} />
              </form>
              <div className="flex items-center space-x-6 pt-8 pb-24">
                <button
                  onClick={handleSubmit}
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

export default withUrqlClient(createUrqlClient, { ssr: true })(Apply);
