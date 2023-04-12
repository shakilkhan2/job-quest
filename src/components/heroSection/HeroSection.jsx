import React from "react";

const HeroSection = () => {
  return (
    <div className="w-full bg-[#f9f9ff] md:h-[450px] sm:h-[600px] h-[600px]">
      <section className="grid md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-4 w-[70%] mx-auto">
        <div className="flex items-center">
          <div>
            <h1 className="font-extrabold text-4xl leading-tight mb-2">
              <span className="block">One Step</span>
              <span className="block">Closer To Your</span>
              <span className="text-[#9873FF]">Dream Job</span>
            </h1>
            <p className="mt-2 text-xs text-gray-500">
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
            <button className="mt-5 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] py-2 px-4 rounded text-white text-sm font-medium hover:from-[#9873FF] hover:to-[#7E90FE]">
              Get Started
            </button>
          </div>
        </div>
        <div className="w-full">
          <img
            className="w-full md:h-[450px] sm:h-[320px] h-[320px]"
            src="/image/P3OLGJ1.png"
            alt=""
          />
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
