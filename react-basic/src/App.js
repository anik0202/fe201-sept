import React from "react";
import { Counter } from "./components/Counter";
import { Uncontrolled } from "./components/Uncontrolled";
import { Controlled } from "./components/Controlled";
import { Mount } from "./components/Mount";
import Update from "./components/Update";
import { Stock } from "./components/Stock";
import { Hello } from "./components/Hello";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: 1,
      showForm: true,
      checked: false,
    };
  }

  handleChecked(e) {
    this.setState({
      checked: e.target.checked,
    });
  }

  render() {
    return (
      <div>
        <Hello name="XYZ" />
        {/* <h1>Hello World!</h1> */}
        {/* <h2>Uncontrolled Component</h2> */}
        {/* <Uncontrolled /> */}
        {/* <hr /> */}
        {/* <h2>Controlled Component</h2> */}
        {/* <button
          onClick={() => this.setState({ showForm: !this.state.showForm })}
        >
          Show/Hide
        </button> */}
        {/* {this.state.showForm && <Controlled />} */}
        {/* <Counter name="Company A" diff={1} /> */}
        {/* <hr /> */}
        {/* <Counter name="Company B" diff={5} /> */}
        {/* <Mount /> */}
        {/* <input
          type="number"
          value={this.state.userId}
          onChange={(e) => this.setState({ userId: e.target.value })}
        /> */}
        {/* <Update userId={this.state.userId} /> */}
        {/* <input
          type="checkbox"
          value={this.state.checked}
          onClick={(e) => this.handleChecked(e)}
        /> */}
        {/* {this.state.checked && <Stock />} */}
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
