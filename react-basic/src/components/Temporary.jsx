import React from "react";

export class Temporary extends React.Component {
  constructor() {
    super();
    console.log("Temporary: Constructor");
  }

  componentDidMount() {
    console.log("Temporary: componentDidMount");
  }

  componentDidUpdate() {
    console.log("Temporary: componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("Temporary: componentWillUnmount");
  }

  render() {
    console.log("Temporary: Render");
    return (
      <div>
        <p>Temporary</p>
      </div>
    );
  }
}

// React is dealing with Form -> Controlled component
// Uncontrolled component
