import { withUrqlClient } from "next-urql";
import { jobs } from "../../data/jobs";
import { createUrqlClient } from "../../utils/createUrqlClient";
import JobChunk from "@/components/JobChunk";

const JoinTeam = () => {

  return (
    <div className="flex flex-row h-[100vh] justify-center bg-black font-inter">
      <div className=" flex w-0 lg:w-1/2 md:m-0 bg-[url('/joinourteam.png')] bg-cover items-center justify-center invisible lg:visible bg-center" />
      {/* <div className="w-1/2 h-3/5 bg-[#3339] filter items-center justify-center rounded-2xl backdrop-blur"/> */}
      <div className="flex flex-col items-center lg:items-start justify-center p-4 w-[100vw] lg:w-1/2">
        <div className="mx-12">
          <div>
            <div className="font-bold text-4xl text-white">
              {`health{hacks}`} is growing. <br />
            </div>
            <div className="text-sm mt-4 font-medium text-white mb-6">
              Join our highly ambitious team around the nation in assembling the future leaders of healthcare. See our current open roles below.
            </div>

            <div className="max-h-[60vh]">
              {jobs.map((v, i) => (
                <div className="my-4" key={i}>
                  <JobChunk
                    role={v.role}
                    location={v.location}
                    page={v.page}
                    icon_name={v.icon_name}
                  />
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default withUrqlClient(createUrqlClient)(JoinTeam);
