import React from "react";

const Search = ({ persons, searchName, setsearchName }) => {
  const handleSearchChange = (event) => {
    setsearchName(event.target.value);
  };

  const filteredPersonNames = persons.filter((person) =>
    person.name.toLowerCase().includes(searchName.toLowerCase())
  );
  return (
    <div>
      <h4>Search Persons</h4>
      <form action="">
        <input
          type="text"
          placeholder="Search"
          value={searchName}
          onChange={handleSearchChange}
        />
      </form>
      <div>
        {filteredPersonNames.map((personName, index) => (
          <div key={index}>
            <p>{personName.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
