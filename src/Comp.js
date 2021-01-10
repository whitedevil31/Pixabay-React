import React from "react";

function Comp(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h5>{props.id}</h5>
    </div>
  );
}

export default Comp;
