import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center mt-44 p-4 bg-purple-50">
      <div className="mt-8 w-10 h-10 rounded-full animate-spin bg-gradient-to-r from-violet-500 to-indigo-500 border-4 border-dashed"></div>
    </div>
  );
};

export default Loading;
