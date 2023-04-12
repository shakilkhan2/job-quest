import React from "react";
import HeroSection from "../heroSection/HeroSection";
import CategoryList from "../categoryList/CategoryList";
import { useLoaderData } from "react-router-dom";
import FeaturedJobs from "../featuredJobs/FeaturedJobs";

const Home = () => {
  const { category, jobs } = useLoaderData();
  return (
    <>
      <HeroSection />
      <div className="w-[70%] mx-auto">
        <CategoryList category={category} />
        <FeaturedJobs jobs={jobs} />
      </div>
    </>
  );
};

export default Home;
