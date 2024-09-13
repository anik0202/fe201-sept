import React, { Component } from "react";
import axios from "axios";

export class Stock extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "" };
  }

  componentDidMount() {
    console.log("Mounted");
    this.timerRef = setInterval(() => this.getStockData(), 3000);
  }

  componentWillUnmount() {
    console.log("Component is being unmounted");
    clearInterval(this.timerRef);
  }

  getStockData = async () => {
    const response = await fetch("https://reqres.in/api/users/3");
    const result = await response.json();
    this.setState({ email: result.data.email });
    // const res = await axios.get(
    //   "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo"
    // );
    // const data = res.data;
    // console.log("data", data);
    // const value = Object.values(data["Time Series (5min)"])[this.state.entry][
    //   "4. close"
    // ];
    // console.log("value", value);

    // this.setState((state, props) => ({
    //   entry: state.entry + 1,
    //   value: value,
    // }));
  };

  render() {
    return (
      <div>
        Email {this.state.email && <span>Email: {this.state.email}</span>}
      </div>
    );
  }
}
