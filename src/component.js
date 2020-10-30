import React, { useState } from "react";

import AddIcon from "@material-ui/icons/Add";
import RemoveRoundedIcon from "@material-ui/icons/RemoveRounded";
import "./App.css";

const Component = ({ title, info }) => {
  const [showinfo, setInfo] = useState(false);
  const [showtitle, settitle] = useState(true);
  function titleFunc() {
    setInfo(!showinfo);
    settitle(!showtitle);
  }
  return (
    <div className="container">
      <div className="section">
        {showtitle && <h4>{title}</h4>}
        {showinfo && <p>{info}</p>}
      </div>
      <div className="button">
        <button id="btn" onClick={titleFunc}>
          {showtitle ? <AddIcon /> : <RemoveRoundedIcon />}
        </button>
      </div>
    </div>
  );
};

export default Component;
