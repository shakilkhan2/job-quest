import React from "react";

const Error = () => {
  return (
    <div className="text-center">
      <h1 className="text-5xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-violet-500 mt-40  ">
        404|Page not found!
      </h1>
      <p>
        <strong>
          {" "}
          The page you looking for doesn't exist or an other <br />
          error occurred. Go to{" "}
        </strong>
        <a className="text-blue-600 underline" href="/">
          Home Page
        </a>
      </p>
    </div>
  );
};

export default Error;
