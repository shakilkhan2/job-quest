import React, { useState } from "react";
import SectionTitle from "../sectionTitle/sectionTitle";
import { useNavigate } from "react-router-dom";

const FeaturedJobs = (props) => {
  const { jobs } = props;
  const navigate = useNavigate();
  const [count, setCount] = useState(4);

  const seeAll = () => {
    if (count === 4) {
      setCount(100);
      return;
    }
    setCount(4);
  };
  return (
    <div>
      <SectionTitle
        title={"Featured Jobs"}
        desc={
          "Explore thousands of job opportunities with all the information you need. Its your future"
        }
      />
      <div className="grid md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-4">
        {jobs.slice(0, count).map((job) => (
          <div key={job.id} className="border shadow-sm rounded p-6">
            <div className="w-[100px]">
              <img
                src={job.company_logo}
                className="w-full"
                alt={job.company_name}
              />
            </div>
            <h1 className="font-bold mt-4">{job.job_title}</h1>
            <p className="text-sm">{job.company_name}</p>
            <div className="flex items-center my-3">
              <span className="border border-[#7E90FE] text-[#9873FF] text-sm px-3 py-1 rounded mx-1">
                {job.remote_or_onsite}
              </span>
              <span className="border border-[#7E90FE] text-[#9873FF] text-sm px-3 py-1 rounded mx-1">
                {job.duration}
              </span>
            </div>
            <div className="flex items-center">
              <span className="text-sm text-gray-600 mx-1">
                <i className="bx bxs-map mr-1"></i>
                {job.location}
              </span>
              <span className="text-sm text-gray-600 mx-1">
                <i className="bx bx-dollar-circle mr-1"></i>
                {job.salary}
              </span>
            </div>
            <button
              className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] py-2 px-4 rounded text-white text-sm font-medium hover:from-[#9873FF] hover:to-[#7E90FE] mt-3"
              onClick={() => navigate(`/job-details/${job.id}`)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>
      <div className="text-center my-4">
        <button
          className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] py-2 px-4 rounded text-white text-sm font-medium hover:from-[#9873FF] hover:to-[#7E90FE] mt-3"
          onClick={seeAll}
        >
          {count === 4 ? "See All Jobs" : "See Less"}
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
