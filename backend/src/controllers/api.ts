import axios from "axios";

const gify = axios.create({
  baseURL: "http://api.giphy.com/v1/gifs/",
});

export { gify };
