import React, { Component } from "react";
import * as api from "../utils/api";
import { Link } from "@reach/router";

export default class DetailedInfo extends Component {
  state = { students: [], isloading: true };
  componentDidUpdate(prevProps) {
    if (prevProps.block !== this.props.block) {
      this.loadPage();
    }
  }
  componentDidMount() {
    this.loadPage();
  }
  loadPage = () => {
    const params = { graduated: false };
    if (this.props.block !== "all") params.block = this.props.block;

    api.getstudents(params).then((data) => {
      this.setState({
        students: data.students,
        block: this.props.block,
        isloading: false,
      });
    });
  };
  render() {
    const { students, isloading } = this.state;

    return isloading ? (
      <div>loading</div>
    ) : (
      <div className="studentGrid">
        <span className="studentList__Header">Name</span>
        <span className="studentList__Header">Start Cohort</span>
        <span className="studentList__Header">Curr Block</span>
        <span className="studentList__Header">Student ID </span>

        {students.map((student, index) => {
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
              <span className="studentList__student">
                <Link to={`/singlestudent/${student._id}`}> {student._id}</Link>
              </span>
            </>
          );
        })}
      </div>
    );
  }
}
