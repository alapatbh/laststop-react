import React, { Component } from "react";
import "./App.css";
import Auxiliary from "./Hoc/Auxiliary.js";
import Layout from "./Components/Layout/Layout";

class App extends Component {
  componentDidMount() {
    document.title = "Interview Adda";
  }

  render() {
    return (
      <Auxiliary>
        <Layout />
      </Auxiliary>
    );
  }
}

export default App;
