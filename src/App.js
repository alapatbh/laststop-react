import React, { Component } from "react";
import "./App.css";
import Auxiliary from "./Hoc/Auxiliary/Auxiliary.js";
import Layout from "./Components/Layout/Layout";

class App extends Component {
  render() {
    return (
      <Auxiliary>
        <Layout>
          <p>This is inside Layout!</p>
        </Layout>
      </Auxiliary>
    );
  }
}

export default App;
