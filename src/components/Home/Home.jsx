import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Button from "../Button/Button";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import { data } from "autoprefixer";
import loadData from "../../utils/loadData";

const Home = () => {
  /************Featured Jobs*************/ const { category, jobs: jobTypes } =
    useLoaderData();
  const [cats, setCats] = useState([]);

  useEffect(() => {
    setCats(category);
  }, []);

  const viewAll = async () => {
    const res = await loadData();
    setCats(res.category);
  };
  return (
    <div>
      {/* ------Header Start------ */}
      <div className="bg-purple-50  flex flex-col-reverse md:flex-row  justify-around items-center pt-11">
        <div>
          <h1 className="text-5xl font-bold ">
            One Step <br /> <span className="">Closer To Your</span> <br />{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-indigo-500">
              Dream Job
            </span>
          </h1>
          <p className="mt-4 text-gray-600 mb-4">
            Explore thousands of job opportunities with all the <br />{" "}
            information you need. Its your future. Come find it. Manage all{" "}
            <br /> your job application from start to finish.
          </p>
          <Button>Get Started</Button>
        </div>
        <div>
          <img
            className="h-96"
            src="https://user-images.githubusercontent.com/121633983/230816140-2cce2a80-9642-41d6-951b-72cd1b64403d.png"
            alt=""
          />
        </div>
      </div>
      {/* ------Header End------ */}

      {/* ------Job List Start------ */}
      <div className="text-center mt-16">
        <h2 className="text-3xl font-bold">Job Category List</h2>
        <p className="text-gray-600">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="flex flex-col md:flex-row  md:flex md:justify-center mt-8 md:mb-8 gap-8 content-center justify-center ml-32 md:ml-0">
        {jobTypes.map((jobType) => (
          <div
            className="bg-purple-50 w-60 h-52 pt-8 pl-8 border shadow-sm rounded-md mt-4  "
            key={jobType?.id}
          >
            <img
              className="bg-purple-200 p-2 rounded-md"
              src={jobType?.logo}
              alt="job logo"
            />
            <h3 className="text-base font-bold">{jobType?.name} </h3>{" "}
            <p className="text-gray-600">{jobType?.available}</p>
          </div>
        ))}
      </div>
      {/* ------Job List End------ */}

      {/* ------Feature Jobs------ */}

      <div>
        <div className="text-center mt-16 mb-12">
          <h1 className="text-3xl font-bold">Featured Jobs</h1>
          <p className="text-gray-600">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
      </div>
      {/* <div className="grid grid-cols-2 justify-center items-center place-items-center gap-4 ">
        {jobs.map((job) => (
          <FeaturedJobs keys={job.id} job={job}></FeaturedJobs>
        ))}
      </div> */}

      <div className="w-[70%] mx-auto">
        <div className="grid grid-cols-2 gap-4">
          {cats.map((job) => (
            <FeaturedJobs keys={job.id} job={job}></FeaturedJobs>
          ))}
        </div>
      </div>

      <div className="w-[99%]  mx-auto text-center mt-8 mb-12">
        <Button onClick={viewAll}>See All Jobs</Button>
      </div>
    </div>
  );
};

export default Home;
