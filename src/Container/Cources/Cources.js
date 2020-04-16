import React, { Component } from "react";
import { connect } from "react-redux";
import Course from "./Course/Course";
import "./Courses.css";

class Courses extends Component {
  state = {
    courses: ["Java", "React"],
    course: "",
  };

  onChangeHandler = (event) => {
    this.setState({ course: event.target.value });
  };

  addCourseHandler = () => {
    if (this.state.course !== "") {
      let newCourse = this.state.courses.concat(this.state.course);
      this.setState({ courses: newCourse, course: "" });
    }
  };

  render() {
    const coursesJsx = (
      <div className="CoursesMap">
        {this.state.courses.map((course, index) => {
          return (
            <div
              key={index}
              className="eachCourseCss"
              onClick={() => this.props.onAddCourse({ course })}
            >
              <Course courseName={course}></Course>
            </div>
          );
        })}
        <div className="eachCourseCss">
          Add Course :{" "}
          <input
            type="text"
            onChange={this.onChangeHandler}
            value={this.state.course}
          />
          &nbsp;<button onClick={this.addCourseHandler}>+</button>
        </div>
      </div>
    );
    return (
      <div className="CoursesCss">
        <div className="Coursesheading">
          <b>Courses</b>
        </div>
        {coursesJsx}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    courses: state.courses,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddCourse: (course) => dispatch({ type: "ADDCOURSE", value: course }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Courses);
