import "./App.css";
import React from "react";
import questions from "./data";
import Component from "./Component";

function App() {
  return (
    <div className="body">
      <h2>Questions and Answers about login</h2>
      {questions.map((question) => {
        return <Component key={question.id} {...question}></Component>;
      })}
    </div>
  );
}

export default App;
