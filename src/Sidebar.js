import React from "react";
import "./Sidebar.css";

function Sidebar({ title, Icon }) {
  return (
    <div className="sidebar">
      {Icon}
      <h4>{title}</h4>
    </div>
  );
}

export default Sidebar;
