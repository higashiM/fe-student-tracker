import Axios from "axios";

const api = Axios.create({
  baseURL: "https://nc-student-tracker.herokuapp.com/api",
});

export const getstudents = async (params) => {
  console.log(params);
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
