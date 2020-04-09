import React, { Component } from "react";
import * as api from "../utils/api";

export default class Singlestudent extends Component {
  state = { student: [], isloading: true, ismsg: false, isdeleted: false };
  componentDidMount() {
    this.getstudentdata();
  }

  componentDidUpdate() {
    // this.getstudentdata();
  }

  getstudentdata = () => {
    api.getsinglestudent(this.props.id).then((data) => {
      this.setState({ student: data.student, isloading: false });
    });
  };

  deletestudentdata = () => {
    console.log("deleting");
    api.delstudent(this.props.id).then((data) => {
      this.setState({
        isloading: false,
        ismsg: "DELETED!!! Goodbye ",
        isdeleted: true,
      });
    });
  };

  progessStudentTrue = () => {
    api.progressstudent(this.props.id, "true").then((data) => {
      this.setState({
        student: data.student,
        isloading: false,
        ismsg: "Yay student has progressed ",
      });
    });
  };

  progessStudentFalse = () => {
    api.progressstudent(this.props.id, "false").then((data) => {
      console.log(data);
      this.setState({
        student: data.student,
        isloading: false,
        ismsg: "Student is redoing the block ",
      });
    });
  };

  render() {
    const { student, isloading, ismsg, isdeleted } = this.state;
    if (isloading) return <div>loading...</div>;
    else {
      return (
        <main>
          <h2>{student.name}</h2>
          <h3>starting cohort: {student.startingCohort}</h3>
          <div className="blockGrid">
            <span>Block</span>
            <span>Name</span>
            <span>Slug</span>

            {student.blockHistory.map((block) => {
              return (
                <>
                  <span>{block.number}</span>
                  <span>{block.name}</span>
                  <span>{block.slug}</span>
                </>
              );
            })}
            {isdeleted ? null : (
              <div>
                <button onClick={this.progessStudentTrue}>
                  PROGRESS THIS STUDENT
                </button>
                <button onClick={this.progessStudentFalse}>
                  DONT PROGRESS THIS STUDENT
                </button>
                <button onClick={this.deletestudentdata}>
                  DELETE THIS STUDENT
                </button>
              </div>
            )}
            {ismsg ? (
              <div>
                <h1>
                  {ismsg}
                  {student.name}
                </h1>{" "}
              </div>
            ) : null}
          </div>
        </main>
      );
    }
  }
}
