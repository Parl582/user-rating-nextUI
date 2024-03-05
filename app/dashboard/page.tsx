import React from "react";
import Sidebar from "./sidebar";
import DashboardHeader from "./dashboard_header";
import DashboardContainer from "./dashoard_container";

export default function page() {
  return (
    <div className="flex justify-between w-full">
      <Sidebar />
      <div className="flex-1  h-screen overflow-y-auto">
        {/* <DashboardHeader />
        <DashboardContainer /> */}
      </div>
    </div>
  );
}
