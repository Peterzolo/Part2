import React, { useEffect, useState } from "react";
import axios from "axios";
import ErrorNotification from "../notification/ErrorNotification";

const CountryDetails = (country) => {
  const [weatherInfo, setWeatherInfo] = useState(null);
  const selectedCountry = country.country;

  const api_key = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    const fetchWeatherInfo = async () => {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${selectedCountry.capital}&appid=${api_key}`
      );
      setWeatherInfo(response.data);
    };

    fetchWeatherInfo();
  }, []);

  return (
    <div>
      <div className="detail-wrapper">
        <h5>Name:</h5>
        <div>{selectedCountry.name.common}</div>
      </div>
      <div className="detail-wrapper">
        <h5>Flag:</h5>
        <div>{selectedCountry.flag}</div>
      </div>
      <div className="detail-wrapper">
        <h5>Area:</h5>
        <div>{selectedCountry.area}</div>
      </div>
      <div className="detail-wrapper">
        <h5>Capital:</h5>
        <div>{selectedCountry.capital}</div>
      </div>
      <div className="detail-wrapper">
        <h5>Region:</h5>
        <div>{selectedCountry.region}</div>
      </div>
      <h3 className="weather-title">
        Weather in : {selectedCountry.capital} - {selectedCountry.name.common}
      </h3>
      {!weatherInfo ? (
        <ErrorNotification
          message={"Weather report is not available at the moment"}
        />
      ) : (
        <>
          <div className="detail-wrapper">
            <h5>Temperature:</h5>
            <div>{weatherInfo?.main?.temp}</div>
          </div>
          <div className="detail-wrapper">
            <h5>Visibility:</h5>
            <div>{weatherInfo?.visibility}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default CountryDetails;
