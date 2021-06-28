import React from "react";

function FunctionClick() {
  function clickHandler() {
    alert("Function Button Clicked");
  }
  return (
    <div>
      <br />
      <button className="" onClick={clickHandler}>
        Click Function
      </button>
    </div>
  );
}

export default FunctionClick;
