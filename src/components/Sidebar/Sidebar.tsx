import React from "react";
import Nav from "../../_nav";
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebarContainer">
      <h2 className="logo">Logo</h2>
      <Nav />
    </div>
  );
};

export default Sidebar;
