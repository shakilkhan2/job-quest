import React from "react";

const Button = ({ children }) => {
  return (
    <div>
      <button className="my-1 md:my-0 bg-gradient-to-r from-violet-500 to-indigo-500 p-2 rounded-md text-white font-bold ">
        {children}
      </button>
    </div>
  );
};

export default Button;
