import axios from "axios";

const api = axios.create({
  baseURL: "https://graph.instagram.com/me",
});

export { api };
