import React from "react";
import { Counter } from "./components/Counter";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <Counter name="Company A" diff={1} />
        <hr />
        <Counter name="Company B" diff={5} />
      </div>
    );
  }
}
