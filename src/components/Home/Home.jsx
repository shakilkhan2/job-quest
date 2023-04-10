import React from "react";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const jobTypes = useLoaderData();
  console.log(jobTypes);
  return (
    <div>
      
      <div className="bg-purple-50  flex flex-col-reverse md:flex-row  justify-around items-center pt-11">
        <div>
          <h1 className="text-5xl font-bold ">
            One Step <br /> <span className="">Closer To Your</span> <br />{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-indigo-500">
              Dream Job
            </span>
          </h1>
          <p className="mt-4">
            <small className="text-gray-600">
              Explore thousands of job opportunities with all the <br />{" "}
              information you need. Its your future. Come find it. Manage all{" "}
              <br /> your job application from start to finish.
            </small>
          </p>
        </div>
        <div>
          <img
            className="h-96"
            src="https://user-images.githubusercontent.com/121633983/230816140-2cce2a80-9642-41d6-951b-72cd1b64403d.png"
            alt=""
          />
        </div>
      </div>
      <div className="text-center mt-16">
        <h2 className="text-3xl font-bold">Job Category List</h2>
        <p className="text-gray-600">
          <small>
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </small>
        </p>
      </div>
      <div>
      
      </div>
      {
        jobTypes.map(jobType =>())
      }
    </div>
  );
};

export default Home;
