import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/home/Home";
import JobDetails from "./components/jobDetails/JobDetails";
import AppliedJob from "./components/appliedJob/AppliedJob";
import Statistics from "./components/statistics/Statistics";
import Blog from "./components/blog/Blog";
import { appliedJobs } from "./utilities/storeJobs";
import Error from "./components/error/Error404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: async () => {
          const [category, jobs] = await Promise.all([
            fetch("/data/category.json").then((res) => res.json()),
            fetch("/data/jobs.json").then((res) => res.json()),
          ]);
          return { category, jobs };
        },
      },
      {
        path: "/job-details/:id",
        element: <JobDetails />,
        loader: async ({ params }) => {
          const res = await fetch("/data/jobs.json");
          const data = await res.json();

          const uniqueJob = data.find((job) => job.id === params.id);
          return uniqueJob;
        },
      },
      {
        path: "/applied-job",
        element: <AppliedJob />,
        loader: async () => appliedJobs(),
      },
      { path: "/statistics", element: <Statistics /> },
      { path: "/blog", element: <Blog /> },
    ],
  },
  { path: "*", element: <Error /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
