import * as api from "../utils/api";
import React, { Component } from "react";

export const summaryStats = () => {
  const stats = {
    population: {
      totalCurrent: "",
      fun: "",
      be: "",
      fe: "",
      proj: "",
      grad: "",
    },
    currentResitters: { totalCurrent: "", fun: "", be: "", proj: "", fe: "" },
    pathways: {},
    graduates: { avgBlocks: "" },
  };
  return api
    .getstudents()
    .then((data) => {
      console.log(data);
      data.students.forEach((student) => {
        stats.population.totalCurrent++;
        stats.population[student.currentBlock]++;
        if (!stats.pathways[student.startingCohort]) {
          stats.pathways[student.startingCohort] = 0;
        }
        stats.pathways[student.startingCohort]++;
        /*         api.getsinglestudent(student._id).then((data) => {
          const { blockHistory } = data.student;

          if (blockHistory.length > 1) {
            if (
              blockHistory[blockHistory.length - 1].number ===
              blockHistory[blockHistory.length - 2].number
            ) {
              stats.currentResitters.totalCurrent++;
              stats.currentResitters[
                blockHistory[blockHistory.length - 1].slug
              ]++;
            }
          }
        }); */
      });
    })
    .then((data) => {
      return stats;
    });
};
