import React from "react";
import InfoSection from "../infoSection/InfoSection";

const Blog = () => {
  return (
    <div>
      <InfoSection name={" Common Questions"} />

      <div className="w-3/4 mx-auto my-8">
        <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-violet-500">
          1. When should you use context API?
        </h1>
        <p>
          <strong>Context API</strong> is a smart way to pass various values
          without using props drilling method. Sometimes it requires to pass
          different types of value to different components. For doing this we
          have to face complicity as we have to use props in every component
          from parents to children. But using "Context API" it is very easy to
          send any values to any components directly using 'useContext' hook
          without facing any difficulty like props drilling.
        </p>
        <br />
        <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-violet-500">
          2. What is a custom hook?
        </h1>
        <p>
          <strong>Custom Hook</strong> is a function that takes input and
          returns output. It can be used as like others it also start with{" "}
          <strong>use</strong> like useState, useContext, useLoaderData. But it
          can be customized as per necessity or requirements. And it use totally
          separate logic from UI.
        </p>
        <br />
        <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-violet-500">
          3. What is useRef?
        </h1>
        <p>
          <strong>useRef</strong> is a built in react hook. That accepts one
          argument as the initial value and returns a reference. A reference is
          an object having a special property current. One common use case for
          useRef is to access and manipulate the DOM nodes of a component.
        </p>
        <br />
        <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-violet-500">
          4. What is useMemo?
        </h1>
        <p>
          <strong>useMemo()</strong> is a function that returns a memoized value
          of a passed in resource-intensive function. It is very useful in
          optimizing the performance of a React component by eliminating
          repeating heavy computations. The useMemo Hook only runs when one of
          its dependencies update. The useMemo Hook can be used to keep
          expensive, resource intensive functions from needlessly running.
        </p>
      </div>
    </div>
  );
};

export default Blog;
