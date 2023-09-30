import React from "react";
import "../componentCss/sidebar.css";
const Sidebar = ({ showMenu }) => {
  return (
    <div className="classNameis_this">
      <div
        className={(showMenu && "showSidebar") || "hideSidebar"}
        id="sidebar"
      ></div>
    </div>
  );
};

export default Sidebar;
