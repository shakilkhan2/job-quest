import React from "react";

const InfoSection = (props) => {
  const { name } = props;
  return (
    <div>
      <img
        src="/image/Vector-1.png"
        className="absolute top-0 right-0 w-[200px] z-10"
        alt=""
      />
      <section className="w-full relative">
        <div className="bg-gradient-to-r from-[#f9f9ff] to-[#faf8ff] h-[250px] flex justify-center items-center font-bold text-xl text-gray-700">
          {name}
        </div>
        <img
          src="/image/Vector.png"
          className="absolute bottom-0 left-0 w-[250px]"
          alt=""
        />
      </section>
    </div>
  );
};

export default InfoSection;
