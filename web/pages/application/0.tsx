import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Radio,
  RadioGroup,
  Textarea,
} from "@chakra-ui/react";
import { withUrqlClient } from "next-urql";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import ApplicationInput from "../../components/ApplicationInput";
import DropDown from "../../components/DropDown";
import ContainerApp from "../../components/ContainerApp";
import { states } from "../../data/states";
import {
  useReadApplicationMutation,
  useUpdateApplicationMutation,
} from "../../generated/graphql";
import Context from "../../utils/context";
import { createUrqlClient } from "../../utils/createUrqlClient";
import MultiSelect from "@/components/MultiSelect";
import { background } from "@/data/background";
import { whyhh } from "@/data/whyhh";
import { wherefrom } from "@/data/wherefrom";
import { yesno } from "@/data/yesno";
import { dietary } from "@/data/dietary";

const Application = ({ name }) => {
  const router = useRouter();
  const { user } = useContext(Context);
  const [, readApplication] = useReadApplicationMutation();
  const [, updateApplication] = useUpdateApplicationMutation();

  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    phone: "",
    organization: "",
    city: "",
    state: "",
    inPerson: "",
    wholeEvent: "",
    linkedIn: "",
    anythingElse: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    organization: "",
    city: "",
    state: "",
    inPerson: "",
    wholeEvent: "",
  });

  useEffect(() => {
    (async () => {
      if (user) {
        const response = await readApplication({ userId: user.id });

        setFormData({
          firstName: response.data?.readApplication.firstName!,
          middleName: response.data?.readApplication.middleName!,
          lastName: response.data?.readApplication.lastName!,
          phone: response.data?.readApplication.phone!,
          organization: response.data?.readApplication.organization!,
          city: response.data?.readApplication.city!,
          state: response.data?.readApplication.state!,
          inPerson: response.data?.readApplication.inPerson!,
          wholeEvent: response.data?.readApplication.wholeEvent!,
          linkedIn: response.data?.readApplication.linkedin!,
          anythingElse: response.data?.readApplication.anythingElse!,
        });
      }
    })();
  }, [user]);

  const { firstName, middleName, lastName, phone, organization, city, state, inPerson, wholeEvent, linkedIn, anythingElse } = formData;

  // if (!user) {
  //   return <div>You must be signed in</div>;
  // }

  if (!user) {
    return (
      <ContainerApp>
        <>
          <div className="flex flex-col items-center lg:pt-24 md:pt-12">
            <div className="lg:w-[50vw] md:w-[75vw] sm:w-[75vw]">
              <div className="font-semibold text-5xl">
                Let's learn more about you, <span className="font-semibold text-5xl text-hh-purple"> William. </span>
              </div>
              <p className="font-base text-md text-[#b9b9b9] mt-2">
                Fill out this five minute application to attend our event at <strong> Stanford University on April 14 - 16th, 2023. </strong> </p>
              <p className="font-base text-md text-[#b9b9b9] mt-2"> We are assembling leaders from a diverse group of backgrounds, including healthcare,
                medicine, business, public policy, and more! If you are interested in participating, please fill out this application by <strong> Thursday, March 24, 2023 (11:59 pm PT). </strong>
                Thank you so much and hope to see you at the event!</p>


              <form>
                {/* PHONE NUMBER AND ORGANIZATION */}
                <div className="flex space-x-6">
                  <div className="w-[50vw]">
                    <ApplicationInput
                      // userId={user.id}
                      error={errors.phone}
                      value={formData.phone}
                      setValue={(value) => setFormData({ ...formData, phone: value })}
                      label="Phone Number"
                    />
                  </div>
                  <div className="w-[50vw]">
                    <ApplicationInput
                      // userId={user.id}
                      error={errors.organization}
                      value={formData.organization}
                      setValue={(value) => setFormData({ ...formData, organization: value })}
                      label="University / Company"
                    />
                  </div>
                </div>

                {/* CITY AND STATE */}
                <div className="flex space-x-6">
                  <div className="w-[50vw]">
                    <ApplicationInput
                      // userId={user.id}
                      error={errors.city}
                      value={formData.city}
                      setValue={setCity}
                      label="City"
                    />
                  </div>
                  <div className="w-[50vw]">
                    <DropDown name="State" options={states} />
                  </div>
                </div>

                {/* CAN YOU ATTEND EVENT */}
                <div className="flex space-x-6">
                  <div className="w-[50vw]">
                    <div className={`mt-8 mb-2 lg:text-lg md:text-small font-semibold`}>Can you attend in-person?</div>
                    <RadioGroup onChange={setInPerson} value={inPerson}>
                      <div className="flex items-center space-x-4">
                        <Radio
                          value="Yes"
                          colorScheme="black"
                          onClick={() => setInPerson("Yes")}
                        >
                          Yes
                        </Radio>
                        <Radio
                          value="No"
                          colorScheme="black"
                          onClick={() => setInPerson("No")}
                        >
                          No
                        </Radio>
                      </div>
                    </RadioGroup>
                  </div>
                  <div className="w-[50vw]">
                    <div className={`mt-8 mb-2 lg:text-lg md:text-small font-semibold`}>
                      Can you attend the whole event?
                    </div>
                    <RadioGroup onChange={setWholeEvent} value={wholeEvent}>
                      <div className="flex items-center space-x-4">
                        <Radio value="Yes" colorScheme="black">
                          Yes
                        </Radio>
                        <Radio value="No" colorScheme="black">
                          No
                        </Radio>
                      </div>
                    </RadioGroup>
                  </div>
                </div>

                {/* What is your background? */}
                <div>
                  <div>
                    <MultiSelect name="What is your background?" options={background} />
                  </div>
                </div>

                {/* Why do you want to attend health{hacks} 2023? */}
                <div>
                  <div>
                    <MultiSelect name="Why do you want to attend health{hacks} 2023?" 
                      options={whyhh} 
                    />
                  </div>
                </div>

                {/* How did you hear about health{hacks} */}
                <div>
                  <div>
                    <DropDown name="How did you hear about health{hacks}" options={wherefrom} />
                  </div>
                </div>

                {/* Do you have a team yet? */}
                <div>
                  <div>
                    <DropDown name="Do you have a team yet?" options={yesno} />
                  </div>
                </div>

                {/* LinkedIn Profile */}
                <div>
                  <ApplicationInput
                    // userId={user.id}
                    value={linkedIn}
                    setValue={setLinkedIn}
                    label="LinkedIn Profile"
                  />
                </div>

                {/* Any Dietary Restrictions? */}
                <div>
                  <div>
                    <DropDown name="Any dietary restrictions?" options={dietary} />
                  </div>
                </div>

                {/* Do you need transporation to Stanford? */}
                <div>
                  <div>
                    <DropDown name="Do you need transporation to Stanford?" options={yesno} />
                  </div>
                </div>

                {/* Anything Else? */}
                <div>
                  <p className="mt-8 mb-2 lg:text-lg md:text-small font-semibold">Anything else you want to tell us?</p>
                  <Textarea
                    value={anythingElse}
                    onInput={setAnythingElse}
                    placeholder='We love to hear your thoughts, questions, concerns, and more about our event'
                    textColor='white'
                    size='sm'
                    border='1px'
                    borderRadius='0.75rem'
                    _expanded={{outline: "0px"}}
                  />
                </div>

                <p className="font-base text-xs text-[#b9b9b9] mt-6"> Please note that this year we will be collecting a <strong> $5 food voucher fee </strong>
                when we send out registration confirmations in a couple of weeks. If this will present a barrier, please let us know at 
                <a href="mailto: info@joinhealthhacks.com"> <u> info@joinhealthhacks.com </u> </a></p>

              </form>
              <div className="flex items-center space-x-6 pt-8 pb-24">
                <button
                  onClick={async () => {
                    await updateApplication({
                      userId: user.id,
                      firstName,
                      middleName,
                      lastName,
                      phone,
                      organization,
                      city,
                      state,
                      inPerson,
                      wholeEvent,
                    });
                  }}
                  className="hover:cursor-pointer duration-500 hover:opacity-50 text-center bg-white text-black px-6 py-3 w-auto rounded-xl text-sm font-medium"
                >
                  Save
                </button>
                <button
                  onClick={async () => {
                    if (firstName.length === 0) {
                      setFirstNameError("You must enter a first name.");
                    } else if (lastName.length === 0) {
                      setFirstNameError("You must enter a last name.");
                    } else if (phone.length === 0) {
                      setFirstNameError("You must enter a phone number.");
                    } else if (organization.length === 0) {
                      setFirstNameError("You must enter an organization.");
                    } else if (city.length === 0) {
                      setFirstNameError("You must enter a city.");
                    } else if (state.length === 0) {
                      setFirstNameError("You must enter a state.");
                    } else if (inPerson === "No") {
                      setFirstNameError("You must attend the event in-person.");
                    } else if (wholeEvent.length === 0) {
                      setFirstNameError(
                        "You must answer if you can attend the full event."
                      );
                    } else {
                      await updateApplication({
                        userId: user.id,
                        firstName,
                        middleName,
                        lastName,
                        phone,
                        organization,
                        city,
                        state,
                        inPerson,
                        wholeEvent,
                      });
                      router.push("/application/disclaimer");
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
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Application);
