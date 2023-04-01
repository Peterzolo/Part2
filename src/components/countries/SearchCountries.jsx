import React, { useState } from "react";
import CountryDetails from "./CountryDetails";

const SearchCountries = ({ countries }) => {
  const [query, setQuery] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleSearchInputChange = (event) => {
    setQuery(event.target.value);
  };

  const searchedCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(query.toLowerCase())
  );

  const singleCountryDetail = searchedCountries[0];

  return (
    <div>
      <div>
        <input
          className="search-input"
          type="text"
          placeholder="Find Countries ..."
          value={query}
          onChange={handleSearchInputChange}
        />
        <div className="countries-wrapper">
          {searchedCountries.length > 10 ? (
            <p>Too many matches, specify another filter</p>
          ) : searchedCountries.length === 1 ? (
            <div>
              <div> Name: {singleCountryDetail.name.common}</div>
              <div> Capital: {singleCountryDetail.capital[0]}</div>
              <div> Flag :{singleCountryDetail.flag}</div>
              <div> Aera: {singleCountryDetail.area}</div>
              <div>
                {" "}
                Languages:{" "}
                {Object.values(singleCountryDetail.languages).join(", ")}
              </div>
            </div>
          ) : (
            <ul className="countries-wrapper">
              {searchedCountries.map((country) => (
                <li key={country.cca3} className="countries-list">
                  {country.name.common}
                  <button
                    className="show-btn"
                    onClick={() => setSelectedCountry(country)}
                  >
                    Show
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      {selectedCountry && <CountryDetails country={selectedCountry} />}
    </div>
  );
};

export default SearchCountries;
