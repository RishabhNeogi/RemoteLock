class UrlHelper {
  constructor() {
    this.baseUrl = process.env.REACT_APP_BASE_URL;
    this.apiUrl = process.env.REACT_APP_API_URL || this.baseUrl;
  }

  getBase(path = "") {
    return `${this.baseUrl}${path}`;
  }

  getApi(path = "") {
    return `${this.apiUrl}${path}`;
  }
}
const Url = new UrlHelper();

export default Url;
