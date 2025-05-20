import axios from "axios";

const gify = axios.create({
  baseURL: "http://api.giphy.com/v1/gifs/",
  headers: {
    "Content-Type": "application/json",
  },
});

export { gify };
