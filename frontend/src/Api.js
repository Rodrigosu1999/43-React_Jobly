import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    //there are multiple ways to pass an authorization token, this is how you pass it in the header.
    //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get all companies.  */

  static async getCompanies() {
    try {
      let res = await this.request(`companies/`);
      return res.companies;
    } catch (err) {
      console.error("API Error:", err.response);
    }
  }
  
  /** Get all companies with filter.  */

  static async getCompaniesFiltered(query) {
    try {
      let res = await this.request(`companies?${query}`);
      return res.companies;
    } catch (err) {
      console.error("API Error:", err.response);
      let res = await this.request(`companies/`);
      return res.companies;
    }
  }
  /** Get details on a company by handle. */

  static async getCompany(handle) {
    try {
      let res = await this.request(`companies/${handle}`);
    return res.company;
    } catch (err) {
    }
  }

  /** Get all jobs. */

  static async getJobs() {
    try {
      let res = await this.request(`jobs/`);
    return res.jobs;
    } catch (err) {
    }
  }
  
  /** Get user's info */

  static async getInfo(user) {
    try {
      let res = await this.request(`users/${user}/`);
      return res.user;
    } catch (err) {
      return false
    }
  }

  /** Login */

  static async login(username, password) {
    try {
      let res = await this.request(`auth/token/`, {username, password}, "post");
      JoblyApi.token = res.token;
      return res.token;
    } catch (err) {
      return false
    }
  }
  
  /** Register */

  static async register(username, password, firstName, lastName, email) {
    try {
      let res = await this.request(`auth/register/`, {username, password, firstName, lastName, email}, "post");
      JoblyApi.token = res.token;
      return res.token;
    } catch (err) {
      return false
    }
  }

  /** Update user's profile */

  static async update(username, firstName, lastName, email) {
    try {
      let res = await this.request(`users/${username}/`, {firstName, lastName, email}, "patch");
      return res.user;
    } catch (err) {
      return false
    }
  }
  
  /** Apply to a job */

  static async apply(username, jobId) {
    try {
      let res = await this.request(`users/${username}/jobs/${jobId}`, {}, "post");
    } catch (err) {
      return false
    }
  }
  
  /** Logout */

  static async logout() {
    try {
      JoblyApi.token = false
    } catch (err) {
      console.error("API Error:", err.response);
    }
  }
}

    export default JoblyApi;