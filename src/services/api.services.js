import axios from "axios";

import * as endpoints from "./Endpoints";

let token = "";
const user = JSON.parse(window.localStorage.getItem("farmzone_user"));
if (!user || (user && user.user) === undefined) {
  token = null;
} else {
  token = user.user.token;
}

const API = (header) => {
  return axios.create({
    baseURL: endpoints.api.baseUrl,
    headers: {
      ...header,
      "Authorization": `Bearer ${token}`,
    }
  })
} 

export default API;