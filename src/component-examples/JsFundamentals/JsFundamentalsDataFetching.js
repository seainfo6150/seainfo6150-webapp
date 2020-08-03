import React, { Component } from "react";

export default class JsFundamentalsDataFetching extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  async componentDidMount() {
    // performs a GET request
    const response = await fetch(
      "http://dummy.restapiexample.com/api/v1/employees"
    );
    const responseJson = await response.json();
    this.setState({ data: responseJson.data });
  }

  render() {
    let displayContent;

    if (this.state.data.length) {
      displayContent = (
        <ul>
          {this.state.data.map((item) => (
            <li key={item.id}>{item.employee_name}</li>
          ))}
        </ul>
      );
    } else {
      displayContent = <div>You have no data!</div>;
    }

    return (
      <section>
        <header>
          <h2>Data fetching</h2>
        </header>
        {displayContent}
      </section>
    );
  }
}
