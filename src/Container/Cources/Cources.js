import React, { Component } from "react";
import { connect } from "react-redux";
import Course from "./Course/Course";
import "./Courses.css";

class Courses extends Component {
  state = {
    courses: [
      { courseId: 1, courseName: "Java" },
      { courseId: 2, courseName: "React" },
    ],
    course: "",
  };

  onChangeHandler = (event) => {
    this.setState({ course: event.target.value });
  };

  addCourseHandler = () => {
    if (this.state.course !== "") {
      const newCourse = {
        courseName: this.state.course,
        courseId: Math.random(),
      };
      const newCoursesList = this.state.courses.concat(newCourse);
      this.setState({ courses: newCoursesList, course: "" });
    }
  };

  render() {
    const coursesJsx = (
      <div className="CoursesMap">
        {this.state.courses.map((course, index) => {
          return (
            <div
              key={course.courseId}
              className="eachCourseCss"
              onClick={() => this.props.onAddCourse(course.courseId)}
            >
              <Course courseName={course.courseName}></Course>
            </div>
          );
        })}
        <div className="eachCourseCss">
          <input
            size="10"
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
    onAddCourse: (course) =>
      dispatch({ type: "SELECTEDCOURSE", value: course }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Courses);
