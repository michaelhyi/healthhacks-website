import MultiSelect from "@/components/MultiSelect";
import { background } from "@/data/background";
import { dietary } from "@/data/dietary";
import { wherefrom } from "@/data/wherefrom";
import { whyhh } from "@/data/whyhh";
import { yesno } from "@/data/yesno";
import { Radio, RadioGroup, useToast } from "@chakra-ui/react";
import { withUrqlClient } from "next-urql";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import ApplicationInput from "../components/ApplicationInput";
import ContainerApp from "../components/ContainerApp";
import DropDown from "../components/DropDown";
import { states } from "../data/states";
import {
  useReadApplicationMutation,
  useUpdateApplicationMutation,
} from "../generated/graphql";
import Context from "../utils/context";
import { createUrqlClient } from "../utils/createUrqlClient";

const Apply = () => {
  const router = useRouter();
  const { user } = useContext(Context);
  const [, readApplication] = useReadApplicationMutation();
  const [, updateApplication] = useUpdateApplicationMutation();
  const toast = useToast();

  const [form, setForm] = useState({
    phone: "",
    organization: "",
    city: "",
    state: "",
    inPerson: "",
    wholeEvent: "",
    background: "",
    whyUs: "",
    howHear: "",
    team: "",
    linkedIn: "",
    dietaryRestrictions: "",
    transportation: "",
    other: "",
  });

  const [error, setError] = useState({
    phone: "",
    organization: "",
    city: "",
    state: "",
    inPerson: "",
    wholeEvent: "",
    background: "",
    whyUs: "",
    howHear: "",
    team: "",
    linkedIn: "",
    dietaryRestrictions: "",
    transportation: "",
    other: "",
  });

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
      }
    })();
  }, [user]);

  if (!user) {
    return <div>You must be signed in</div>;
  }

  return (
    <ContainerApp>
      <>
        <div className="flex flex-col items-center lg:pt-24 md:pt-12">
          <div className="lg:w-[50vw] md:w-[75vw] sm:w-[75vw]">
            <div className="font-semibold text-5xl">
              Let's learn more about you,{" "}
              <span className="font-semibold text-5xl text-hh-purple">
                {" "}
                {user.firstName}.{" "}
              </span>
            </div>
            <p className="font-base text-md text-[#b9b9b9] mt-2">
              Fill out this five minute application to attend our event at{" "}
              <strong> Stanford University on April 14 - 16th, 2023. </strong>{" "}
            </p>
            <p className="font-base text-md text-[#b9b9b9] mt-2">
              {" "}
              We are assembling leaders from a diverse group of backgrounds,
              including healthcare, medicine, business, public policy, and more!
              If you are interested in participating, please fill out this
              application by{" "}
              <strong> Thursday, March 24, 2023 (11:59 pm PT). </strong>
              Thank you so much and hope to see you at the event!
            </p>

            <form>
              {/* PHONE NUMBER AND ORGANIZATION */}
              <div className="flex space-x-6">
                <div className="w-[50vw]">
                  <ApplicationInput
                    // userId={user.id}
                    error={error.phone}
                    value={form.phone}
                    setValue={(value) => setForm({ ...form, phone: value })}
                    label="Phone Number"
                  />
                </div>
                <div className="w-[50vw]">
                  <ApplicationInput
                    // userId={user.id}
                    error={error.organization}
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
                    error={error.city}
                    value={form.city}
                    setValue={(value) => setForm({ ...form, city: value })}
                    label="City"
                  />
                </div>
                <div className="w-[50vw]">
                  <DropDown
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
                    className={`mt-8 mb-2 lg:text-lg md:text-small font-semibold`}
                  >
                    Can you attend in-person?
                  </div>
                  <RadioGroup
                    onChange={(v) => setForm({ ...form, inPerson: v })}
                    value={form.inPerson}
                  >
                    <div className="flex items-center space-x-4">
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
                        onClick={() => setForm({ ...form, inPerson: "No" })}
                      >
                        No
                      </Radio>
                    </div>
                  </RadioGroup>
                </div>
                <div className="w-[50vw]">
                  <div
                    className={`mt-8 mb-2 lg:text-lg md:text-small font-semibold`}
                  >
                    Can you attend the whole event?
                  </div>
                  <RadioGroup
                    onChange={(value) =>
                      setForm({ ...form, wholeEvent: value })
                    }
                    value={form.wholeEvent}
                  >
                    <div className="flex items-center space-x-4">
                      <Radio
                        value="Yes"
                        colorScheme="black"
                        onClick={() => setForm({ ...form, wholeEvent: "Yes" })}
                      >
                        Yes
                      </Radio>
                      <Radio
                        value="No"
                        colorScheme="black"
                        onClick={() => setForm({ ...form, wholeEvent: "Yes" })}
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
                    name="What is your background?"
                    options={background}
                    value={form.background}
                    setValue={(v) => setForm({ ...form, background: v })}
                  />
                </div>
              </div>

              {/* Why do you want to attend health{hacks} 2023? */}
              <div>
                <div>
                  <MultiSelect
                    name="Why do you want to attend health{hacks} 2023?"
                    options={whyhh}
                    value={form.whyUs}
                    setValue={(v) => setForm({ ...form, whyUs: v })}
                  />
                </div>
              </div>

              {/* How did you hear about health{hacks} */}
              <div>
                <div>
                  <DropDown
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
                  // userId={user.id}
                  value={form.linkedIn}
                  setValue={(value) => setForm({ ...form, linkedIn: value })}
                  label="LinkedIn Profile"
                />
              </div>

              {/* Any Dietary Restrictions? */}
              <div>
                <div>
                  <DropDown
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
            </form>
            <div className="flex items-center space-x-6 pt-8 pb-24">
              <button
                onClick={async () => {
                  await updateApplication({
                    userId: user.id,
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

                  toast({
                    title: "Saved!",
                    description:
                      "You have successfully saved your application!",
                    status: "success",
                    duration: 10000,
                    isClosable: true,
                  });
                }}
                className="hover:cursor-pointer duration-500 hover:opacity-50 text-center bg-white text-black px-6 py-3 w-auto rounded-xl text-sm font-medium"
              >
                Save
              </button>
              <button
                onClick={async () => {
                  if (error.phone.length === 0) {
                    setError({
                      ...error,
                      phone: "You must enter a phone number.",
                    });
                  } else if (error.organization.length === 0) {
                    setError({
                      ...error,
                      organization: "You must enter an organization.",
                    });
                  } else if (error.city.length === 0) {
                    setError({ ...error, city: "You must enter a city." });
                  } else if (error.state.length === 0) {
                    setError({ ...error, state: "You must enter a state." });
                  } else if (error.inPerson === "No") {
                    setError({
                      ...error,
                      inPerson: "You must attend the event in-person.",
                    });
                  } else if (error.wholeEvent.length === 0) {
                    setError({
                      ...error,
                      wholeEvent:
                        "You must answer if you can attend the full event.",
                    });
                  } else {
                    await updateApplication({
                      userId: user.id,
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
                  }
                }}
                className="hover:cursor-pointer duration-500 hover:opacity-50 text-center bg-hh-purple text-white px-6 py-3 w-auto rounded-xl text-sm font-medium"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </>
    </ContainerApp>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Apply);
