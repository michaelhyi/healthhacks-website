import Container from "../components/Container";
import Footer from "@/components/Footer";

const LiabilityForm = () => {
  return (
    <Container>
      <div className="lg:mt-24 md:mt-20 sm:mt-8 mb-24 lg:mx-40 md:mx-16 sm:mx-12">
        <h1 className="font-bold text-4xl">
          Waiver of Liability, Assumption of Risk, Indemnity, and Photo Release Agreement
        </h1>

        <div className="font-light text-[#ccc] text-sm">
          Last updated March 1, 2023
        </div>

        <div>
          <br/ >
          <div className="font-thin text-sm">
            In consideration of being permitted to participate in any way in {`health{hacks}`} 2022 from August 5-7, 2022, hereinafter called "The Activity", I, for myself, my heirs, personal representatives or assigns, do hereby release, waive, discharge, and covenant not to sue Stanford University, its officers, employees, and agents, and {`health{hacks}`} and its agents, from liability from any and all claims including the negligence of {`health{hacks}`} and its agents, resulting in personal injury, accidents or illnesses (including death), and property loss arising from, but not limited to, participation in The Activity.
          </div>
          <h2 id="1" className="font-semibold text-xl mt-8">
            1. Assumption of Risks:
          </h2>
          <div className="font-thin text-sm">
            Participation in The Activity carries with it certain inherent risks that cannot be eliminated regardless of the care taken to avoid injuries. The specific risks vary from one activity to another, but the risks range from 1) minor injuries such as scratches, bruises, and sprains 2) major injuries such as eye injury or loss of sight, joint or back injuries, heart attacks, and concussions to 3) catastrophic injuries including paralysis and death.
            <br/ ><br/ >
            <b>I have read the previous paragraphs and I know, understand, and appreciate these and other risks that are inherent in The Activity. I hereby assert that my participation is voluntary and that I knowingly assume all such risks.</b>
          </div>
          <h2 id="2" className="font-semibold text-xl mt-8">
            2. Indemnification and Hold Harmless:
          </h2>
          <div className="font-thin text-sm">
            I also agree to INDEMNIFY AND HOLD Stanford University and {`health{hacks}`} HARMLESS from any and all claims, actions, suits, procedures, costs, expenses, damages and liabilities, including attorney’s fees brought as a result of my involvement in The Activity and to reimburse them for any such expenses incurred.
          </div>
          <h2 id="3" className="font-semibold text-xl mt-8">
            3. Severability:
          </h2>
          <div className="font-thin text-sm">
            The undersigned further expressly agrees that the foregoing waiver and assumption of risks agreement is intended to be as broad and inclusive as is permitted by the law of the State of California and that if any portion thereof is held invalid, it is agreed that the balance shall, notwithstanding, continue in full legal force and effect.
          </div>
          <h2 id="4" className="font-semibold text-xl mt-8">
            4. Photo Release:
          </h2>
          <div className="font-thin text-sm">
            I also grant {`health{hacks}`} my permission to use photographs & recordings from the event for any legal use, incluing but not limited to: publicity, copyright purposes, make-up recordings, advertising, and web content. I also understand that no royalty fee or other compensation shall become payable to me by reason of such use.          
          </div>
          <h2 id="5" className="font-semibold text-xl mt-8">
            5. Acknowledgment of Understanding:
          </h2>
          <div className="font-thin text-sm">
            I have read this waiver of liability, assumption of risk, indemnity, and photo relase agreement fully, understand its terms, and understand that I am giving up substantial rights, including my right to sue. I acknowledge that I am signing the agreement freely and voluntarily, and intend by my signature to be a complete and unconditional release of all liability to the greatest extent allowed by law.
          </div>


        </div>

      </div>
      <Footer />
    </Container >
  );
};

export default LiabilityForm;
