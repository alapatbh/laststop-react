import React, { Component } from "react";
import { connect } from "react-redux";
import Auxiliary from "../../Hoc/Auxiliary";

class Topics extends Component {
  render() {
    let topicsBody = <div></div>;
    if (this.props.storedChapter) {
      topicsBody = (
        <div className="ChaptersCss">
          {this.props.storedChapter.chapterName}
        </div>
      );
    }
    return <Auxiliary>{topicsBody}</Auxiliary>;
  }
}

const mapStateToProps = (state) => {
  return { storedChapter: state.chapter };
};

export default connect(mapStateToProps)(Topics);
