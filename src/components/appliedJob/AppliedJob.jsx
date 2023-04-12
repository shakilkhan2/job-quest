import React, { useEffect, useState } from "react";
import InfoSection from "../infoSection/InfoSection";
import { useLoaderData, useNavigate } from "react-router-dom";

const AppliedJob = () => {
  const data = useLoaderData();
  const navigate = useNavigate();
  const [filtered, setFiltered] = useState([]);

  const handleFilter = (filter) => {
    if (!filter) {
      setFiltered(data);
    } else {
      const filteredData = data.filter(
        (job) => job.remote_or_onsite === filter
      );
      setFiltered(filteredData);
    }
  };

  useEffect(() => {
    setFiltered(data);
  }, []);

  return (
    <>
      <InfoSection name={"Applied Job"} />
      <div className="my-6 w-[70%] mx-auto">
        {data ? (
          <>
            <div className="w-full text-right">
              <select
                className="border px-2 py-1 rounded text-sm"
                onChange={(e) => handleFilter(e.target.value)}
              >
                <option value="">Filter By</option>
                <option value="Onsite">Onsite</option>
                <option value="Remote">Remote</option>
              </select>
            </div>

            <div className="grid grid-cols-1 gap-4 my-4">
              {filtered.map((job) => (
                <div
                  key={job.id}
                  className="border shadow-sm rounded p-6 flex justify-between"
                >
                  <div className="flex items-center">
                    <div className="w-[150px] mr-5 bg-slate-100 h-full flex justify-center items-center px-4">
                      <img
                        src={job.company_logo}
                        className="w-full"
                        alt={job.company_name}
                      />
                    </div>
                    <div>
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
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div>
                      <button
                        className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] py-2 px-4 rounded text-white text-sm font-medium hover:from-[#9873FF] hover:to-[#7E90FE] mt-3"
                        onClick={() => navigate(`/job-details/${job.id}`)}
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <h1 className="text-center my-10 text-2xl font-bold">
            No Applied Job Found.
          </h1>
        )}
      </div>
    </>
  );
};

export default AppliedJob;
