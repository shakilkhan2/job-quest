import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";

import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Toaster />
    </>
  );
};

export default App;
