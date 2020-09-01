export default class Model {
  constructor (axiosInstance) {
    this.api = axiosInstance;
  }
  
  async get(url) {
    try {
      const res = await this.api.get(url);
      return res.data;
    } catch(e) {
      return new Error(e);
    }
  }

  async post(url, data) {
    try {
      const res = await this.api.post(url, data);
      return res.data;
    } catch(e) {
      return new Error(e);
    }
  }
}
