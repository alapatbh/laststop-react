import React, { Component } from "react";
import "./App.css";
import Auxiliary from "./Hoc/Auxiliary.js";
import Layout from "./Components/Layout/Layout";
import Courses from "./Container/Cources/Cources";

class App extends Component {
  componentDidMount() {
    document.title = "Interview Adda";
  }

  render() {
    return (
      <Auxiliary>
        <Layout>
          <Courses />
        </Layout>
      </Auxiliary>
    );
  }
}

export default App;
