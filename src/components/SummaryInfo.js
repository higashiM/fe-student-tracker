import React, { Component } from "react";
import * as api from "../utils/api";
import * as stats from "../utils/stats";
import { Chart } from "react-google-charts";
import { Link } from "@reach/router";

export default class SummaryInfo extends Component {
  state = {
    blockArr: ["fun", "be", "fe", "proj"],
    stats: {},
    isLoading: true,
    lastUpdate: "",
  };
  componentDidMount(prevState) {
    this.loadPage();
  }

  loadPage = () => {
    stats.summaryStats().then((data) => {
      const now = new Date().toLocaleString();

      this.setState({ stats: data, isLoading: false, lastUpdate: now });
    });
  };

  render() {
    const { isLoading, lastUpdate } = this.state;
    const { population, currentResitters } = this.state.stats;

    if (isLoading) return <div>Loading Chart</div>;
    else {
      console.log(this.state);
      return (
        <main>
          <div>Last Update: {lastUpdate}</div>
          <div className={"chart-container"}>
            <Chart
              width={"500px"}
              height={"300px"}
              chartType="BarChart"
              loader={<div>Loading Chart</div>}
              data={[
                ["Block", "TotalStudents"],
                ["Fundamentals", population.fun],
                ["Back-End", population.be],
                ["Front-End", population.fe],
                ["Project", population.proj],
              ]}
              options={{
                title: "Northcoder Student Resitters",
                legend: "none",
                chartArea: { width: "60%" },
                hAxis: {
                  // title: "Students",
                  minValue: 0,
                },
                vAxis: {
                  //title: "Block",
                },
              }}
              // For tests
              rootProps={{ "data-testid": "1" }}
            />
          </div>
        </main>
      );
    }
  }
}
