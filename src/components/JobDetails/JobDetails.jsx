import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import InfoSection from "../infoSection/InfoSection";
import { getJobs, storeJobs } from "../../utilities/storeJobs";
import toast from "react-hot-toast";

const JobDetails = () => {
  const singleJob = useLoaderData();
  const [applied, setApplied] = useState(false);

  const handleApplied = () => {
    const stored = storeJobs(singleJob);
    if (!stored) {
      toast.error("You have already Applied.");
    } else {
      toast.success("Successfully Applied.");
      setApplied(true);
    }
  };

  useEffect(() => {
    const jobs = getJobs();
    if (jobs) {
      const isExist = jobs.find((job) => job === singleJob.id);
      if (isExist) {
        setApplied(true);
      } else {
        setApplied(false);
      }
    }
  }, [singleJob]);

  return (
    <>
      <InfoSection name={"Job Details"} />

      <div className="my-10 w-[70%] mx-auto grid grid-cols-3 gap-4">
        {/* Grid 1 */}
        <div className="col-span-2">
          <p className="text-sm text-gray-700 my-4">
            <strong className="text-gray-800 mr-2 text-md">
              Job Description:
            </strong>
            {singleJob.job_description}
          </p>
          <p className="text-sm text-gray-700 my-4">
            <strong className="text-gray-800 mr-2 text-md">
              Job Responsibility:
            </strong>
            {singleJob.job_responsibility}
          </p>
          <h1 className="text-sm text-gray-700 my-4">
            <strong className="text-gray-800 mr-2 text-md">
              Educational Requirements:
            </strong>
          </h1>
          <p className="text-sm text-gray-700 my-4">{singleJob.requirements}</p>
          <h1 className="text-sm text-gray-700 my-4">
            <strong>Experiences:</strong>
          </h1>
          <p className="text-sm text-gray-700 my-4">{singleJob.experiences}</p>
        </div>

        {/* Grid 2 */}
        <div>
          <div className="bg-gradient-to-r from-[#f3f4ff] to-[#f6f1ff] p-6 rounded">
            <div className="mb-6 w-[100px]">
              <img src={singleJob.company_logo} className="w-full" alt="" />
            </div>
            <h1 className="font-semibold text-gray-600">Job Details</h1>
            <hr className="my-3" />
            <div>
              <p className="text-sm my-2 text-gray-600">
                <i className="bx bx-dollar-circle text-[#7E90FE]"></i>
                <strong className="mx-2">Salary:</strong>
                {singleJob.salary}
              </p>
              <p className="text-sm my-2 text-gray-600">
                <i className="bx bx-rename text-[#7E90FE]"></i>
                <strong className="mx-2">Job Title:</strong>
                {singleJob.job_title}
              </p>
            </div>
            <h1 className="font-semibold text-gray-600 mt-5">
              Contact Information
            </h1>
            <hr className="my-3" />
            <div>
              <p className="text-sm my-2 text-gray-600">
                <i className="bx bxs-phone text-[#7E90FE]"></i>
                <strong className="mx-2">Phone:</strong>
                {singleJob.phone}
              </p>
              <p className="text-sm my-2 text-gray-600">
                <i className="bx bx-envelope text-[#7E90FE]"></i>
                <strong className="mx-2">Email:</strong>
                {singleJob.email}
              </p>
              <p className="text-sm my-2 text-gray-600">
                <i className="bx bx-map text-[#7E90FE]"></i>
                <strong className="mx-2">Address:</strong>
                {singleJob.location}
              </p>
            </div>
          </div>
          <button
            className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] py-3 px-4 rounded text-white text-sm font-medium hover:from-[#9873FF] hover:to-[#7E90FE] w-full my-6 disabled:from-[#a0adff] disabled:to-[#b195ff]"
            onClick={handleApplied}
          >
            {applied ? "Already Applied" : "Apply Now"}
          </button>
        </div>
      </div>
    </>
  );
};

export default JobDetails;
