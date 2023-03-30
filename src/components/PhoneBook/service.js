import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const create = (newObject) => {
  const request = axios.post(baseUrl, newObject);
  return request
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
    });
};
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  create,
};
