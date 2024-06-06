import React from "react";
import MensCategory from "../_section/MensCategory/page";
import Sidebar from "../_section/Sidebar/Sidebar";

function page() {
  return (
    <div className="flex">
      <Sidebar />
      <MensCategory />
    </div>
  );
}

export default page;
