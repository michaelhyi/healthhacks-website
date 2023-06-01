import readApplicationStatusById from "../../actions/readApplicationStatusById";
import readUser from "../../actions/readUser";
import Container from "../../components/Container";
import Footer from "../../components/Footer";

const Blog1 = async () => {
  const user = await readUser();
  const whitelisted = await readApplicationStatusById({ userId: user?.id });

  return (
    <Container user={user} whitelisted={whitelisted}>
      <img
        src="/blog/lettertofuture.png"
        alt="Letter to the Future"
        className="w-[300px] md:w-[400px] mt-8 mb-20 m-auto"
      />
      <div className="m-auto mt-16 w-[85vw] lg:w-[65vw] xl:w-[50vw] justify-center">
        <h1 className="font-bold text-4xl">
          Letter to the future leaders of healthcare.
        </h1>

        <div className="font-light text-[#ccc] text-sm">February 20, 2023</div>

        <div>
          <div className="font-thin text-md mt-8">
            Dear prospective leaders building the future of healthcare, <br />
            <br />
            Since our founding in 2020 in the corner of a local Irvine coffee
            shop, {`health{hacks}`} has become a promising up-and-coming
            healthcare hackathon nationwide, serving 750+ participants in three
            years. This is thanks to all in our ever-growing {`health{hacks}`}{" "}
            family: our valuable participants; esteemed company sponsors; our
            amazing judges, mentors, and speakers; and our believers.
            <br />
            <br />
            <br />
            <b className="text-lg">Our Milestones</b>
            <br />
            From the beginning, Zach and I strove to build a leading healthcare
            hackathon in California. Our experiences of working side-by-side
            with doctors, engineers, and designers at multiple healthcare
            hackathons nationwide inspired us to bring this special experience
            to those aspiring to build real social impact in spite of the
            rapidly escalating healthcare costs. Our events have come a long
            way:
            <br />
            <br />
            <ul className="list-disc list-outside px-12">
              <li className="pl-2">
                After two virtual events during the pandemic, we held our first
                in-person event at Stanford University with over 150
                participants from all different industry backgrounds.
              </li>
              <li className="pl-2">
                Our online engagement has risen with our viral Instagram Reels
                of our event with over 100k views.
              </li>
              <li className="pl-2">
                We have been sponsored by many diverse companies like Polygon,
                Clipboard Health, Amazon AWS, Google Cloud, and many more.
              </li>
              <li className="pl-2">
                We have had the honor to host high-caliber speakers from Khosla
                Ventures, Atomic Ventures, and Western Technology Investment.
              </li>
            </ul>
            <br />
            Even with our enormous impact in the hackathon space, we are here
            instead to build the future of healthcare, and we believe{" "}
            {`health{hacks}`} will be the beacon of innovation in this field for
            years to come. Today, many diverse creators who will become future
            leaders trek to our hackathons to open their eyes to diverse
            perspectives and build solutions that have enormous social benefit
            to society. Tomorrow, they will be able to continue their vision to
            turn their ideas into real products through our continuation program
            with funding and guidance. With this unique program, we will
            redefine innovation and the direction of hackathons as we hope to
            become a lasting influence amongst healthcare hackathons, even
            amongst well-established innovation events across the globe.
            <br />
            <br />
            <br />
            <b className="text-lg">Our Long Term Vision</b>
            <br />
            Amongst ourselves, we are constantly asking: what will{" "}
            {`health{hacks}`} look like in 5 years? In fact, it is a question I
            have consistently asked the 2023 {`health{hacks}`} team every step
            of our journey. Our team is determined to build a strong network of
            sister hackathons and innovation events around the United States. We
            are determined to have 10 outposts around the United States and
            North America by 2028. Led by experienced and passionate directors,
            these events will be where more than 400 determined and diverse
            creators will proactively assemble to revolutionize healthcare.
            <br />
            <br />
            Furthermore, we will roll out a continuation program centered at
            Stanford University in Fall of 2023 where the most innovative and
            entrepreneurial participants from our events can further germinate
            their ideas into products that will enter validation in the real
            market.
            <br />
            <br />
            Today, ideas made at healthcare hackathons across the spectrum are
            just that: ideas. But in conjunction with a continuation program,
            our events will become far more impactful as we’ll translate those
            ideas into powerful realities. We will achieve this dream when we
            invest our efforts towards our long term vision in a variety of
            ways:
            <br />
            <br />
            <ul className="list-disc list-outside px-12">
              <li className="pl-2">
                <u>We will remain virtuously impatient;</u> we are an
                organization that refuses to sit still and are constantly taking
                on different initiatives. We will continue to maintain the
                fastidious and risk-taking nature of {`health{hacks}`} given
                that it has played a significant role in our growth.
              </li>
              <li className="pl-2">
                <u>
                  We will hire talented directors that are empowered to be
                  owners in the vision of {`health{hacks}`}.
                </u>{" "}
                We want to build teams that are more than just effective; we
                believe in those in our team that are dedicated and proactive
                and will allow the {`health{hacks}`} team to become more
                cohesive and catalytic.
              </li>
              <li className="pl-2">
                <u>
                  We will focus on providing a first-class experience for our
                  participants in only a first-class way.
                </u>{" "}
                Through our innovation challenge and our continuation program,
                we will constantly be investing in participants during and
                beyond their time with us to fulfill their maximum potential and
                to blossom as leaders.
              </li>
              <li className="pl-2">
                <u>
                  We will reflect on the industrious and altruistic culture of
                  the {`health{hacks}`} team
                </u>{" "}
                during the event in efforts to translate it to the culture of
                the participants. Through close interactions between hackers and
                event organizers, we will unite individuals that are endearing
                and communicative with others, hence facilitating long-lasting
                relationships.
              </li>
            </ul>
            <br />
            <br />
            <b className="text-lg">Our 2023 Outlook</b>
            <br />
            With such an ambitious plan that we will follow as our North Star,
            we are committed to act now. 2023 will unequivocally be our most
            groundbreaking year yet. These are our main initiatives that will
            help drive {`health{hacks}`} to new places and redefine hackathons
            and their role in facilitating innovation:
            <br />
            <br />
            <u>MITOSIS INITIATIVE:</u> For the 2023 year, we will be hosting two
            of our classic hackathon events: a Bay Area event in April and a Los
            Angeles event in July. We will host 400+ participants at each event
            from doctors, engineers, designers, and more.
            <br />
            <br />
            <u>MEIOSIS INITIATIVE:</u> In Fall of 2023, the most innovative
            companies formed at our events will turn their ideas into real
            products at our continuation program hosted at Stanford. They will
            be provided with funding and guidance via a staged-investment in
            order to achieve further Seed Funding from VCs.
            <br />
            <br />
            <u>INTERPHASE INITIATIVE:</u> Since our 2022 in-person event, we
            have increased our team size from 16 to 45 consisting of high school
            students, undergraduates, graduate students, and industry
            professionals with backgrounds in business, medicine, and
            technology. We have incorporated a well-structured management team
            featuring high-level executives managing the operations of both
            events, as well as directors and VP’s overseeing their respective
            individual events and crews.
            <br />
            <br />
            <u>DIVERSITY AND INCLUSION:</u> Although we pride ourselves in
            several members of our planning team coming from first-generation
            low-income and underrepresented backgrounds, we still have much more
            to do. That is why we will strive have more diverse creators at our
            events, by working with other diverse organizations to increase
            accessibility and knowledge about our events
            <br />
            <br />
            <br />
            We now know much more about the future of healthcare innovation than
            where we were three years ago, but still have much to learn. We are
            all new to this and that is ok. Everything revolutionary must be
            built from the ground up. Now that we have laid a strong foundation,
            we must embark together on a difficult journey where we will face
            several challenges: risk in expansion to new locations; high risk
            investments in early healthcare ideas; and most importantly
            skepticism that students can fundamentally change healthcare. With{" "}
            {`health{hacks}`}’s devotion to bolstering relationships and lifting
            communities, I am confident our family will be a compelling
            centripetal force and a catalyst of the future.
            <br />
            <br />
            2022 was by far our most fruitful year, and we hope to leverage our
            rapidly developing influence and resources to fuel our relentless
            pursuit towards our ambitions for 2023. We look forward to you all
            joining us this coming year as it will serve as a precedent for the
            many years ahead of {`health{hacks}`}.
            <br />
            <br />
            <br />
            Sincerely,
            <br />
            <b className="text-lg">William Pan</b>
            <br />
            Co-Founder and Chief Executive Officer
            <br />
            {`health{hacks}`}
          </div>
        </div>
      </div>
      <Footer />
    </Container>
  );
};

export default Blog1;
