import React, { Component } from "react";
import { connect } from "react-redux";
import Auxiliary from "../../Hoc/Auxiliary";

class Chapters extends Component {
  state = {
    chapters: [{ courseName: "Java", chapterId: 1, chapterName: "Core Java" }],
  };

  render() {
    let chaptersDiv = <div></div>;
    if (this.props.storedAdminCourseId) {
      chaptersDiv = (
        <div>Chapters - Course : {this.props.storedAdminCourseId}</div>
      );
    }
    return <Auxiliary>{chaptersDiv}</Auxiliary>;
  }
}

const mapStateToProps = (state) => {
  return {
    storedAdminCourseId: state.adminCourse,
  };
};

export default connect(mapStateToProps)(Chapters);
