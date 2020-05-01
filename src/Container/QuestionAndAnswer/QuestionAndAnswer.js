import React, { Component } from "react";
import { connect } from "react-redux";
import "./QuestionAndAnswer.css";
import Question from "./Question/Question";

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
          <div className="QuestionCss" key={eachQues.questionId}>
            <div className="QuestionInnerCss">
              <div className="QuestionDataCss">
                <Question
                  quesData={eachQues.question}
                  difficulty={eachQues.difficulty}
                  // OnclicKQuestion={}
                />
              </div>
            </div>
            <div className="answerCss">{eachQues.answer}</div>
          </div>
        );
      });
      QuesAndAnsBody = (
        <div className="QuesAndAnsCss">
          <div className="quesHeading">
            <b>Questions from {this.props.storedTopic.topicName}</b>
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
