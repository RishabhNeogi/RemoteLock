import axios from "axios";
import Url from "./Url";

class Backend {
  constructor() {
    this.api = axios.create({
      baseURL: Url.getApi(""),
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + process.env.REACT_APP_AUTH_TOKEN,
      },
    });
  }

  async get(resource) {
    try {
      const response = await this.api.get(resource);
      console.log(response);
      return response.data;
    } catch (error) {
      console.error("Error fetching data", error);
      throw error;
    }
  }
}

const Api = new Backend();

export default Api;
