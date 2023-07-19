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

const base_url = "http://13.234.104.94";
//const base_url = "https://nfc-backend-compass-5b3f.vercel.app";
//const base_url = "https://accessservices.site";

const tagRegister = (body) => {
  return axios.post(base_url + "/tagRegister", body, header);
};

const scanTag = (tagId) => {
  return axios.get(base_url + "/tags/" + tagId, header);
};

//for visitor:  tag count by given city and date(default current date)
const getTagStatusForVisitor = (body) => {
  return axios.post(base_url + "/tags/count", body, header);
};

///for admin || sAdmin: get all tags in a city
const getAllRegiteredTagsInACity = (cityName) => {
  return axios.get(base_url + "/tags/byCity/" + cityName, header);
};

//for admin: tag status complete details for a given date and city
const getTagStatusCompleteDetails = (body) => {
  return axios.post(base_url + "/tagDetailsByCity", body, header);
};

const deleteTagById=(id)=>{
  return axios.delete(base_url + "/tags/remove/"+id, header);
}

export default {
  tagRegister,
  scanTag,
  getTagStatusCompleteDetails,
  getAllRegiteredTagsInACity,
  getTagStatusForVisitor,
  deleteTagById
};
