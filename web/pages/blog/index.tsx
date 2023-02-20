import BlogChunk from "@/components/BlogChunk";
import Container from "../../components/Container";

const Blog = () => {
  return (
    <Container>
      <div className="flex flex-col justify-center bg-black h-full items-center">

        {/* Featured Post */}
        <div className="w-full md:w-[900px] xl:w-[1000px] bg-blogbackground bg-cover h-[60vh] md:h-[80vh] xl:h-[80vh] bg-top">
          <div className="w-[75%] mx-auto">
            <div className="font-semibold text-3xl mt-4 md:mt-12 lg:mt-20">Blog</div>
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


        {/* Other posts */}
        {/* <div className="flex flex-col justify-center bg-black h-full">
          <div className="w-full md:w-[900px] xl:w-[1000px] h-[60vh] md:h-[80vh] xl:h-[80vh]">
            <div className="w-[75%] mx-auto">
              <div className="w-full bg-[#d9d9d9f7] h-auto md:h-auto rounded-xl mt-4">
                <BlogChunk
                  category="Featured Article"
                  date="February 20, 2023"
                  author="William Pan"
                  affiliation="Leadership"
                  pfp="/team/william.jpg"
                  image="/blog/lettertofuture.png"
                  title="Letter to the future leaders of healthcare."
                  desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                  page="/terms-of-use"
                  color="white"
                />
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </Container>
  );
};

export default Blog;
