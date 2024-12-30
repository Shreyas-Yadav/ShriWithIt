import { create } from "apisauce";
import cache from "../utility/cache";
import auth from "./auth";
import storage from "../auth/storage";

const apiClient = create({
  baseURL: "http://10.0.0.75:9000/api",
  timeout: 10000,
});

apiClient.addAsyncRequestTransform(async (request) => {
  const authToken = await storage.getToken();
  if (!authToken) return;
  request.headers["x-auth-token"] = authToken;
});

const get = apiClient.get;

apiClient.get = async (url, params, axiosConfig) => {
  console.log("Request sent to server");

  const response = await get(url, params, axiosConfig);
  if (response.ok) {
    // console.log(response.data);
    cache.store(url, response.data);
    return response;
  }

  console.log("request sent to cache store");
  const data = await cache.get(url);

  return data ? { ok: true, data } : response;
};

export default apiClient;
