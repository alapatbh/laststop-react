import React from "react";
import "../Components/Navigation/Logo/Logo.css";

const withClass = (WrappedComponent, className) => {
  console.log(className);
  return (props) => (
    <div className={className}>
      <WrappedComponent />
    </div>
  );
};

export default withClass;
