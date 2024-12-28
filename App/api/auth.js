import apiClient from "./client";

const endpoint = "/auth";
const login = async (email, password) =>
  apiClient.post(endpoint, { email, password });

export default {
  login,
};
