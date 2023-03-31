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

export const getAll = () => {
  const request = axios.get(baseUrl);
  return request;
};

export const deleteItem = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  console.log("REQUEST", request.data);
  return request;
};
// eslint-disable-next-line import/no-anonymous-default-export

export default {
  create,
};

// Fetches the array of names and phones from the API
export const getNamesAndPhones = async () => {
  try {
    const response = await axios.get(`${baseUrl}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const deleteFromPhoneBook = async (id) => {
  const request = await axios.delete(`${baseUrl}/${id}`);
  return request.data;
};
