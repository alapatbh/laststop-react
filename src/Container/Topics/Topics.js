import React, { Component } from "react";
import { connect } from "react-redux";
import Auxiliary from "../../Hoc/Auxiliary";
import "./Topics.css";

class Topics extends Component {
  state = {
    listOfTopicsByChapter: [],
    newTopic: "",
  };

  componentDidMount() {
    // console.log("[Topics.js] component did mount");
    const newTopisList = [{ topicId: 1, chapterId: 1, topicName: "Strings" }];
    this.setState({ listOfTopicsByChapter: newTopisList });
  }

  onTopicChangeHandler = (event) => {
    this.setState({ newTopic: event.target.value });
  };

  onNewTopicAddButton = () => {
    const newTopicObj = {
      topicId: Math.random(),
      chapterId: this.props.storedChapter.chapterId,
      topicName: this.state.newTopic,
    };
    let addedTopicToList = [...this.state.listOfTopicsByChapter, newTopicObj];
    this.setState({ listOfTopicsByChapter: addedTopicToList, newTopic: "" });
  };

  render() {
    let topicsBody = <div></div>;

    if (this.props.storedChapter) {
      const topicListFilter = this.state.listOfTopicsByChapter.filter(
        (eachTopic) =>
          eachTopic.chapterId === this.props.storedChapter.chapterId
      );
      const topicList = topicListFilter.map((eachTopic, index) => (
        <div
          className="eachChapter"
          key={index}
          onClick={() => this.props.onClickTopic(eachTopic)}
        >
          {eachTopic.topicName}
        </div>
      ));
      topicsBody = (
        <div className="TopicsCss">
          <b>Topics in {this.props.storedChapter.chapterName}</b>
          <div className="innerTopicsDiv">{topicList}</div>
          <div>
            <input
              type="text"
              size="10"
              value={this.state.newTopic}
              onChange={this.onTopicChangeHandler}
            />
            &nbsp;
            <button onClick={this.onNewTopicAddButton}>+</button>
          </div>
        </div>
      );
    }
    return <Auxiliary>{topicsBody}</Auxiliary>;
  }
}

const mapStateToProps = (state) => {
  return { storedChapter: state.chapter };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClickTopic: (topic) =>
      dispatch({
        type: "SELECTEDTOPIC",
        value: topic,
      }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Topics);
