import React, { Component } from "react";
import * as api from "../utils/api";

export default class Singlestudent extends Component {
  state = { student: [], isloading: true };
  componentDidMount() {
    //if (this.state.student._id !== this.props.id) {
    api.getsinglestudent(this.props.id).then((data) => {
      this.setState({ student: data.student, isloading: false });
    });
    //}
  }
  render() {
    const { student, isloading } = this.state;
    console.log(student);
    if (isloading) return <div>loading...</div>;
    else {
      return (
        <main>
          <h2>{student.name}</h2>
          <h3>starting cohort: {student.startingCohort}</h3>
          <div className="blockGrid">
            {student.blockHistory.map((block) => {
              return (
                <>
                  <span>{block.number}</span>
                  <span>{block.name}</span>
                  <span>{block.slug}</span>
                </>
              );
            })}
          </div>
        </main>
      );
    }
  }
}
