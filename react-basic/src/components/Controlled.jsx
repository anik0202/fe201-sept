import React from "react";
import { Temporary } from "./Temporary";

export class Controlled extends React.Component {
  constructor(props) {
    console.log("Mounting: Constructor");
    super(props);
    this.state = {
      fullName: "",
      num: 4,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("name", this.state.fullName);
  };

  handleNameChange = (e) => {
    if (this.state.num === 3) {
      return;
    }
    this.setState({ fullName: e.target.value });
  };

  componentDidMount() {
    console.log("Mounting: componentDidMount");
  }

  componentDidUpdate() {
    console.log("Updating: componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("Unmounting: componentWillUnmount");
  }

  render() {
    console.log("Render");
    return (
      <div>
        <p>{this.state.fullName}</p>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="fullName"
              autoComplete="off"
              onChange={this.handleNameChange}
              value={this.state.fullName}
            />
          </label>
          <input type="submit" value="Submit" />
          <Temporary />
        </form>
      </div>
    );
  }
}

// React is dealing with Form -> Controlled component
// Uncontrolled component
