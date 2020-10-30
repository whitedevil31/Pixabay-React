import React, { useState } from "react";

import AddIcon from "@material-ui/icons/Add";
import "./App.css";

const Component = ({ title, info }) => {
  const [showinfo, setInfo] = useState(false);
  return (
    <div className="container">
      <div className="section">
        <h4>{title}</h4>
        <button className="btn" onClick={() => setInfo(!showinfo)}>
          <AddIcon />
        </button>
      </div>
      {showinfo && <p>{info}</p>}
    </div>
  );
};

export default Component;
