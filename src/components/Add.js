import React, { Component } from "react";
import * as api from "../utils/api";
import { Link } from "@reach/router";
export default class Add extends Component {
  state = {
    name: "",
    startingCohort: "",
    isloading: true,
    student: { name: "", _id: "", _startingCohort: "" },
  };

  handleChange = (event) => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = (event) => {
    console.log(this.state);

    event.preventDefault();

    const { name, startingCohort } = this.state;

    api.poststudent({ name, startingCohort }).then((data) => {
      this.setState({
        name: "",
        startingCohort: "",
        student: data.student,
        isloading: false,
      });
    });
  };

  render() {
    const { student, isloading } = this.state;
    return (
      <main>
        <form onSubmit={this.handleSubmit}>
          <ul>
            <label>
              Name:
              <input
                type="text"
                value={this.state.name}
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
                value={this.state.startingCohort}
                onChange={this.handleChange}
                name="startingCohort"
              />
            </label>
          </ul>
          <ul>
            <input type="submit" value="Submit" />
          </ul>
        </form>

        {isloading ? (
          <div>once added the student info will display here</div>
        ) : (
          <div>
            <h2>{student.name}</h2>
            <h3>starting cohort: {student.startingCohort}</h3>

            <h4>student ID: {student._id}</h4>

            <Link to={`/singlestudent/${student._id}`}> Detailed View</Link>
          </div>
        )}
      </main>
    );
  }
}
