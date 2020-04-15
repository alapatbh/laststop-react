import React from "react";
import Auxiliary from "../../Hoc/Auxiliary/Auxiliary.js";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import "./Layout.css";

const Layout = (props) => {
  return (
    <Auxiliary>
      <div>
        <Toolbar />, Side drawer
      </div>
      <main className="mainCss">{props.children}</main>
    </Auxiliary>
  );
};

export default Layout;
