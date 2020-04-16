import React from "react";
import "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = () => {
  return (
    <ul className="NavigationItems">
      <NavigationItem link="/">Dashboard</NavigationItem>
      <NavigationItem link="/">Discuss</NavigationItem>
    </ul>
  );
};

export default NavigationItems;
