import React, { useEffect, useState } from "react";
import { getAll } from "../PhoneBook/service";

const PersonList = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    getAll().then((response) => {
      setPersons(response.data);
      console.log("GET ALL", response.data);
    });
  }, []);

  return (
    <div>
      <div>
        <h4>List Of Persons</h4>
        {persons?.map((person, index) => (
          <div key={index}>
            {person.name} {person.phone}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonList;
