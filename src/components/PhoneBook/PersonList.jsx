import React from "react";

const PersonList = ({ persons }) => {
  return (
    <div>
      <div>
        <h4>List Of Persons</h4>
        {persons.map((person, index) => (
          <div key={index}>
            {person.name} {person.phone}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonList;
