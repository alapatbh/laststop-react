import React from "react";
import "./Toolbar.css";
import Logo from "../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

const Toolbar = (props) => {
  return (
    <header className="Toolbar">
      <div className="ToolbarLogo">
        <Logo />
      </div>
      <NavigationItems />
    </header>
  );
};

export default Toolbar;
