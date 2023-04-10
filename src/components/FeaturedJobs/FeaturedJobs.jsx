import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Button from "../Button/Button";

const FeaturedJobs = (props) => {
  console.log(props);
  const {
    company_logo,
    company_name,
    job_title,
    remote_or_onsite,
    duration,
    salary,
    location,
  } = props.job;
  return (
    <div className="">
      {/* <div className="w-96  border border-gray-200 pt-8 pl-8 pb-10 rounded-md bg-purple-50">
        <img className="h-9 w-28" src={company_logo} alt="" />
        <h1 className="font-bold text-xl text-gray-500 mt-4">{job_title}</h1>
        <h1 className=" text-gray-500 my-3">{company_name}</h1>
        <div className="flex mb-4">
          <h5 className="border rounded border-purple-400 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-violet-500 px-2">
            {remote_or_onsite}
          </h5>
          <h5 className="border rounded border-purple-400 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-violet-500 ml-4 px-2">
            {duration}
          </h5>
        </div>
        <div className="font-semibold text-gray-500 mb-4 flex gap-4">
          <p>{location}</p> <p>{salary}</p>
        </div>
        <Button>View Details</Button>
      </div> */}
    </div>
  );
};

export default FeaturedJobs;
