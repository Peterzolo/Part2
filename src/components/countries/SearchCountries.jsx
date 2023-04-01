import React, { useState } from "react";

const SearchCountries = ({ countries }) => {
  const [query, setQuery] = useState("");

  const handleSearchInputChange = (event) => {
    setQuery(event.target.value);
  };

  const searchedCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(query.toLowerCase())
  );
  console.log("SEARCHED COUNTRIES", searchedCountries);

  return (
    <div>
      <div>
        <input
          className="search-input"
          type="text"
          placeholder="Search country by name ..."
          value={query}
          onChange={handleSearchInputChange}
        />
        <div className="countries-wrapper">
          {searchedCountries.length > 10 ? (
            <p>Too many matches, specify another filter</p>
          ) : (
            <ul className="countries-wrapper">
              {searchedCountries.map((country) => (
                <li key={country.cca3} className="countries-list">
                  {country.name.common}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchCountries;
