import React from "react";

export class Uncontrolled extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    console.log("name", e.target.fullName.value);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" name="fullName" autoComplete="off" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

// React is dealing with Form -> Controlled component
// Uncontrolled component
