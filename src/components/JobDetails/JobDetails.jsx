import React from "react";
import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const data = useLoaderData();
  console.log(data);

  if (!data)
    return (
      <div className="w-full text-center">
        <h1>Job Not Exist!</h1>
      </div>
    );

  return (
    <div>
      <h1 className="text-3xl font-bold text-center pt-20 pb-40 bg-purple-50">
        Job Details
      </h1>
      <div className="grid grid-cols-3 gap-8 m-36">
        <div className="col-span-2">
          <p>
            <span className="text-md font-semibold w-60">Job Description:</span>{" "}
            <span className="text-gray-600">{data?.job_description}</span>
          </p>
          <br />
          <p>
            <span className="text-md font-semibold w-60">
              Job Responsibility:{" "}
            </span>{" "}
            <span className="text-gray-600">{data?.job_responsibility}</span>
          </p>
          <br />
          <p>
            <span className="text-md font-semibold w-60">
              Educational Requirements:{" "}
            </span>{" "}
            <br />
            <span className="text-gray-600">{data?.requirements}</span>
          </p>
          <br />
          <p>
            <span className="text-md font-semibold w-60">Experiences: </span>{" "}
            <br />
            <span className="text-gray-600"> {data?.experiences}</span>
          </p>
        </div>
        <div>
          <div className="w-full bg-gradient-to-r from-indigo-50 to-purple-100 border shadow-sm p-10 rounded-md mb-4">
            <h1 className="text-xl font-bold">Job Details</h1>
            <p>
              <span className="text-md font-semibold w-60">Salary: </span>
              <span className="text-gray-600">{data?.salary}</span>
            </p>
            <p>
              <span className="text-md font-semibold w-60">Job Title: </span>
              <span className="text-gray-600">{data?.job_title}</span>
            </p>
            <br />
            <h1 className="text-xl font-bold">Contact Information</h1>
            <p>
              <span className="text-md font-semibold w-60">Phone: </span>
              <span className="text-gray-600">{data?.phone}</span>
            </p>
            <p>
              <span className="text-md font-semibold w-60">Email: </span>
              <span className="text-gray-600">{data?.email}</span>
            </p>
            <p>
              <span className="text-md font-semibold w-60">Address: </span>
              <span className="text-gray-600">{data?.location}</span>
            </p>
          </div>

          <button className=" w-full  md:my-0 bg-gradient-to-r from-violet-500 to-indigo-500 p-2 rounded-md text-white font-bold ">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
