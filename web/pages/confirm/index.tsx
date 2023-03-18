import { tracks } from "@/data/tracks";
import { Radio, RadioGroup, Spinner, useToast } from "@chakra-ui/react";
import { withUrqlClient } from "next-urql";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Autosave, useAutosave } from "react-autosave";
import ApplicationInput from "../../components/ApplicationInput";
import ContainerApp from "../../components/ContainerApp";
import DropDown from "../../components/DropDown";
import {
  useReadConfirmationMutation,
  useSubmitConfirmationMutation,
  useUpdateConfirmationMutation,
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
  const [, readConfirmation] = useReadConfirmationMutation(); 
  const [, updateConfirmation] = useUpdateConfirmationMutation(); 
  const [, submitConfirmation] = useSubmitConfirmationMutation(); 

  useEffect(() => {
    (async () => {
      const response = await localStorage.getItem("user");
      if (response) {
        setUser(JSON.parse(response));
        setFetching(false);
      } else {
        router.push("/login");
      }
    })();
  }, []);

  const [form, setForm] = useState({
    inPerson: "",
    tracks1: "",
    tracks2: "",
    liability: "",
    liabilityDate: "",
    other: "",
  });
  const [error, setError] = useState(new Array(5).fill(""));

  useEffect(() => {
    (async () => {
      if (user) {
        const response = await readConfirmation({ userId: user.id }); 

        setForm({
          inPerson: response.data?.readConfirmation.inPerson!, 
          tracks1: response.data?.readConfirmation.tracks1!, 
          tracks2: response.data?.readConfirmation.tracks2!, 
          liability: response.data?.readConfirmation.liability!,
          liabilityDate: response.data?.readConfirmation.liabilityDate!,
          other: response.data?.readConfirmation.other!,
        });

        setStatus(response.data?.readConfirmation.status!); 
      }
    })();
  }, [user]);

  const handleSubmit = async () => {
    setSubmitting(true);

    let found = false;
    let errors: string[] = [];

    Object.keys(form).forEach((v) => {
      if (v !== "other" && form[v as keyof ConfirmType].length === 0) {
        errors.push("This is a required field");
        found = true;
      } else {
        errors.push("");
      }
    });

    setError(errors);

    if (!found) {
      await submitConfirmation({
        userId: user!.id,
        inPerson: form.inPerson,
        tracks1: form.tracks1,
        tracks2: form.tracks2,
        liability: form.liability,
        liabilityDate: form.liabilityDate,
        other: form.other,
      });
      router.push("/confirm/success");
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
    if (user)
      await updateConfirmation({
        userId: user!.id!,
        inPerson: form.inPerson,
        tracks1: form.tracks1,
        tracks2: form.tracks2,
        liability: form.liability,
        liabilityDate: form.liabilityDate,
        other: form.other,
      });
  };


  // NOTE: WILLIAM COMMENTED THIS OUT 
  useAutosave({ data: form, onSave: updateForm });

  if (fetching) {
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
                {user!.firstName}.{" "}
              </span>
            </div>
            {status === "Submitted" ? (
              <>
                <p className="font-base text-md text-[#b9b9b9] mt-2">
                  We have confirmed your spot to our event and please email <a href="mailto:info@joinhealthhacks.com">info@joinhealthhacks.com</a>
                  if you have any additional questions
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
                      onChange={(v) => setForm({ ...form, inPerson: v })}
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
                    {error[0] && error[0].length > 0 && (
                      <div className="mt-4 font-poppins font-semibold text-red-400 text-sm">
                        {error[0]}
                      </div>
                    )}
                  </div>
                </div>

                {/* What is your first track selection */}
                <div>
                  <div>
                    <DropDown
                      error={error[1]}
                      name="What is your first track choice?"
                      options={tracks}
                      value={form.tracks1}
                      setValue={(v) => setForm({ ...form, tracks1: v })}
                    />
                  </div>
                </div>

                {/* What is your second track selection */}
                <div>
                  <div>
                    <DropDown
                      error={error[2]}
                      name="What is your second track choice?"
                      options={tracks}
                      value={form.tracks2}
                      setValue={(v) => setForm({ ...form, tracks2: v })}
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
                    value={form.liability}
                    setValue={(value) => setForm({ ...form, liability: value })}
                    label="Please write your full name as your signature to confirm your acceptance of our liability and photo release waiver."
                  />
                </div>

                {/* Liability Form Date*/}
                <div>
                  <ApplicationInput
                    error={error[4]}
                    value={form.liabilityDate}
                    setValue={(value) => setForm({ ...form, liabilityDate: value })}
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
                    value={form.other}
                    setValue={(value) => setForm({ ...form, other: value })}
                  />
                </div>


                <div className="font-semibold text-4xl mt-12"><u>Food Voucher</u></div>

                <p className="font-base text-md text-[#b9b9b9] mt-2">
                {" "}
                  To confirm your spot as our participant, we will be collecting a{" "}
                  <strong> $5 food voucher fee </strong>  {" "}prior to our event. Please checkout here:
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

export default withUrqlClient(createUrqlClient, { ssr: true })(Confirm);
