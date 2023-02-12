import React, { useState } from "react";
import Router from "next/router";
import ContainerApp from "@/components/ContainerApp";

const ApplicationForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [universityCompanyAffiliation, setUniversityCompanyAffiliation] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [attendInPerson, setAttendInPerson] = useState(false);
  const [background, setBackground] = useState("");
  const [whyAttend, setWhyAttend] = useState("");
  const [previousAttendance, setPreviousAttendance] = useState(false);
  const [howHeard, setHowHeard] = useState("");
  const [formTeam, setFormTeam] = useState(false);
  const [linkedinProfile, setLinkedinProfile] = useState("");
  const [dietaryRestrictions, setDietaryRestrictions] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Make a request to the backend to save the application form data
      // ...

      Router.push("/thank-you");
    } catch (error) {
      setError("An error occurred while submitting the form. Please try again later.");
    }
  };

  return (
    <ContainerApp>
    <div className="flex flex-col m-16 w-[50vw]">
      <h2 className="font-semibold text-3xl">{`health{hacks}`} 2023 Application Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
        </div>
        <div className="form-field">
          <label htmlFor="universityCompanyAffiliation">
            University / Company / Affiliation:
          </label>
          <input
            type="text"
            id="universityCompanyAffiliation"
            value={universityCompanyAffiliation}
            onChange={(event) => setUniversityCompanyAffiliation(event.target.value)}
          />
        </div>
        <div className="form-field">
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            value={city}
            onChange={(event) => setCity(event.target.value)}
          />
        </div>
        <div className="form-field">
          <label htmlFor="state">State:</label>
          <input
            type="text"
            id="state"
            value={state}
            onChange={(event) => setState(event.target.value)}
          />
        </div>
        <div className="form-field">
          <label htmlFor="attendInPerson">
            Can you attend in person for the whole event (all 3 days)?
          </label>
          <input
            type="checkbox"
            id="attendInPerson"
            checked={attendInPerson}
            onChange={(event) => setAttendInPerson(event.target.checked)}
          />
        </div>
        <div className="form-field">
          <label htmlFor="background">Background:</label>
          <select id="background" value={background} onChange={(event) => setBackground(event.target.value)}>
            <option value="">Select One</option>
            <option value="doctor">Doctor</option>
            <option value="publicHealth">Public Health</option>
            <option value="business">Business</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="whyAttend">Why do you want to attend {`health{hacks}`} 2023?</label>
          <textarea
            id="whyAttend"
            value={whyAttend}
            onChange={(event) => setWhyAttend(event.target.value)}
          />
        </div>
        <div className="form-field">
          <label htmlFor="previousAttendance">
            Have you attended previous {`health{hacks}`} events?
          </label>
          <input
            type="checkbox"
            id="previousAttendance"
            checked={previousAttendance}
            onChange={(event) => setPreviousAttendance(event.target.checked)}
          />
        </div>
        <div className="form-field">
          <label htmlFor="howHeard">How did you hear about {`health{hacks}`} 2023?</label>
          <input
            type="text"
            id="howHeard"
            value={howHeard}
            onChange={(event) => setHowHeard(event.target.value)}
          />
        </div>
        <div className="form-field">
          <label htmlFor="formTeam">Will you be forming a team during the event?</label>
          <input
            type="checkbox"
            id="formTeam"
            checked={formTeam}
            onChange={(event) => setFormTeam(event.target.checked)}
          />
        </div>
        <div className="form-field">
          <label htmlFor="linkedinProfile">LinkedIn Profile:</label>
          <input
            type="text"
            id="linkedinProfile"
            value={linkedinProfile}
            onChange={(event) => setLinkedinProfile(event.target.value)}
          />
        </div>
        <div className="form-field">
          <label htmlFor="dietaryRestrictions">Dietary Restrictions:</label>
          <input
            type="text"
            id="dietaryRestrictions"
            value={dietaryRestrictions}
            onChange={(event) => setDietaryRestrictions(event.target.value)}
          />
        </div>
        {error && <div className="error">{error}</div>}
        <button type="submit">Submit</button>
      </form>
    </div>
    </ContainerApp>
  );
};

export default ApplicationForm;
