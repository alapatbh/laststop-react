import React, { Component } from "react";
import { connect } from "react-redux";
import Auxiliary from "../../Hoc/Auxiliary";
import "./Topics.css";

class Topics extends Component {
  state = {
    listOfTopicsByChapter: [],
  };

  componentDidMount() {
    // console.log("[Topics.js] component did mount");
    const newTopisList = ["Serialization", "externalization", "Topics"];
    this.setState({ listOfTopicsByChapter: newTopisList });
  }

  render() {
    let topicsBody = <div></div>;
    // console.log(this.state.listOfTopicsByChapter);
    const topicList = this.state.listOfTopicsByChapter.map(
      (eachTopic, index) => (
        <div className="eachChapter" key={index}>
          {eachTopic}
        </div>
      )
    );
    if (this.props.storedChapter) {
      topicsBody = (
        <div className="TopicsCss">
          <b>Topics in {this.props.storedChapter.chapterName}</b>

          <div className="innerTopicsDiv">{topicList}</div>
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
