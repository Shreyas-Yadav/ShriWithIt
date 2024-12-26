import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://10.0.0.75:9000/api",
  timeout: 7000,
});

// apiClient.addRequestTransform((request) => {
//   console.log("Request: ", {
//     url: request.url,
//     method: request.method,
//     data: request.data,
//     headers: request.headers,
//   });

//   if (request.data instanceof FormData) {
//     request.headers["Content-Type"] = "multipart/form-data";

//     const formDataEntries = [];
//     for (let pair of request.data.entries()) {
//       formDataEntries.push(pair);
//     }
//     console.log("FormData entries:", formDataEntries);
//   }
// });

// apiClient.addMonitor((response) => {
//   console.log("Response:", {
//     url: response.config.url,
//     status: response.status,
//     problem: response.problem,
//     data: response.data,
//     duration: response.duration,
//   });
// });

export default apiClient;
