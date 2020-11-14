import React from "react";
import questions from "./data";
import Component from "./Component";

function App() {
  return (
    <div className=" border-red-800 border-4 container mx-auto flex  flex-col h-screen items-center ">
      <h1>helo</h1>
      <div className="border-blue-500 border-2 container mx-250px">
        {" "}
        <h1>enna </h1>
      </div>
    </div>

    // {/* {questions.map((question) => {
    //   return <Component key={question.id} {...question}></Component>;
    // })} */}
  );
}

export default App;
