import React from "react";
import "./NavigationItem.css";
import { NavLink } from "react-router-dom";

const NavigationItem = (props) => {
  return (
    <li className="NavigationItem">
      <NavLink activeClassName="NavActiveItem" to={props.link} exact>
        {props.children}
      </NavLink>
    </li>
  );
};

export default NavigationItem;
