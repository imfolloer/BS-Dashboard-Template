import React, { Component } from "react";

class ClassClick extends Component {
  clickHandler() {
    alert("Class button clicked");
  }
  render() {
    return (
      <div>
        <br />
        <button className="" onClick={this.clickHandler}>
          Click class
        </button>
      </div>
    );
  }
}

export default ClassClick;
