import { tracks } from "@/data/tracks";
import { Radio, RadioGroup, Spinner, useToast } from "@chakra-ui/react";
import { withUrqlClient } from "next-urql";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Autosave, useAutosave } from "react-autosave";
import ApplicationInput from "../../components/ApplicationInput";
import ContainerApp from "../../components/ContainerApp";
import DropDown from "../../components/DropDown";

import { loadStripe } from '@stripe/stripe-js';
import {
  useSubmitConfirmationMutation,
} from "../../generated/graphql";
import { createUrqlClient } from "../../utils/createUrqlClient";
import { ConfirmType, UserType } from "../../utils/types";

const Confirm = () => {
  const toast = useToast();
  const router = useRouter();
  const [user, setUser] = useState<UserType | null>(null);
  const [fetching, setFetching] = useState<boolean>(true);
  const [status, setStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [, submitConfirmation] = useSubmitConfirmationMutation();

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setFetching(true);
      const response = await localStorage.getItem("user");
      if (response) {
        await setUser(JSON.parse(response));

        const currEmail = JSON.parse(response).email;

        const res = await fetch('/api/allParticipantSheets');
        const data = await res.json();

        const personRow = data.values.find(row => row[4] === currEmail);

        const isWhitelisted = personRow[5] === "whitelisted"
        const isPaid = personRow[6] === "TRUE"
        // Ensuring that 'data.values' is available and 'user' is defined
        
        //console.log(JSON.parse(response))

        if (!isWhitelisted || isPaid){//|| JSON.parse(response).status !== "not-paid" || JSON.parse(response).status !== "paid") {
          router.push("/404");
          return;
        }

      } else {
        router.push("/login");
      }
      setFetching(false);
    };
    
    fetchData();
    setIsReady(true);
  }, []);

  const [cform, setCForm] = useState({
    inPerson: "",
    tracks1: "",
    tracks2: "",
    liability: "",
    liabilityDate: "",
    other: "",
    paid: "",
  });
  const [error, setError] = useState(new Array(5).fill(""));

  const redirectToCheckout = async (email : string) => {
    const priceId = process.env.NEXT_PUBLIC_PRICE_ID_TEST; // Replace with your actual price I
    
    
    const res = await fetch('../api/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ priceId , email }),
    });
  
    const { sessionId } = await res.json();
    const stripe = await loadStripe(process.env.NEXT_PUBLIC_PUBLISHABLE_KEY_TEST!); // Replace with your actual publishable key
    if(!(stripe == null)) await stripe.redirectToCheckout({ sessionId: sessionId });
  };

  const handleSubmit = async () => {
    setSubmitting(true);
  
    let found = false;
    let errors: string[] = [];
    
    Object.keys(cform).forEach((v) => {
      if (v !== "other" && v !== "paid" && cform[v as keyof ConfirmType] === undefined) {
        errors.push("This is a required field");
        found = true;
      } else {
        errors.push("");
      }
    });
    
    setError(errors);
  
    if (!found) {
      //redirectToCheckout(user!.email)
      console.log(cform)
      const response = await submitConfirmation({
        userId: user!.id!,
        firstName: user!.firstName,
        lastName: user!.lastName,
        email: user!.email,
        inPerson: cform.inPerson,
        liability: cform.liability,
        liabilityDate: cform.liabilityDate,
        other: cform.other,
        paid: cform.paid,
        tracks1: cform.tracks1,
        tracks2: cform.tracks2,

      });
      console.log(response)
    }
    setSubmitting(false);
  };


  if (fetching || !isReady) {
    return (
      <ContainerApp>
        <></>
      </ContainerApp>
    );
  }

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
                {user ? user!.firstName : ''}.{" "}
              </span>
            </div>
            {status === "Submitted" ? (
              <>
                <p className="font-base text-md text-[#b9b9b9] mt-2">
                  We have confirmed your spot to our event and please email <a href="mailto:info@joinhealthhacks.com">info@joinhealthhacks.com</a> if you have any additional questions.
                </p>
              </>
            ) : (
              <>
                <p className="font-base text-md text-[#b9b9b9] mt-2">
                  To confirm your spot at our event, please fill out this quick confirmation form to attend our event at{" "}
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
                <div className="font-semibold text-4xl mt-12"><u>General Information</u></div>


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
                      onChange={(v) => setCForm({ ...cform, inPerson: v })}
                      value={cform.inPerson}
                    >
                      <div
                        className={`flex items-center space-x-4 ${
                          error[0].length > 0 ? "text-red-400" : "text-white"
                        }`}
                      >
                        <Radio
                          value="Yes"
                          colorScheme="black"
                          onClick={() => setCForm({ ...cform, inPerson: "Yes" })}
                        >
                          Yes
                        </Radio>
                        <Radio
                          value="No"
                          colorScheme="black"
                          onClick={() => setCForm({ ...cform, inPerson: "No" })}
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
                  {`health{hacks}`} each year has three flagship tracks for our participants to join: {" "}
                </p>
                <ol className="font-base text-md text-[#b9b9b9]">
                  <li className="pt-2"><b>Aging & Longevity:</b> As the world's population continues to age, it is important to consider the unique healthcare needs and challenges faced by this population. This track will focus on exploring innovations and solutions that can help improve the health and well-being of the aging population, including preventative care, chronic disease management, and technology-based solutions.</li>
                  <li className="pt-2"><b>Population & Preventative Health:</b> Traditional medicine has focused heavily on treating illnesses and diseases, but what if we focused on preventing them in the first place? This track will explore ways to promote and encourage preventative health measures, such as exercise, healthy eating, monitor good sleep schedules, and stress management, in order to improve overall health.</li>
                  <li className="pt-2"><b>Mental Health & Addiction:</b> Mental health is an important aspect of overall health and well-being, but it is often overlooked or stigmatized. This track will focus on exploring innovations and solutions that can help improve mental health, with a particular focus on issues related to addiction. This may include therapy and support programs, technology-based solutions, and community-based approaches.</li>
                </ol>


                {/* What is your first track selection */}
                <div>
                  <div>
                    
                    <DropDown
                      error={error[1]}
                      name="What is your first track choice?"
                      options={tracks}
                      value={cform.tracks1}
                      setValue={(v) => setCForm({ ...cform, tracks1: v })}
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
                      value={cform.tracks2}
                      setValue={(v) => setCForm({ ...cform, tracks2: v })}
                    /> 
                    
                  </div>
                </div>

                <p className="mt-8 font-base text-md text-[#b9b9b9]">
                  Teams will be formed and created during the event, so no need to let us know about your team members at this time if you already have a team!{" "}
                </p>

                <div className="font-semibold text-4xl mt-12"><u>Liability and Photo Release Forms</u></div>

                <p className="font-base text-md text-[#b9b9b9] mt-2">
                {" "}
                  To confirm your spot as our participant, we require you to sign our{" "}
                  <strong> liability and photo release agreement. </strong>
                  To read our liability and photo release agreement, please read it{" "}
                  <a href="/liability-form" target="_blank" rel="noreferrer">
                    {" "}
                    <u> here.</u>{" "}
                  </a>
                </p>

                {/* Liability Form */}
                <div>
                  <ApplicationInput
                    error={error[3]}
                    value={cform.liability}
                    setValue={(value) => setCForm({ ...cform, liability: value })}
                    label="Please write your full name as your signature to confirm your acceptance of our liability and photo release waiver."
                  />
                </div>

                {/* Liability Form Date*/}
                <div>
                  <ApplicationInput
                    error={error[4]}
                    value={cform.liabilityDate}
                    setValue={(value) => setCForm({ ...cform, liabilityDate: value })}
                    label="Please include the date of you signing this form."
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
                    value={cform.other}
                    setValue={(value) => setCForm({ ...cform, other: value })}
                  />
                </div>


                <div className="font-semibold text-4xl mt-12"><u>Food Voucher</u></div>

                <p className="font-base text-md text-[#b9b9b9] mt-2">
                {" "}
                  To confirm your spot as our participant, we will be collecting a{" "}
                  <strong> $5 food voucher fee </strong>  {" "}prior to our event. Please checkout here:
                </p>
                
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

export default withUrqlClient(createUrqlClient, { ssr: true })(Confirm);