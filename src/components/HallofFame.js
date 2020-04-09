import React, { Component } from "react";

import * as api from "../utils/api";
import { Link } from "@reach/router";

export default class HallofFame extends Component {
  state = { students: [] };
  componentDidMount() {
    const params = { graduated: true };
    api.getstudents(params).then((data) => {
      console.log(data.students);

      this.setState({ students: data.students });
    });
  }

  render() {
    const { students } = this.state;

    return (
      <div className="studentGrid">
        <span className="studentList__Header">Name</span>
        <span className="studentList__Header">Start Cohort</span>
        <span className="studentList__Header">Curr Block</span>

        <span className="studentList__Header">_id</span>
        {students.map((student) => {
          return (
            <>
              <span className="studentList__student">
                {" "}
                <Link to={`/singlestudent/${student._id}`}>{student.name}</Link>
              </span>
              <span className="studentList__student">
                {student.startingCohort}
              </span>
              <span className="studentList__student">
                {student.currentBlock}
              </span>
              <span className="studentList__student">{student._id}</span>
            </>
          );
        })}
      </div>
    );
  }
}
