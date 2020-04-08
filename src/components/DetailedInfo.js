import React, { Component } from "react";
import * as api from "../utils/api";
import { Link } from "@reach/router";

export default class DetailedInfo extends Component {
  state = { students: [] };
  componentDidUpdate() {
    this.loadPage();
  }
  componentDidMount() {
    this.loadPage();
  }
  loadPage = () => {
    if (this.props.block !== this.state.block) {
      const params = { graduated: false };
      if (this.props.block !== "all") params.block = this.props.block;

      api.getstudents(params).then((data) => {
        console.log(data.students);

        this.setState({ students: data.students, block: this.props.block });
      });
    }
  };
  render() {
    //return <h1>{this.props.cohort}</h1>;
    //import { Link } from "@reach/router";
    const { students } = this.state;

    return (
      <div className="statsGrid">
        <span className="studentList__Header">Student</span>
        <span className="studentList__Header">Name</span>
        <span className="studentList__Header">Start Cohort</span>
        <span className="studentList__Header">Curr Block</span>

        {students.map((student, index) => {
          return (
            <>
              <span className="studentList__student">{index + 1}</span>
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
            </>
          );
        })}
      </div>
    );
  }
}
