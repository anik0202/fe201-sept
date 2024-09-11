import React from "react";
import { Counter } from "./components/Counter";
import { Uncontrolled } from "./components/Uncontrolled";
import { Controlled } from "./components/Controlled";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: true,
    };
  }
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        {/* <h2>Uncontrolled Component</h2> */}
        {/* <Uncontrolled /> */}
        {/* <hr /> */}
        <h2>Controlled Component</h2>
        <button
          onClick={() => this.setState({ showForm: !this.state.showForm })}
        >
          Show/Hide
        </button>
        {this.state.showForm && <Controlled />}
        {/* <Counter name="Company A" diff={1} /> */}
        {/* <hr /> */}
        {/* <Counter name="Company B" diff={5} /> */}
      </div>
    );
  }
}

export const NUM = 100;

// 2 types of import/export
// 1. Default import/export
// 2. Named import/export

// Default import/export
// One module can have single default export
// Default export can be imported with any name

// Named import/export
// One module can have multiple named export
// Named export can be imported with specified name only

// 2 approaches -> Uncontrolled, Controlled
