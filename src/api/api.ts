import axios from "axios";

export const baseService = axios.create({
  baseURL: process.env.REACT_APP_API_SERVER,
});