import React from "react";
import Courses from "../../Container/Cources/Cources";
import Chapters from "../../Container/Chapters/Chapters";
import Topics from "../../Container/Topics/Topics";
import QuestionAndAnswer from "../../Container/QuestionAndAnswer/QuestionAndAnswer";

const Dashboard = () => {
  return (
    <div className="centerLayout">
      <div className="eachCenterDiv">
        <Courses />
      </div>
      <div className="coursesAndTopicsDiv">
        <div className="eachCenterDiv">
          <Chapters />
        </div>
        <div className="eachCenterDiv">
          <Topics />
        </div>
      </div>
      <div className="eachCenterDiv">
        <QuestionAndAnswer />
      </div>
    </div>
  );
};

export default Dashboard;
