import React, { Component } from "react";
import * as api from "../utils/api";
export default class Add extends Component {
  state = { name: "", startingCohort: "" };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = (event) => {
    console.log(this.state);

    /*    alert(
      "A name was submitted: " + this.state.name + this.state.startingCohort
    ); */
    event.preventDefault();

    api.poststudent(this.state).then((data) => {
      console.log(data);
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
          <label>
            Name:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
              name="name"
            />
          </label>
        </ul>
        <ul>
          <label>
            Starting Cohort:
            <input
              type="integer"
              value={this.state.value}
              onChange={this.handleChange}
              name="startingCohort"
            />
          </label>
        </ul>
        <ul>
          <input type="submit" value="Submit" />
        </ul>
      </form>
    );
  }
}
