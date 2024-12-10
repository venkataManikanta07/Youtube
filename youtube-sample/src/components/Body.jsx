import React from "react";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex mt-[10vh]  h-[86vh] w-full">
      <Sidebar />
      {/* <MainContainer /> */}
      <Outlet/>
    </div>
  );
};

export default Body;
