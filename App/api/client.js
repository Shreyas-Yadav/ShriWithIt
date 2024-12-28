import { create } from "apisauce";
import cache from "../utility/cache";

const apiClient = create({
  baseURL: "http://10.0.0.75:9000/api",
  timeout: 10000,
});

const get = apiClient.get;

apiClient.get = async (url, params, axiosConfig) => {
  console.log("Request sent to server");

  const response = await get(url, params, axiosConfig);
  if (response.ok) {
    console.log(response.data);
    cache.store(url, response.data);
    return response;
  }

  console.log("request sent to cache store");
  const data = await cache.get(url);

  return data ? { ok: true, data } : response;
};

export default apiClient;
