import axios from "axios";

import { getAuthToken } from "./common";

const token = getAuthToken();

const header = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    accept: "application/json",
    token: token,
  },
};

const base_url = "http://3.110.105.36";

const createUser = (body) => {
  return axios.post(base_url + "/createUser", body, header);
};

//list of all users
const getListOfUsers = () => {
  return axios.get(base_url + "/users", header);
};

//delete a user
const deleteUser = (userId) => {
  return axios.delete(base_url + "/users/"+userId, header);
};

export default {
  createUser,
  getListOfUsers,
  deleteUser,
};
