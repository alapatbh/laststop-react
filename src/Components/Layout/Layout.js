import React from "react";
import Auxiliary from "../../Hoc/Auxiliary.js";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import "./Layout.css";
import Courses from "../../Container/Cources/Cources";
import Chapters from "../../Container/Chapters/Chapters";
import Topics from "../../Container/Topics/Topics";

const Layout = (props) => {
  return (
    <Auxiliary>
      <div>
        <Toolbar />, Side drawer
      </div>
      <div className="mainLayout">
        <div className="leftLayout"></div>
        <div className="centerLayout">
          <div className="eachCenterDiv">
            <Courses />
          </div>
          <div className="coursesAndTopicsDiv">
            <div className="eachCenterDiv">
              <Chapters />
            </div>
            <div className="eachCenterDiv">
              <Topics />
            </div>
          </div>
        </div>
        <div className="rightLayout"></div>
      </div>
    </Auxiliary>
  );
};

export default Layout;
