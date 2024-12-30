import apiClient from "./client";

const loginEndpoint = "/auth";
const login = async (email, password) =>
  apiClient.post(loginEndpoint, { email, password });

const registerEndpoint = "/users";
const register = async (email, name, password) =>
  apiClient.post(registerEndpoint, { email, name, password });

export default {
  login,
  register,
};
