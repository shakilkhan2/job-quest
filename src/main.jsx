import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Statistics from "./components/Statistics/Statistics";
import AppliedJobs from "./components/AppliedJobs/AppliedJobs";
import Blog from "./components/Blog/Blog";
import Home from "./components/Home/Home";
import FeaturedJobs from "./components/FeaturedJobs/FeaturedJobs";
import loadData from "./utils/loadData";
import Error from "./components/Error/Error";
import JobDetails from "./components/JobDetails/JobDetails";
import Loading from "./components/Loading/Loading";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: async () => loadData(true),
      },
      {
        path: "/job/:id",
        element: <JobDetails />,
        loader: async ({ params }) => {
          const res = await fetch("/category.json");
          const data = await res.json();

          const job = data.find((single) => single.id === params.id);
          if (job) {
            return job;
          } else {
            return null;
          }
        },
      },
      {
        path: "statistics",
        element: <Statistics />,
      },
      {
        path: "applied-jobs",
        element: <AppliedJobs />,
      },
      {
        path: "blogs",
        element: <Blog />,
      },
      {
        path: "*",
        element: <Error />,
      },
      {
        path: "loading",
        element: <Loading />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
