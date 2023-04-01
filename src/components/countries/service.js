import axios from "axios";
const baseUrl = "https://restcountries.com";

export const getAllCountries = () => {
  const request = axios.get(`${baseUrl}/all`);
  return request;
};
