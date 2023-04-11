import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import Button from "../Button/Button";

import { Link } from "react-router-dom";

const FeaturedJobs = ({ job }) => {
  return (
    <div className="border shadow-sm rounded p-8">
      <div className="w-full">
        <img className="w-[100px]" src={job?.company_logo} alt="" />
      </div>
      <h1 className="mb-3 mt-2 font-medium text-gray-800">{job.job_title}</h1>
      <h1>{job.company_name}</h1>
      <p>{job.remote_or_onsite}</p>
      <h5> {job.duration}</h5>
      <div className="mb-8">
        <p>{job.location}</p> <p>{job.salary}</p>
      </div>
      <Link to={`/job/${job.id}`}>
        <Button>View Details</Button>
      </Link>
    </div>
  );
};

export default FeaturedJobs;
