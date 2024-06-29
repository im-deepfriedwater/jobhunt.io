"use client"
import { useState } from "react";
import Sidebar from "./sidebar";



const ResponsiveSidebarNav = () => {
  const [isSidebarShowing, setIsSidebarShowing] = useState(false);
  return (
    <>
      <Sidebar isSidebarShowing={isSidebarShowing} setIsSidebarShowing={setIsSidebarShowing}/>
    </>
  );
};

export default ResponsiveSidebarNav;