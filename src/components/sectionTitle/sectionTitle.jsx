import React from "react";

const SectionTitle = (props) => {
  const { title, desc } = props;
  return (
    <>
      <h1 className="text-center font-extrabold text-2xl">{title}</h1>
      <p className="text-center text-xs my-2 text-gray-500 mb-8">{desc}</p>
    </>
  );
};

export default SectionTitle;
