import React from "react";

const Button = (props) => {
  return (
    <>
      <button
        onClick={props?.onClick}
        className="my-1 md:my-0 bg-gradient-to-r from-violet-500 to-indigo-500 p-2 rounded-md text-white font-bold "
      >
        {props.children}
      </button>
    </>
  );
};

export default Button;
