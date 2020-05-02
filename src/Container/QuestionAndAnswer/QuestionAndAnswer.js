import React, { Component } from "react";
import { connect } from "react-redux";
import "./QuestionAndAnswer.css";
import EachQuesAndAns from "./EachQuesAndAns/EachQuesAndAns";
import Auxiliary from "../../Hoc/Auxiliary";

class QuestionAndAnswer extends Component {
  state = {
    listQuesAndAns: [],
  };

  componentDidMount() {
    const QuestionAndAnswerList = [
      {
        questionId: 1,
        question: "What is immutable class?",
        answer:
          "Immutable class means that once an object is created, we cannot change its content.",
        difficulty: "h",
        topicId: 1,
      },
      {
        questionId: 2,
        question: "What are different ways to create String Object?",
        answer: 'String str = new String("abc");    String str1 = "abc";',
        difficulty: "m",
        topicId: 1,
      },
    ];
    this.setState({ listQuesAndAns: QuestionAndAnswerList });
  }

  render() {
    let QuesAndAnsBody = <div></div>;
    if (this.props.storedTopic) {
      const questionsRelatedToTopic = this.state.listQuesAndAns.filter(
        (eachQues) => eachQues.topicId === this.props.storedTopic.topicId
      );
      const quesMap = questionsRelatedToTopic.map((eachQues, index) => {
        return (
          <Auxiliary key={eachQues.questionId}>
            <EachQuesAndAns
              quesData={eachQues.question}
              difficulty={eachQues.difficulty}
              answer={eachQues.answer}
            />
          </Auxiliary>
        );
      });
      QuesAndAnsBody = (
        <div className="QuesAndAnsCss">
          <div className="quesHeading">
            <b>Questions in {this.props.storedTopic.topicName}</b>
          </div>
          <div className="QuesMap">{quesMap}</div>
        </div>
      );
    }
    return <div>{QuesAndAnsBody}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    storedTopic: state.topic,
  };
};

export default connect(mapStateToProps)(QuestionAndAnswer);
