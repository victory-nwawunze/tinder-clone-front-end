/** @format */

import axios from "axios";

const instance = axios.create({
  baseURL: "https://tinder-backend-4.herokuapp.com",
});
export default instance; 
