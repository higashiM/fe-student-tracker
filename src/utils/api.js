import Axios from "axios";

//refactor params --todo

const api = Axios.create({
  baseURL: "https://nc-student-tracker.herokuapp.com/api",
});

export const getstudents = async (params) => {
  const { data } = await api.get("/students", { params });
  return data;
};

export const getsinglestudent = async (id) => {
  const { data } = await api.get(`/students/${id}`);
  return data;
};

export const poststudent = async (params) => {
  const { data } = await api.post("/students", params);
  return data;
};

export const delstudent = async (id) => {
  const { data } = await api.delete(`/students/${id}`);
  return data;
};

export const progressstudent = async (id, params) => {
  console.log(params); // { progress: true }
  const { data } = await api.patch(`/students/${id}?progress=${params}`);
  return data;
};

//### **PATCH** `/api/students/:id?progress={true/false}`
