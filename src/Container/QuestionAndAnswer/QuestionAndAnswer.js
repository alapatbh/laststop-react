import React, { Component } from "react";
import { connect } from "react-redux";
import "./QuestionAndAnswer.css";
import EachQuesAndAns from "./EachQuesAndAns/EachQuesAndAns";
import Auxiliary from "../../Hoc/Auxiliary";

class QuestionAndAnswer extends Component {
  state = {
    listQuesAndAns: [],
    inputQuestion: "",
    inputAnswer: "",
    inputDifficulty: "",
  };

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  addQuestionHandler = () => {
    console.log("[QuestionAnsAnswer.js] -> addQuestionHandler");
    const newQuesAndAns = {
      questionId: Math.random(),
      question: this.state.inputQuestion,
      answer: this.state.inputAnswer,
      difficulty: this.state.difficulty,
      topicId: this.props.storedTopic.topicId,
    };
    const changedList = [...this.state.listQuesAndAns, newQuesAndAns];
    console.log("[QuestionAnsAnswer.js] -> " + changedList);
    this.setState({
      listQuesAndAns: changedList,
      inputQuestion: "",
      inputAnswer: "",
    });
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
      const quesMap = questionsRelatedToTopic.map((eachQues) => {
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
          <div>
            <table className="quesAnsTable">
              <tbody>
                <tr>
                  <td className="headingTd">Question:</td>
                  <td className="mainTd">
                    <input
                      onChange={(e) => this.handleInputChange(e)}
                      name="inputQuestion"
                      value={this.state.inputQuestion}
                      type="text"
                    />
                  </td>
                  <td className="rightTd">
                    <select
                      onChange={(e) => this.handleInputChange(e)}
                      name="inputDifficulty"
                    >
                      <option value="e">Easy</option>
                      <option value="m">Medium</option>
                      <option value="h">Hard</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>Answer:</td>
                  <td>
                    <textarea
                      onChange={(e) => this.handleInputChange(e)}
                      value={this.state.inputAnswer}
                      name="inputAnswer"
                      rows="3"
                    />
                  </td>
                  <td>
                    <button onClick={this.addQuestionHandler}>Save</button>
                  </td>
                </tr>
              </tbody>
            </table>
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
