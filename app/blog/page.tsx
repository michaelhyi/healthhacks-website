import BlogChunk from "../components/BlogChunk";
import Footer from "../components/Footer";
import Container from "../components/Container";

//@ts-ignore
import Fade from "react-reveal/Fade";

const Blog = () => {
  return (
    <Container>
      <div className="flex flex-col h-auto 2xl:h-screen justify-between">
        {/* <Fade delay={500} up distance="24px"> */}
        <div className="flex flex-col justify-center bg-black h-full items-center mb-0 2xl:mb-auto">
          <div className="w-full md:w-[900px] xl:w-[1000px] bg-blogbackground bg-cover h-[60vh] md:h-[80vh] xl:h-[80vh] 2xl:h-[600px] bg-top">
            <div className="w-[75%] mx-auto">
              <div className="font-semibold text-3xl mt-4 md:mt-12 lg:mt-20">
                Blog
              </div>
              <div className="w-full bg-[#d9d9d9f7] h-auto md:h-auto rounded-xl mt-4">
                <BlogChunk
                  category="Featured Article"
                  date="February 20, 2023"
                  author="William Pan"
                  affiliation="Leadership"
                  pfp="/team/william.jpg"
                  image="/blog/lettertofuture.png"
                  title="Letter to the future leaders of healthcare."
                  desc="Dear prospective leaders building the future of healthcare,
                  Since our founding in 2020 in the corner of a local Irvine coffee shop, health{hacks} has become a promising up-and-coming healthcare hackathon nationwide, serving 750+ participants in three years. This is thanks to all in our ever-growing health{hacks} family: our valuable participants; esteemed company sponsors; our amazing judges, mentors, and speakers; and our believers."
                  page="/blog/letter-to-the-future-leaders-of-healthcare"
                  color="black"
                />
              </div>
            </div>
          </div>
        </div>
        {/* </Fade> */}
        <Footer />
      </div>
    </Container>
  );
};

export default Blog;
