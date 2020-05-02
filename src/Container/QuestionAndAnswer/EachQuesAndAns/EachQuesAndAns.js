import React, { Component } from "react";
import Question from "../Question/Question";
import "./EachQuesAndAns.css";

class EachQuesAndAns extends Component {
  state = { showAnswer: false };
  clickedQuestionHandler = () => {
    const showAns = this.state.showAnswer;
    this.setState({ showAnswer: !showAns });
  };

  render() {
    let answerDiv = <div></div>;
    if (this.state.showAnswer) {
      answerDiv = <div className="answerCss">{this.props.answer}</div>;
    }
    return (
      <div className="QuestionCss">
        <div className="QuestionInnerCss">
          <div className="QuestionDataCss">
            <Question
              quesData={this.props.quesData}
              difficulty={this.props.difficulty}
              clickedQuestion={this.clickedQuestionHandler}
            />
          </div>
        </div>
        {answerDiv}
      </div>
    );
  }
}

export default EachQuesAndAns;
