import React from "react";
import InfoSection from "../infoSection/InfoSection";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="text-center">
      <InfoSection name={"404 | Page not found!"} />
      <p className="my-10">
        <strong>
          The page you looking for doesn't exist or an other <br />
          error occurred. Go to{" "}
        </strong>
        <Link className="text-blue-600 underline" to="/">
          Home Page
        </Link>
      </p>
    </div>
  );
};

export default Error;
