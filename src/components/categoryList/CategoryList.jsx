import React from "react";
import SectionTitle from "../sectionTitle/sectionTitle";

const CategoryList = (props) => {
  const { category } = props;
  return (
    <section className="my-20">
      <SectionTitle
        title={"Job Category List"}
        desc={
          "Explore thousands of job opportunities with all the information you need. Its your future"
        }
      />
      <div className="grid md:grid-cols-4 sm:grid-cols-1 grid-cols-1 gap-4">
        {category.map((cat) => (
          <div
            key={cat.id}
            className="bg-gradient-to-r from-[#f9f9ff] to-[#faf8ff] p-6 rounded"
          >
            <span className="bg-[#e7deff] text-[#9873FF] py-4 w-10 h-10 rounded flex justify-center items-center">
              <i className={cat.icon}></i>
            </span>
            <h1 className="mt-4 text-md font-medium">{cat.name}</h1>
            <p className="text-xs mt-1 text-gray-400">{cat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryList;
