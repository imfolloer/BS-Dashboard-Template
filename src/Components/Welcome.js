import React, { Component } from "react";

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment() {
    /*this.setState(
      {
        count: this.state.count + 1
      },
      () => {
        //console.log("callback", this.state.count);
      }
    );*/
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  }

  incrementFive() {
    var i = 0;
    while (i < 5) {
      this.increment();
      i++;
    }
  }

  render() {
    return (
      <div>
        <h1>Welcome Vinay</h1>
        <h2>Counting {this.state.count}</h2>
        <button className="" onClick={() => this.incrementFive()}>
          Initiate Counting
        </button>
      </div>
    );
  }
}

export default Welcome;
