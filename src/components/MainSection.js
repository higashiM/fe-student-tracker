import React, { Component } from "react";
import { Router } from "@reach/router";
import SummaryInfo from "./SummaryInfo";
import DetailedInfo from "./DetailedInfo";
import HallofFame from "./HallofFame";
import Add from "./Add";
import Singlestudent from "./singlestudent";

export default class MainSection extends Component {
  render() {
    return (
      <div className="main-section">
        <Router>
          <SummaryInfo path="/" />
          <DetailedInfo path="/detailed/:block" />
          <HallofFame path="/hof" />
          <Add path="/add" />
          <Singlestudent path="/singlestudent/:id" />
        </Router>
      </div>
    );
  }
}
