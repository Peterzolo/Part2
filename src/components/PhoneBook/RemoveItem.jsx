import axios from "axios";
import React, { useState } from "react";

const RemoveItem = () => {
  const [persons, setPersons] = useState([]);

  const handleDeletePerson = (id) => {
    axios
      .delete(`http://localhost:3001/persons/${id}`)
      .then((response) => {
        const updatedPersons = persons.filter((person) => person.id !== id);
        setPersons(updatedPersons);
        window.alert(`Person with id ${id} deleted successfully`);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div>
        {persons.map((person) => (
          <div key={person.id}>
            <p>{person.number}</p>
            <button onClick={() => handleDeletePerson(person.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RemoveItem;
