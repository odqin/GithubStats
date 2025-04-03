// src/index.ts
import axios from "axios";
var GithubStats = class {
  token;
  constructor(token) {
    this.token = token || "";
  }
  async getUserStats(username) {
    var _a;
    try {
      if (!this.token) {
        console.warn("No GitHub token provided. Rate limits may apply.");
      }
      const userResponse = await axios.get(`https://api.github.com/users/${username}`, {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      });
      return userResponse.data;
    } catch (error) {
      if (((_a = error.response) == null ? void 0 : _a.status) === 401) {
        throw new Error("Invalid token. Update your GITHUB_TOKEN!");
      }
      throw new Error("Failed to fetch user stats");
    }
  }
};
export {
  GithubStats
};
