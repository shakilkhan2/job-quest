import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const FeaturedJobs = (props) => {
  console.log(props);
  const { company_logo, company_name, job_title, remote_or_onsite, duration } =
    props.job;
  return (
    <div>
      <div className="w-80 h-56 border border-gray-500">
        <img src={company_logo} alt="" />
        <h1>{job_title}</h1>
        <h1>{company_name}</h1>
        <div className="flex">
          <h5 className="border border-purple-400 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-violet-500">
            {remote_or_onsite}
          </h5>
          <h5>{duration}</h5>
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobs;
