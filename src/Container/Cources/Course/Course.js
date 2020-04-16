import React from "react";
import "./Course.css";
import Auxiliary from "../../../Hoc/Auxiliary";

const Course = (props) => {
  return <Auxiliary>{props.courseName}</Auxiliary>;
};

export default Course;
