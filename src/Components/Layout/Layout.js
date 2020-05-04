import React from "react";
import Auxiliary from "../../Hoc/Auxiliary.js";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import "./Layout.css";
import Dashboard from "../Dashboard/Dashboard";
import Discussions from "../Discussions/Discussions";
import { Route, Switch } from "react-router-dom";

const Layout = (props) => {
  return (
    <Auxiliary>
      <div>
        <Toolbar />, Side drawer
      </div>
      <div className="mainLayout">
        <div className="leftLayout"></div>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/discussions" exact component={Discussions} />
        </Switch>
        <div className="rightLayout"></div>
      </div>
    </Auxiliary>
  );
};

export default Layout;
