import React from "react";
import Auxiliary from "../../Hoc/Auxiliary.js";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import "./Layout.css";
import Courses from "../../Container/Cources/Cources";
import Chapters from "../../Container/Chapters/Chapters";

const Layout = (props) => {
  return (
    <Auxiliary>
      <div>
        <Toolbar />, Side drawer
      </div>
      <div className="mainLayout">
        <div className="leftLayout">left div</div>
        <div className="centerLayout">
          <Courses />
          <Chapters />
        </div>
        <div className="rightLayout"></div>
      </div>
    </Auxiliary>
  );
};

export default Layout;
