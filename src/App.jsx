import React from "react";
import Header from "./components/Header/Header";
import { Outlet, useNavigation } from "react-router-dom";
import Loading from "./components/Loading/Loading";

const App = () => {
  const navigation = useNavigation();
  return (
    <div>
      <Header />
      <div>{navigation.state === "loading" ? <Loading /> : ""}</div>
      <Outlet />
    </div>
  );
};

export default App;
