import React, { Component } from "react";
import { connect } from "react-redux";
import Auxiliary from "../../Hoc/Auxiliary";
import "./Chapters.css";
import Chapter from "./Chapter/Chapter";

class Chapters extends Component {
  state = {
    addChapter: "",
    chapters: [
      { courseId: 1, chapterId: 1, chapterName: "Core Java" },
      { courseId: 1, chapterId: 2, chapterName: "Serialization" },
      { courseId: 2, chapterId: 3, chapterName: "Basics" },
    ],
  };

  changeChapterHandler = (event) => {
    this.setState({
      addChapter: event.target.value,
    });
  };

  addChapterHandler = () => {
    const newChapter = {
      courseId: this.props.storedCourse.courseId,
      chapterId: Math.random(),
      chapterName: this.state.addChapter,
    };
    this.setState({
      chapters: this.state.chapters.concat(newChapter),
      addChapter: "",
    });
  };

  render() {
    let chaptersDiv = <div></div>;
    if (this.props.storedCourse) {
      chaptersDiv = (
        <div className="ChaptersCss">
          <div className="chapterInner">
            <div>
              <b> Chapters in {this.props.storedCourse.courseName}</b>
            </div>
            <div className="chaptersList">
              {this.state.chapters.map((chapter) => {
                if (chapter.courseId === this.props.storedCourse.courseId)
                  return (
                    <div
                      className="eachChapter"
                      key={chapter.chapterId}
                      onClick={() => this.props.onClickedChapter(chapter)}
                    >
                      <Chapter chapterName={chapter.chapterName} />
                    </div>
                  );
                else return null;
              })}
            </div>
            <div className="addChapterCSS">
              <input
                type="text"
                size="10"
                onChange={this.changeChapterHandler}
                value={this.state.addChapter}
              />
              &nbsp;
              <button onClick={this.addChapterHandler}>+</button>
            </div>
          </div>
        </div>
      );
    }
    return <Auxiliary>{chaptersDiv}</Auxiliary>;
  }
}

const mapStateToProps = (state) => {
  return {
    storedCourse: state.course,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClickedChapter: (chapter) =>
      dispatch({
        type: "SELECTEDCHAPTER",
        value: chapter,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Chapters);
