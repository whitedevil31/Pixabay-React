import React from "react";
import questions from "./data";
import Component from "./Component";

function App() {
  return (
    <div className="container">
      <h2>Questions and Answers about login</h2>
      <button> CLICK</button>
      {/* {questions.map((question) => {
        return <Component key={question.id} {...question}></Component>;
      })} */}
    </div>
  );
}

export default App;
