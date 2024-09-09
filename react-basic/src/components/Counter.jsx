import React from "react";
import "../index.css";

export class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: this.props.name,
    };
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + this.props.diff,
    });
  };

  decrementCount = () => {
    this.setState({
      count: this.state.count - this.props.diff,
    });
  };

  render() {
    return (
      <div>
        <h2>Counter App built at {this.state.name}</h2>
        <p className={this.state.count >= 0 ? "positive" : "negative"}>
          Current Count: {this.state.count}
        </p>
        <button onClick={this.incrementCount}>
          Increment (+{this.props.diff})
        </button>
        <button onClick={this.decrementCount}>
          Decrement (-{this.props.diff})
        </button>
      </div>
    );
  }
}
